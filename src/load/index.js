import { customFetch } from '../utils';
const productsUrl = '/products?featured=true';
export const landingLoad = async () => {
  const response = await customFetch.get(productsUrl);
  const products = response.data.data;
  return { products };
};

export const singleProductLoad = async ({ params }) => {
  const response = await customFetch.get(`/products/${params.id}`);
  const product = response.data.data;
  return { product };
};
