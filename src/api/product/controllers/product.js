"use strict";

/**
 * product controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

//*** By Default */
module.exports = createCoreController("api::product.product");

//*** By Custom API */
{
  /**
module.exports = createCoreController('api::product.product', ({strapi}) => ({
   find: async (ctx) => {
        try {
            const data = await strapi.entityService.findMany('api::product.product', {
                field: ["id", "title", "desc", "price"]
            })
            ctx.body = data;
        } catch (error) {
            console.log(error)
        }
        
           
      }
  }));
   */
}
