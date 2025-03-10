import React from 'react'

const ProductCard = ({id,title,thumbnail,price,description}) => {
  return (
    <div>
        <div className='m-4 p-4 border border-solid border-black w-64 h-[550px]'>
            <h1 className='text-2xl font-bold text-blue-600'>Product No.{id}</h1>
            <img src={thumbnail} alt='cardImage'/>
            <h1 className='font-bold text-xl'>{title}</h1>
            <h2 className='font-bold'>$.{price}</h2>
            <p>{description}</p>
        </div>        
    </div>
  )
}

export default ProductCard