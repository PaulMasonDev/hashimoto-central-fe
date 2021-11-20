import axios from "axios";
import { BASE_URL } from "../components/Constants";

//NEED TO ADD RESPONSE TYPES
export const getDataFromHealMeDelicious = async (searchTerm: string) => {
  const response = await axios.get(`${BASE_URL}/hmd/getLinkList/${searchTerm}`);
  return response.data;
};

export const generateCondensedRecipeForHealMeDelicious = async (
  link: string
) => {
  const response = await axios.put(`${BASE_URL}/hmd/generateCondensedRecipe`, {
    link,
  });
  return response.data;
};
