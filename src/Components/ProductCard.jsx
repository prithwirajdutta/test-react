import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard({prod}) {
    
  return (
    <Link to={`/product/${prod.id}`}>
    <div>
        <img src={prod?.image} alt="" width={150}/>
       <p><b>#{prod?.category}</b></p> 
        <h1>{prod?.title}</h1>
<p>{prod?.description}</p>
    </div>
    </Link>
  )
}

export default ProductCard