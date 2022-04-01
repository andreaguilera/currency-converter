const BASE_URL = "https://v6.exchangerate-api.com/v6/20900fc28746b4d4f2450b91/";

export const getCurrencies = async (): Promise<any> => {
  const response = await fetch(`${BASE_URL}latest/USD`);
  const data = await response.json();
  console.log(data.conversion_rates);
  return data.conversion_rates;
};
