import { useState, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import Navbar from './Components/Header/Navbar'
import Banner from './Components/Hero/Banner'
import ProductSec from './Components/Products/ProductSec';
import Steps from './Components/steps/Step';
import Priceplan from './Components/PriceCard/Priceplan';
import Workflow from './Components/workflow/Workflow';




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

const fetchPricingData = async ()=>{
  const res = await fetch('/pricedata.json');
  return res.json();
}

 const pricingPromise = fetchPricingData()

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
      <Suspense fallback={"Ashitese..."}>
        <Priceplan pricingPromise={pricingPromise}></Priceplan>
      </Suspense>
      <Workflow></Workflow>
    <ToastContainer />
    </>
  )
}


export default App
