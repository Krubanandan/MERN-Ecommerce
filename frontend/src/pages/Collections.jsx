import React, { useContext, useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";
import { ShopContext } from "../context/ShopContext";

const Collections = () => {

  const {products}=useContext(ShopContext);
  const [filterProd,setFilterProd]=useState([]);
  const [category,setCategory]=useState([]);
  const [subCategory,setSubCategory]=useState([]);

  const toggleCategory=(e)=>{
    if(category.includes(e.target.value)){
      setCategory(prev=>prev.filter(item=>item!==e.target.value))

    }
    else{
      setCategory(prev=>[...prev,e.target.value])
    }
  }

  const subToggleCategory=(e)=>{
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev=>prev.filter(item=>item!==e.target.value))

    }
    else{
      setSubCategory(prev=>[...prev,e.target.value])
    }
  }

  const applyFilter=()=>{
    let prodCopy=products.slice();

    if(category.length>0){
      prodCopy=prodCopy.filter(item=>category.includes(item.category))
    }
    if(subCategory.length>0){
      prodCopy=prodCopy.filter(item=>subCategory.includes(item.subCategory))
    }

    setFilterProd(prodCopy)
  }

  useEffect(()=>{
    setFilterProd(products)
  },[])

  // useEffect(()=>{
  //   console.log(category)
  // },[category])
  // useEffect(()=>{
  //   console.log(subCategory)
  // },[subCategory])

  useEffect(()=>{
    applyFilter();
  },[category,subCategory])

  

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      <div className="min-w-60">
        <p className="my-2 text-xl flex items-center cursor-pointer gap-2">
          FILTERS
          
        </p>

        <div className="border border-gray-300 pl-5 py-3 mt-6 hidden sm:block">
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value="Men" onChange={toggleCategory}/> Men
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value="Women" onChange={toggleCategory}/> Women
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value="Kids" onChange={toggleCategory}/> Kids
            </p>
          </div>
        </div>

        <div className="border border-gray-300 pl-5 py-3 my-5 hidden sm:block">
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value="Topwear" onChange={subToggleCategory}/> Topwear
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value="Bottomwear" onChange={subToggleCategory}/>{" "}
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value="Winterwear" onChange={subToggleCategory}/>{" "}
              Winterwear
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <h3>All Collections</h3>
          <select className="border-2 border-gray-300 text-sm px-2">
            <option value="Relevant">Sort by: Relevant</option>
            <option value="High to Low">Sort by: High to Low</option>
            <option value="Low to High">Sort by: Low to High</option>
          </select>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {
            filterProd.map((item,index)=>(
              <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image}/>
            ))
          }
          
        </div>
      </div>
    </div>
  );
};

export default Collections;
