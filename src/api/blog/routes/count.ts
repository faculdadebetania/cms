export default {
  routes: [
    {
      method: "GET",
      path: "/blog/count",
      handler: "count.count",
      config: {
        auth: false,
      },
    },
  ],
};
