export default {
  routes: [
    {
      method: "GET",
      path: "/blog/random",
      handler: "blog.random",
      config: {
        auth: false,
      },
    },
  ],
};
