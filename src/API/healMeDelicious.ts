import axios from "axios";
import { BASE_URL } from "../components/Constants";

export const getDataFromHealMeDelicious = async (searchTerm: string) => {
  const response = await axios.get(`${BASE_URL}/hmd/getLinkList/${searchTerm}`);
  console.log(response.data);
  return response.data;
};
