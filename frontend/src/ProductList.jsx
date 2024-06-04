// src/components/ProductsList.js
import React, { useState, useEffect } from 'react';
import { getProducts } from './api';

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: '',
    company: '',
    rating: 0,
    minPrice: 0,
    maxPrice: 10000,
    availability: '',
    sortBy: 'price',
    sortOrder: 'asc',
  });

  useEffect(() => {
    fetchProducts();
  }, [filters]);

  const fetchProducts = async () => {
    const response = await getProducts(filters);
    setProducts(response.data);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">All Products</h1>
      <div className="flex flex-wrap">
        {products.map((product) => (
          <div key={product.id} className="w-full md:w-1/2 lg:w-1/4 p-4">
            <div className="border p-4 rounded-lg">
              <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
              <h2 className="text-xl font-bold">{product.name}</h2>
              <p>{product.company}</p>
              <p>{product.category}</p>
              <p>{product.price}</p>
              <p>{product.rating}</p>
              <p>{product.discount}</p>
              <p>{product.availability ? 'In Stock' : 'Out of Stock'}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
