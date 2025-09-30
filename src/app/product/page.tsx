import React from 'react'
import ProductView from '../../components/productView/ProductView'

const Product = async () => {
  const response = await fetch("https://fakestoreapi.com/products")
  const data = await response.json()
  return (
    <div>Product
      <ProductView data={data}/>
    </div>
  )
}

export default Product