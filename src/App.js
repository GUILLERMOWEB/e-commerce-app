

import { useEffect } from 'react';
import './App.css';
import ShoppingCart from './components/ShoppingCart';
import ProductsList from './components/ProductsList';
import useStore from './store';
import ProductNabvar from './components/ProductNabvar';
import Example from './components/modal/Modal';


function App() {
  const { ShoppingCartStatus,FecthData, } = useStore();
 
  useEffect(()=>{
    FecthData();
  },[])
  
  return (
    <div className="App">
      
       
        <ProductNabvar/>,<Example/>
      {
        ShoppingCartStatus ? <ShoppingCart /> : <ProductsList /> 
      }
  
    </div>
  );

}


export default App;
