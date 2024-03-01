import { createLicenseKey, getLicenseList } from "../services/index.mjs";

export const getLicenseKey = async (req, res) => {
  try {
    const id = req.query.id;
    const licenseList = await getLicenseList();
    if (!licenseList) {
      return res.status(200).json({
        codeErr: 1,
        MessageErr: "Table not exist",
        licenseList: [],
      });
    }
    return res.status(200).json({
      licenseList: licenseList,
    });
  } catch (error) {
    console.log(error);
  }
};
export const generateLicenseKey = async (req, res) => {
  try {
    const domain = req.query.domain;
    if (!domain) {
      return res.status(200).json({
        codeErr: 1,
        MessageErr: "Missing required parameter",
        licenseKey: "",
      });
    }
    let hashKey = await createLicenseKey(domain);
    return res.status(200).json({
      licenseKey: hashKey,
    });
  } catch (error) {
    console.log(error);
  }
};
