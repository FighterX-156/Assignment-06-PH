import { useState, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import Navbar from './Components/Header/Navbar'
import Banner from './Components/Hero/Banner'
import ProductSec from './Components/Products/ProductSec'



const fetchProductData = async () => {
  const res = await fetch("/productdata.json");
  return res.json();
};

const productPromise = fetchProductData();

function App() {
  const [cartCard, setCartCard] = useState([]);

  return (
    <>
    <Navbar cartCard={cartCard}></Navbar>
    <Banner></Banner>
    <Suspense fallback={"Ashitese..."}>
        <ProductSec
          productPromise={productPromise}
          cartCard={cartCard}
          setCartCard={setCartCard}
        ></ProductSec>
      </Suspense>
    <ToastContainer />
    </>
  )
}


export default App
