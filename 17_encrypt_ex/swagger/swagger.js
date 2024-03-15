const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      version: "1.0.0",
      title: "오운완 인증 SNS",
      description:
        "프로젝트 설명: Node.js 통합 미니 프로젝트 - 오운완 인증 SNS",
    },
    servers: [{ url: "http://localhost:8080" }], // 요청 URL
  },
  apis: ["../routes/*.js", "../routes/user/*.js"], // Swagger 파일 연동
};

const specs = swaggerJsdoc(options);

module.exports = { swaggerUi, specs };
