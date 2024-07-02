import React, { useCallback, useEffect, useState } from 'react'
import { useFetch } from '../hooks/useFetch';

export const ProductList = () => {
//const[products,setProducts]=useState([]);


const[url,setUrl]=useState("http://localhost:8000/products");
const{data:products,loading,error}=useFetch(url);
console.log(products);

// const fetchProducts=useCallback(async()=>{
// const response= await fetch(url);
// const data= await response.json();
// setProducts(data);
// },[url])

// useEffect(()=>{
//     // fetch(url).then(response=>response.json())
//     // .then(data=>setProducts(data));
//     fetchProducts();
//     console.log("-");
// },[fetchProducts])

  return (
   
   <section>
     <div className='filter'>
        <button onClick={()=>setUrl("http://localhost:8000/products")}>All</button>
        <button onClick={()=>setUrl("http://localhost:8000/products?in_stock=true")}>In stock only</button>
        </div>
        {loading && <p className='loading'>Loading products</p>}
        {error && <p>{error}</p>}


    {products && products.map((product)=>(
        <div className='card'>
            <p className="id">{product.id}</p>
                <p className="name">{product.name}</p>
                <p className="info">
                    <span>${product.price}</span>
                    <span className={product.in_stock ? "instock" : "unavailable"}>{product.in_stock ? "In Stock" : "Unavailable"}</span>
                </p>
        </div>
    ))}
   </section>

  )
}
