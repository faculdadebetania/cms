import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::blog.blog",
  ({ strapi }) => ({
    async count(ctx) {
      try {
        const count = await strapi.db.query("api::blog.blog").count();
        return { count };
      } catch (error) {
        ctx.throw(500, error);
        return { error };
      }
    },
  }),
);
