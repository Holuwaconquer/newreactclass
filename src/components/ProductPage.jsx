import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import axios from 'axios'

const ProductPage = () => {
    const [productData, setproductData] = useState([])

    console.log(productData);
    
    // base url
    const baseUrl = "https://dummyjson.com"
    // to fetch all products /products
    // axios.get(`${baseUrl}/products`)
    // .then((res) => {
    //     setproductData(res.data.products)
    //     console.log(productData);
    // }).catch((error) => {
    //     console.error('There is an error while fetching product: ', error);  
    // })

    async function fetchAllProduct() {
        try{
            const res = await axios.get(`${baseUrl}/products`)
            console.log(res);
            setproductData(res.data.products)
        }catch(err){
            console.error('There is an error while fetching product: ', err);
        }
    }

    useEffect(() => {
      
        fetchAllProduct()
    }, [])
    

    console.log(productData);
    
    // get, post, put, delete, patch
  return (
    <div className='w-full grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {productData.map(product => (
            <ProductCard key={product.id} product={product} />   
        ))}


    </div>
  )
}

export default ProductPage