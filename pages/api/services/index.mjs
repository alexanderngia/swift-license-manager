import crypto from "crypto";
import { uuid } from "uuidv4";
import CryptoJS from "crypto-js";
import { getConnection, closeConnection } from "../config/db.mjs";

export const getLicenseList = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const connection = await getConnection();
      const licenseList = await connection.query("SELECT * FROM license_key");
      closeConnection(connection);

      resolve(licenseList);
    } catch (error) {
      reject(error);
    }
  });
};

export const createLicenseKey = async (domain) => {
  return new Promise(async (resolve, reject) => {
    try {
      const uID = uuid();
      const secretSalt = "swift-theme-license";
      const secretPassword = "swiftTheme2024";

      if (!uID || !secretSalt || !secretPassword || !domain) {
        console.log("Error System: missing required value");
      } else {
        const hash = crypto
          .createHash("sha256")
          .update(uID + domain + secretSalt)
          .digest("hex");

        const encrypted = await CryptoJS.AES.encrypt(hash, secretPassword);
        const licenseKey = `LIC-${encrypted}-KEY-SWIFT`;

        // Lưu key license vào database
        console.log("licenseKey", licenseKey);
      }
      resolve("OK! create new user successfully");
    } catch (error) {
      reject(error);
    }
  });
};
