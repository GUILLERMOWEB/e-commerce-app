import React, { useEffect } from "react";
import useStore from "../store/index";
import "../App.css";
import "../Styles/Products.List.css";


function ProductsList() {
  const {ProductAdd, DataFecth} = useStore();
  return (
    <div>
      
      <div className="products">
        {DataFecth.map((product) => (
          <div className="product__card flex__between" key={product.id}>
            <img className="product__img" src={product.image} alt="" />
            <p className="product__name">{product.title}</p>
            <p>Precio : {product.price}</p>
            
            <button className="product__btn" onClick={(etShow) => ProductAdd(product)}>
              Agregar al Carrito
            </button> 
          </div>
        ))}
      </div>
    </div>
  );
}
//{() => ProductAdd(product)}
export default ProductsList;
