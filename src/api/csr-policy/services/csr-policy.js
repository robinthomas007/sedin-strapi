'use strict';

/**
 * csr-policy service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::csr-policy.csr-policy');
