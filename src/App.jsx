import { useState } from 'react';
import './App.css'
import Navbar from './Components/Header/navbar'
import Banner from './Components/Hero/Banner'
import ProductSec from './Components/Products/ProductSec'


const fetchProductData = async () => {
  const res = await fetch("/productdata.json");
  return res.json();
};

function App() {
   const productPromise = fetchProductData();
  const [cartCard, setCartCard] = useState([]);
  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <Suspense fallback={"Ashitese..."}>
        <ProductSec
          productPromise={productPromise}
          cartCard={cartCard}
          setCartCard={setCartCard}
        ></ProductSec>
      </Suspense>

    </>
  )
}

export default App
