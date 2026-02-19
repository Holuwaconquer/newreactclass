import React from 'react'

const Navbar = () => {
  return (
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
  )
}

export default Navbar