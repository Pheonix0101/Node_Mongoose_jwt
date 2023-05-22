import swaggerUI from "swagger-ui-express";
import YAML from "yamljs";
import { SwaggerUiOptions } from "swagger-ui-express";

const swaggerJSDocs = YAML.load("api.yaml");

const options: SwaggerUiOptions = {
  customCss: `img {content:url(\'../logo.svg\'); height:auto;} `,
  customfavIcon: "../favicon.ico",
  customSiteTitle: "Code Improve API Doc",
};

export const swaggerServe = swaggerUI.serve;
export const swaggerSetup = swaggerUI.setup(swaggerJSDocs, options);
