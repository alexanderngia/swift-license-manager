import { databaseConfig } from "./config.mjs";
import mysql from "mysql2";

const pool = mysql.createPool(databaseConfig);

export function getConnection() {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err);
      } else {
        resolve(connection);
      }
    });
  });
}

export function closeConnection(connection) {
  connection.release();
}
