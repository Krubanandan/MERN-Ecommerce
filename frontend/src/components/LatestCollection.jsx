import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem';

const LatestCollection = () => {

    const {products} = useContext(ShopContext);
    // const [latestProd,setLatestProd]=useState([])
    // console.log(products)

    // useEffect(()=>{
    //   setLatestProd(products.slice(0,10))

    // },[])
  return (
    <div>
      <p className='text-center text-xl m-2 '>Latest Collection</p>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
          products?.slice(0,10).map((item,index)=>{console.log(item._id);return(
            <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
            
          )})
        }

      </div>
    </div>
  )
}

export default LatestCollection