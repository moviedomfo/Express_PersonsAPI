import {get} from "env-var";
import "dotenv/config";

/**
 * Common constats
 *  env-var permite realizar validaciones sobre las variables de entorno
 *  ayuda a evitar errores en tiempo de ejecución debido a configuraciones incorrectas.
 */
export const AppConstants = {
  COMPANY: "Pelsoft",
  APP_PORT: get("APP_PORT").default("5000").asPortNumber(),
  APP_VERSION: get("APP_VERSION").required().asString(),
  APP_CLIENT_ID: get('D379670C-21B5-4DDD-A4EC-F5D34156B861').asString(),
  APP_CLIENT_NAME: get("APP_CLIENT_NAME").required().asString(),
  APP_USER_ID : get('5FC54C09-9EAB-4025-821B-0B799ABE4F98').asString(),
  APP_FILES_PATH: process.env.APP_FILES_PATH,
  KAFKA_CLIENT_ID: process.env.KAFKA_CLIENT_ID,
  KAFKA_BROKERS: process.env.KAFKA_BROKERS.split(",") || [],
  BD_HOST: get("BD_HOST").required().asString(),
  BD_INSTANCE: get("BD_INSTANCE").required().asString(),
  BD_DATABASE_NAME: get("BD_DATABASE_NAME").required().asString(),
  BD_PWD: get("BD_PWD").required().asString(),
  BD_USER: get("BD_USER").required().asString(),
  DB_PORT: get("BD_PORT").required().asString(),
  TwoFA_Expires: 180,
  JWT_Expires: 10,//process.env.JWT_Expires,
  JWT_ExpiresRefreshToken: 600,//process.env.JWT_ExpiresRefreshToken,
  JWT_issuer: 'personsauth',//process.env.JWT_ISSUER,
  JWT_SECRET: 'personsauth_secret',//process.env.JWT_SECRET,
};
