import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::blog.blog",
  ({ strapi }) => ({
    async random(ctx) {
      try {
        const { slug } = ctx.query;

        const where: { slug?: unknown } = {};

        if (slug) where.slug = { $ne: slug };

        const totalPosts = await strapi.db
          .query("api::blog.blog")
          .count({ where });

        if (totalPosts === 0) {
          return ctx.notFound("No posts found");
        }

        const randomStart = Math.max(
          0,
          Math.floor(Math.random() * Math.max(1, totalPosts - 3)),
        );

        const posts = await strapi.db.query("api::blog.blog").findMany({
          limit: 3,
          offset: randomStart,
          populate: {
            cover: true,
            author: true,
          },
          where,
        });

        return { data: posts };
      } catch (error) {
        ctx.throw(500, error);
        return { error };
      }
    },
  }),
);
