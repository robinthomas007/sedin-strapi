"use strict";

/**
 * digital-service service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::digital-service.digital-service");
