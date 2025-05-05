import { customFetch } from '../utils';
const productsUrl = '/products?featured=true';
export const landingLoad = async () => {
  const response = await customFetch.get(productsUrl);
  const products = response.data.data;
  return { products };
};
