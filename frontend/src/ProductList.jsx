// src/components/ProductsList.js
import React, { useState, useEffect } from 'react';
import { getProducts } from './api';
import './App.css'

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
      <h1 className="header text-2xl font-bold">All Products</h1>
      <div className="flex flex-wrap">
        {products.map((product) => (
          <div key={product.productName} className="w-full md:w-1/2 lg:w-1/4 p-4">
            <div key={product.productName} className="border p-4 rounded-lg">
              <p><span className='span'>productName: </span> {product.productName}</p>
              <p><span className='span'>price: </span> {product.price}</p>
              <p><span className='span'>rating: </span> {product.rating}</p>
              <p><span className='span'>discount: </span> {product.discount}</p>
              <p><span className='span'>availability:</span> {product.availability}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
