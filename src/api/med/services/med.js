'use strict';

/**
 * med service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::med.med');
