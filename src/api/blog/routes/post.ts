export default {
  routes: [
    {
      method: "GET",
      path: "/blog/post",
      handler: "post.post",
      config: {
        auth: false,
      },
    },
  ],
};
