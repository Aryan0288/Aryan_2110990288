import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { Route, Routes } from 'react-router-dom';
import ProductsList from './ProductList';
import ProductDetail from './ProductDetail';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <Router> */}
        <Routes>
          <Route path="/" element={<ProductsList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      {/* </Router> */}
    </div>
  )
}

export default App
