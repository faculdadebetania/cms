import type { StrapiApp } from "@strapi/strapi/admin";
import ptBR from "./src/translations/pt-BR.json";

export default {
  config: {
    locales: ["pt-BR"],
    translations: {
      "pt-BR": ptBR,
      // "content-manager.content-types.${model}.${label}": "label",
      // "content-manager.content-types.${model}.${header.label}": "table header",
    },
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
