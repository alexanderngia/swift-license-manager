import express from "express";

// export const viewEngine = (app: {
//   use: (
//     arg0: RequestHandler<express.Response<any, Record<string, any>>>
//   ) => void,
//   set: (arg0: string, arg1: string) => void,
// }) => {
//   app.use(express.static("./src/public"));
//   app.set("view engine", "mjs");
//   app.set("views", "./api");
// };
const viewEngine = (app) => {
  app.use(express.static("./src/public"));
  app.set("view engine", "mjs");
  app.set("views", "./api");
};

export default viewEngine;
