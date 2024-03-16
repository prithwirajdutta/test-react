import { useEffect, useState } from 'react'
// import './App.css'
import ProductCard from './ProductCard'

function Home() {
  const [product, setProduct] = useState([])
   async function getProducts(){
const response=await fetch('https://fakestoreapi.com/products')
const data=await response.json()
setProduct(data)
  }
  useEffect(()=>{
getProducts()
  },[])

  return (
    <>
    {product?.map(prod=>(
      <ProductCard prod={prod} key={prod.id}/>
    ))
    
}
    </>
  )
}

export default Home
