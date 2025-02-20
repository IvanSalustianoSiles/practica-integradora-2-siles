import * as url from "url";

const config = {
  APP_NAME: "laschicas",
  PORT: 8080,
  DIRNAME: url.fileURLToPath(new URL(".", import.meta.url)),
  SERVER: "ecommerce",
  get UPLOAD_DIR() {
    return `${this.DIRNAME}/public/img`;
  },
  MONGO_URL: "mongodb+srv://silesivansalustiano:Coki2011@codercluster.n4kbrpc.mongodb.net/ecommerce",
  MONGODB_ID_REGEX: /^[a-fA-F0-9]{24}$/,
  SECRET: "113287484745753643170604",
  GITHUB_CLIENT_ID: "Iv23ctaa6Yvs1eBdjySK",
  GITHUB_CLIENT_SECRET: "f1aa5f3f46af6fb6279e7e0e7a1d9cdd5e40649c",
  GITHUB_CALLBACK_URL: "http://localhost:8080/api/sessions/ghlogincallback"
};

export default config;
