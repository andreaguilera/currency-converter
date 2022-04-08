export const BASE_URL =
  "https://v6.exchangerate-api.com/v6/20900fc28746b4d4f2450b91/";

export const getConversion = async (
  from: string,
  to: string,
  amount: string
): Promise<any> => {
  const response = await fetch(`${BASE_URL}pair/${from}/${to}/${amount}`);
  const data = await response.json();
  return data;
};
