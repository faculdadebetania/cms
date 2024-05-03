export default ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  url: "https://cms.faculdadebetania.com.br",
  app: {
    keys: env.array("APP_KEYS"),
  },
});
