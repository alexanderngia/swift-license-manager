export interface LicenseData {
  errCode: number;
  message: string;
  licenseKey: LicenseList[];
}
export interface LicenseList {
  [x: string]: any;
  id?: number;
  customerName: string;
  customerEmail: string;
  domain: string;
  shopId: number;
  licenseKey: string;
}
