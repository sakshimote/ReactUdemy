import React from 'react'
import { useParams } from 'react-router-dom'

export const ProductDetail = () => {

  const useParam=useParams();
  
  return (
    <div className='component'> {useParam.id}---ProductDetail</div>
  )
}
