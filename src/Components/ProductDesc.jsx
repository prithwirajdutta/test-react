import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductDesc() {
    const {productId}=useParams()
    const [prod,setProd]=useState()
    async function getProductDetail(){
        const response=await fetch(`https://fakestoreapi.com/products/${productId}`)
        const data=await response.json()
        setProd(data)
          }
    useEffect(()=>{
getProductDetail()
    },[])
  return (
    <div>
    <img src={prod?.image} alt="" width={150}/>
   <p><b>#{prod?.category}</b></p> 
    <h1>{prod?.title}</h1>
<p>{prod?.description}</p>
</div>
  )
}

export default ProductDesc