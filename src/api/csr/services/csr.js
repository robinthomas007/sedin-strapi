'use strict';

/**
 * csr service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::csr.csr');
