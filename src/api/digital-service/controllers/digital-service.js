"use strict";

/**
 * digital-service controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::digital-service.digital-service",
  ({ strapi }) => ({
    // Query by slug
    async findOne(ctx) {
      // thanks to the custom route we have now a slug variable
      // instead of the default id
      const { id } = ctx.params;
      const entity = await strapi.db
        .query("api::digital-service.digital-service")
        .findOne({
          where: { slug: id },
          populate: true,
        });
      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

      return this.transformResponse(sanitizedEntity);
    },
  })
);
