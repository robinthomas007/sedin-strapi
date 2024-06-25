resource "aws_ecs_task_definition" "strapi_task_definition" {
    family = format("%s-strapi-sedin", var.AppEnvPrefix)

    container_definitions = jsonencode([{
        name = "strapi-sedin",
        image = var.StrapiImage
        cpu = var.StrapiContainerCpu
        memory = var.StrapiContainerMemory
        essential = true
        portMappings = [{
            containerPort = 1337
        }]
        environment = [
            {
              name = "APP_ENV"
              value = var.AppEnv

            },
            {
              name = "HOST"
              value = var.Host
            },
            {
                name = "APP_KEYS"
                value = var.AppKeys
            },
            {
                name = "API_TOKEN_SALT"
                value = var.ApiTokenSalt
            },
            {
                name = "ADMIN_JWT_SECRET"
                value = var.AdminJwtSecret
            },
            {
                name = "TRANSFER_TOKEN_SALT"
                value= var.TransferTokenSalt
            },

            {
                name = "JWT_SECRET"
                value = var.JwtSecret
            },

            {
                name = "DATABASE_CLIENT"
                value = var.DatabaseClient
            },
            {
                name = "DATABASE_HOST"
                value = var.DatabaseHost
            },
            {
                name = "DATABASE_PORT"
                value = var.DatabasePort

            },
            {
                name = "DATABASE_NAME"
                value = var.DatabaseName
            },
            {
                name = "DATABASE_USERNAME"
                value = var.DatabaseUserName
            },
            {
                name = "DATABASE_PASSWORD"
                value = var.DatabasePassword
            },
            {
                name = "DATABASE_SSL_ENABLE"
                value = var.DatabaseSslEnable

            },
            {
                name = "NODE_ENV"
                value = var.NodeEnv
            },
            {
                name = "AWS_ACCESS_KEY_ID"
                value = var.AwsAccessKey
            },
            {
                name = "AWS_ACCESS_SECRET"
                value = var.AwsAccessSecretKey
            }, 
            {
                name = "AWS_REGION"
                value = var.AwsRegion
            },
            {
                name = "AWS_BUCKET"
                value = var.AwsBucket
            }

        ]
    }])

}

resource "aws_ecs_service" "strapi_ecs_service" {
    name = format("%s-strapi-sedin", var.AppEnvPrefix)

    cluster = var.ClusterName
    launch_type = "EC2"
    task_definition = var.TaskDefinition
    enable_ecs_managed_tags = true
    desired_count = 1

    deployment_maximum_percent = var.StrapiRollingMaxPercent
    deployment_minimum_healthy_percent = var.StrapiMinHealthyPercent
    wait_for_steady_state = true

    deployment_circuit_breaker {
      enable = false
      rollback = true
    }

    ordered_placement_strategy {
      type = "spread"
      field = "instanceId"
    }

    placement_constraints {
      type = "memberOf"
      expression = "attribute:ecs.availability-zone =~ .*"
    }
    health_check_grace_period_seconds = 300

    load_balancer {
      container_name = "strapi-sedin"
      container_port = 1337
      target_group_arn = aws_lb_target_group.StrapiTargetGroup.arn
    }
}

resource "aws_lb_target_group" "StrapiTargetGroup" {
    name = format("%s-strapi-sedin", var.AppEnvPrefix)

    target_type = "instance"
    port = 80
    protocol = "HTTP"
    vpc_id = var.VpcId
    deregistration_delay = "30"

    health_check {
      matcher = "200,301,404"
      timeout = 9
      interval = 10
      healthy_threshold = 2
      unhealthy_threshold = 3
      path = var.StrapiHealthCheckPath
    }
}

resource "aws_lb_listener_rule" "rules_in_lb_80" {
    listener_arn = var.AlbListenerArn80
    action {
        type = "redirect"
        redirect {
          port =  "433"
          protocol = "HTTPS"
          status_code = "HTTP_301"
        }
    }
    condition {
      path_pattern {
        values = ["/"]
      }
    }
    condition {
      host_header {
        values = [var.StrapiAlbHostHeader]
      }
    }
}

resource "aws_lb_listener_rule" "rules_in_lb_443" {
    listener_arn = var.AlbListenerArn443
    priority = var.StrapiLisenterPriority
    action {
      type = "forward"
      target_group_arn = aws_lb_target_group.StrapiTargetGroup.arn
    }

    condition {
      host_header {
        values = [var.StrapiAlbHostHeader]
      }
    }
}