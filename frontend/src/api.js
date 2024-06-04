import axios from 'axios';

const API_BASE_URL = 'http://20.244.56.144/test/companies/AMZ/categories/Laptop';

export const getProducts = (params) => {
  return axios.get(`${API_BASE_URL}/products`, { params });
};

export const getProductById = (id) => {
  return axios.get(`${API_BASE_URL}/products/${id}`);
};
