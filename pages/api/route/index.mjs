import dotenv from "dotenv";
import express from "express";

import { generateLicenseKey, getLicenseKey } from "../controllers/index.mjs";

dotenv.config();
let router = express.Router();

// export const initWebRoutes = (app: {
//   use: (arg0: string, arg1: Router) => any;
// }) => {

//     // API Get License List
//   router.get(`${process.env.NEXT_PUBLIC_GET_LICENSE_LIST}`, getLicenseKey);

//   // API Generate License Key
//   router.post(`${process.env.NEXT_PUBLIC_CREATE_LICENSE_KEY}`, generateLicenseKey);

//   return app.use("/", router);
// };

const initWebRoutes = (app) => {
  // API Get License List
  router.get(`${process.env.NEXT_PUBLIC_GET_LICENSE_LIST}`, getLicenseKey);

  // API Generate License Key
  router.post(
    `${process.env.NEXT_PUBLIC_CREATE_LICENSE_KEY}`,
    generateLicenseKey
  );

  return app.use("/", router);
};
export default initWebRoutes;
