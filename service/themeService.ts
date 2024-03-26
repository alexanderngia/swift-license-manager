import { Form } from "@pages/theme-module";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export const getCode = async () => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_GET_MODULE_THEME}`
    );
    return data.code;
  } catch (error) {
    console.log(error);
  }
};

export const updateCode = async (form: Form) => {
  try {
    const { data } = await axios.put(
      `${process.env.NEXT_PUBLIC_API_UPDATE_MODULE_THEME}`,
      form
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
