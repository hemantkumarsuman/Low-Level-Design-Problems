import React from 'react'

const ShimmerUI = () => {
  return Array(12).fill(0).map((n,i)=> (
    <div className='p-5 m-5 border border-black'>
        <img className='w-64 h-64 bg-gray-200'></img>
    </div>
  ));
}

export default ShimmerUI