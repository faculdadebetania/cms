import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::blog.blog",
  ({ strapi }) => ({
    async slugs(ctx) {
      try {
        const slugs: Array<{ slug: string }> = await strapi.db
          .query("api::blog.blog")
          .findMany({
            select: ["slug"],
          });

        const data = slugs.map(({ slug }) => slug);

        return { data };
      } catch (error) {
        ctx.throw(500, error);
        return { error };
      }
    },
  }),
);
