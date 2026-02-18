import React from 'react'

const ProductCard = ({ product }) => {
    console.log('These are the product from product card component: ', product);
    
  return (
    <div className='w-full h-[600px] rounded-[30px] shadow-lg bg-purple-400 relative overflow-hidden'>
        {/* for thumbnail image */}
        <div className='h-1/2 w-full object-contain '>
            <img className='w-full h-full object-contain' src={product.thumbnail} alt={product.title} />
        </div>
        <div className='w-full h-1/2 flex flex-col justify-between bg-white rounded-tl-[30px] rounded-tr-[30px] p-4'>
            <div>
                <h1 className='font-bold text-2xl mb-3'>{product.title}</h1>
                <p className='border p-2 inline-block rounded-[8px] mr-2'>Category: {product.category}</p>
                <p className='border p-2 inline-block rounded-[8px]'>Stock: {product.stock}</p>
                <p className='text-[20px]'>{product.description.split(' ').splice(0, 20).join(' ')}</p>
            </div>
            <div className='w-full flex justify-between'>
                <p><span className='text-2xl'>PRICE</span> <br /> <strong className='text-3xl'>${product.price}</strong></p>
                <button className='py-4 px-8 bg-purple-500 rounded-[10px] text-white'>Add to Cart</button>
            </div>
        </div>
        <div className='absolute top-4 right-4 transform -translate-x-1/2 w-[50px] h-[50px] bg-white rounded-full p-4 flex flex-col items-center justify-center text-center leading-5 text-purple-500 font-bold'>{Math.round(product.discountPercentage) }% off</div>
    </div>
  )
}

export default ProductCard