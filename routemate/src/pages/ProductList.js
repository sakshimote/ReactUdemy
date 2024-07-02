import React from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'

export const ProductList = () => {
 const location=useLocation();
 console.log(location);

const [searchParam]=useSearchParams();
console.log(searchParam.get("key"),searchParam.get("val"));
  return (
    <div className='component'>ProductList</div>
  )
}
