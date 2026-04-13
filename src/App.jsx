import { useState, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import Navbar from './Components/Header/Navbar'
import Banner from './Components/Hero/Banner'
import ProductSec from './Components/Products/ProductSec'
import Steps from './Components/steps/Step';



const fetchProductData = async () => {
  const res = await fetch("/productdata.json");
  return res.json();
};

const productPromise = fetchProductData();

const fetchStepsData = async () => {
  const res = await fetch("/step.json");
  return res.json();
};

const stepsPromise = fetchStepsData();

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
      <Suspense fallback={"Ashitese..."}>
        <Steps stepsPromise={stepsPromise}></Steps>
      </Suspense>
      
    <ToastContainer />
    </>
  )
}


export default App
