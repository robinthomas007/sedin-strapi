'use strict';

/**
 * csr router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::csr.csr');
