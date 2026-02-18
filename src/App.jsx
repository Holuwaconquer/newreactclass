import React from 'react'
import ProductPage from './components/ProductPage'

const App = () => {
  return (
    <div className='w-full flex flex-col gap-4 p-4'>
      <div className='w-full flex justify-between items-center text-3xl'>
        <h1>Product</h1>

        <div>
          <ul className='flex items-center gap-3'>
            <li>All Product</li>
            <li>New Arrival</li>
            <li>Flash Sales</li>
          </ul>
        </div>
      </div>

      <ProductPage />
    </div>
  )
}

export default App