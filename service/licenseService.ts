// import axios from "axios";
import { Form } from "@pages/create-license";
import { LicenseList } from "@type/license";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const getLicenseList = async () => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_GET_LICENSE_LIST}`
    );
    return data.licenseList;
  } catch (error) {
    console.log(error);
  }
};
export const createLicense = async (form: Form) => {
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_API_CREATE_LICENSE}`,
      form
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getLicensePath = async () => {
  const data = await getLicenseList();
  if (data) return data.map(({ id }: LicenseList) => `/${id}`);
};

export const getLicenseById = async (selectedId: number) => {
  try {
    const data = await getLicenseList();

    if (data) return data.find(({ id }: LicenseList) => id === selectedId);
  } catch (error) {
    console.log(error);
  }
};
export const deleteLicense = async (licenseId: number) => {
  if (process.env.NEXT_PUBLIC_API_DELETE_LICENSE)
    return await axios.delete(process.env.NEXT_PUBLIC_API_DELETE_LICENSE, {
      data: {
        id: licenseId,
      },
    });
};

// export const getProductByCate = async (category: string) => {
//   try {
//     const data = await getProducts();
//     if (data)
//       return data.filter(
//         ({ categoryItem }: Products) => categoryItem === category
//       );
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const getCatePath = async () => {
//   const data = await getProducts();
//   if (data)
//     return data.map(({ categoryItem }: Products) => `/store/${categoryItem}`);
// };
