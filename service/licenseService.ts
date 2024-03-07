// import axios from "axios";
import axios from "axios";

require("dotenv").config();

export const getLicenseList = async () => {
  try {
    const { data } = await axios.get(`${process.env.API_GET_LICENSE_LIST}`);
    return data.licenseList;
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
