// import axios from "axios";
import { Form } from "@pages/create-license";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const getLicenseList = async () => {
  try {
    const { data } = await axios.get(`${process.env.API_GET_LICENSE_LIST}`);
    return data.licenseList;
  } catch (error) {
    console.log(error);
  }
};
export const createLicense = async (form: Form) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_CREATE_LICENSE}`,
      form
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// export const getProductPath = async () => {
//   const data = await getProducts();
//   if (data)
//     return data.map(
//       ({ urlItem, categoryItem }: Products) =>
//         `/store/${categoryItem}/${urlItem}`
//     );
// };

// export const getProductBySlug = async (url: string) => {
//   try {
//     const data = await getProducts();
//     if (data)
//       return data.find(
//         ({ urlItem, categoryItem }: Products) =>
//           `/store/${categoryItem}/${urlItem}` === url
//       );
//   } catch (error) {
//     console.log(error);
//   }
// };

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
