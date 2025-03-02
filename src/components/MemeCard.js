import React from 'react'

const MemeCard = ({data}) => {
    console.log(data);
    
  return (
    <div className='p-5 m-5 border border-black'>
        <img className='w-64 h-64' src={data?.url} alt='memeData'></img>
        <p>{data?.author}</p>
    </div>
  )
}

export default MemeCard