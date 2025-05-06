import axios from 'axios';
const productUrl = 'https://strapi-store-server.onrender.com/api';

export const customFetch = axios.create({
  baseURL: productUrl,
});

export const formatPrice = (price) => {
  const euroAmount = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format((price / 100).toFixed(2));
  return euroAmount;
};

export const generateOption = (number) => {
  return Array.from({ length: number }, (_, index) => {
    const amount = index + 1;
    return (
      <option key={amount} value={amount}>
        {amount}
      </option>
    );
  });
};
