import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const ProductDetails = () => {
  // to get the id from the url using the id we specify in the app.jsx route of the /product-details
  const { id } = useParams()

  const baseUrl = "https://dummyjson.com";
  // variable that hold the object of each product from the api request
  const [product, setproduct] = useState({})
  // function that get the full product data from the server
  const getSingleProduct = async () => {
    try{
      // making get request to get the product using the product id: id from the useparams
      const productRes = await axios.get(`${baseUrl}/products/${id}`);
      // changing the value of the variable to the api response so we can use the product (usestate variable) to display all 
      // of the product details
      setproduct(productRes.data)
      console.log(productRes.data);
    }catch(error) {
      console.error('there is an error while fetching: ', error)
    }
  }
  // using useeffect to trigger the function on load of the page
  useEffect(() => {
    getSingleProduct()
    
  }, [])
  
  return (
    <div>ProductDetails {product.title} <img src={product.thumbnail} alt={product.title} /></div>
  )
}

export default ProductDetails