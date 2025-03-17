import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::blog.blog",
  ({ strapi }) => ({
    async post(ctx) {
      try {
        const { slug } = ctx.query;

        if (!slug) return ctx.throw("Slug required", 500);

        const where = { slug: { $eq: slug } };

        const post = await strapi.db.query("api::blog.blog").findOne({
          populate: {
            cover: true,
            author: {
              fields: ["id", "name", "description"],
              populate: {
                photo: true,
              },
            },
          },
          where,
        });

        if (!post) return ctx.throw("Post not found", 404);

        return { data: post };
      } catch (error) {
        return ctx.internalServerError(error.message);
      }
    },
  }),
);
