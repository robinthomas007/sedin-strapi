module.exports = {
  routes: [
    {
      method: "GET",
      path: "/digital-service/:slug",
      handler: "digital-service.findOne",
      config: {
        auth: false,
      },
    },
  ],
};
