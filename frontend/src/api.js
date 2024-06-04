import axios from 'axios';

const API_BASE_URL = 'http://20.244.56.144/test/companies/AMZ/categories/Laptop';

export const getProducts = (params) => {
    console.log("oarams", params)
    //   return axios.get(`${API_BASE_URL}/products`, { params });
    let config = { 
        headers: {
            'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE3NTE1OTUwLCJpYXQiOjE3MTc1MTU2NTAsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImRiMzZkODZhLWRjZjItNDRhOS1hYTI1LWE1MTA5MjU1Yjc1YiIsInN1YiI6ImFyeWFuc2hhcm1hMzE2NThAZ21haWwuY29tIn0sImNvbXBhbnlOYW1lIjoiZ29NYXJ0IiwiY2xpZW50SUQiOiJkYjM2ZDg2YS1kY2YyLTQ0YTktYWEyNS1hNTEwOTI1NWI3NWIiLCJjbGllbnRTZWNyZXQiOiJnWWxlWFVzYkJKR1VraHJlIiwib3duZXJOYW1lIjoiQXJ5YW4iLCJvd25lckVtYWlsIjoiYXJ5YW5zaGFybWEzMTY1OEBnbWFpbC5jb20iLCJyb2xsTm8iOiIyMTEwOTkwMjg4In0.eV5Ssn34nPTAm70fjeJSbQG7nxfq_KxYD90e_z7976A'
        }
    }
    return axios.get(`http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000`,config);

};

export const getProductById = (id) => {
    return axios.get(`${API_BASE_URL}/products/${id}`);
};
