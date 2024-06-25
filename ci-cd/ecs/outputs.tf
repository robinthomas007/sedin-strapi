output "StrapiTaskDefinitionArn" {
    value = aws_ecs_task_definition.strapi_task_definition.arn
}

output "StrapiTargetGroupArn" {
    value = aws_lb_target_group.StrapiTargetGroup.arn

}