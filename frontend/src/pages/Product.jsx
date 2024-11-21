import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import ProductItem from '../components/ProductItem';

const Product = () => {
  const { productId } = useParams();
  const { products } = useContext(ShopContext);
  const [relatedProd,setRelatedProd]=useState([]);

  // Find the product by matching the id
  const product = products.find(item => item._id === productId);

  // Log the product if found
  

  useEffect(() => {
    if (product) {
      const relProd = products.filter(
        item => item.category === product.category && item._id !== productId
      );
    
      setRelatedProd(relProd.slice(0,5));
    }
  }, [product, products, productId]);

  console.log(relatedProd);

  return (
    <div>
      {product ? (
        <div>
          <h2>{product.name}</h2>
          <img src={product.image[0]} alt="" />
          <p>Price: ${product.price}</p>
          {/* Render other product details */}
        </div>
      ) : (
        <p>Product not found</p>
      )}

      <p>Related prod</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {
          
          relatedProd.map((item,index)=>(
            <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
          ))
        
        }
      </div>
      {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {
            relatedProd.map((item,index)=>(
              <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image}/>
            ))
          }
          
        </div> */}
    </div>
  );
};

export default Product;
