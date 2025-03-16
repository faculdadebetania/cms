export default {
  routes: [
    {
      method: "GET",
      path: "/blog/slugs",
      handler: "slugs.slugs",
      config: {
        auth: false,
      },
    },
  ],
};
