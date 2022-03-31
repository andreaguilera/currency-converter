import axios from "axios";

const api = axios.create({
  baseURL: "https://v6.exchangerate-api.com/v6/20900fc28746b4d4f2450b91/",
});

export const getCurrencies = async (): Promise<any> => {
  const response = await api.get("latest", {
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:3000",
    },
  });
  console.log(response.data);
  return response.data.currencies;
};

export default api;
