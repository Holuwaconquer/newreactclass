import React from 'react'
import ProductPage from './components/ProductPage'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router'
import ProductDetails from './Pages/ProductDetails'

const App = () => {
  return (
    <div className='w-full flex flex-col gap-4 p-4'>
      <Navbar />
      <Routes>
        <Route path='/' element={<ProductPage />} />
        <Route path='/product-details/:id' element={<ProductDetails />} />
      </Routes>
      


      {/* /about - About component
      /product - product component */}
    </div>
  )
}

export default App