import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

const LIMIT = 10;

const Pagination = () => {

  const [currentPage,setCurrentPage] = useState(0);//we will follow 0 index rule
  const [products, setProducts] = useState([]);
  const [noOfPages, setNoOfPages] = useState(0);//to find number of page{json.total/LIMIT}

  useEffect(()=>{
    fetchData();
  },[currentPage])

  const fetchData = async ()=>{
    const data = await fetch(`https://dummyjson.com/products?limit=${LIMIT}&skip=${LIMIT*currentPage}&select=title,price,description,thumbnail`);
    const json = await data.json();
    console.log(json);
    setProducts(json.products);
    setNoOfPages(Math.ceil(json.total/LIMIT));  
    
  }

  return (
    <div>
      <div className='flex flex-wrap'>
        {products.map((product,index)=><ProductCard key={product.id} id={product.id} title={product.title} thumbnail={product.thumbnail} description={product.description} price={product.price}/>)}
      </div>

      <div className='p-10 flex items-center justify-center cursor-pointer'>
          {currentPage>0 && <span onClick={()=>{setCurrentPage((currentPage)=>currentPage-1)}}>prev</span>}
          {[...Array(noOfPages).keys()].map((pN)=>(<span className={'p-4 text-xl' + (pN===currentPage && 'font-bold underline')} key={pN} onClick={()=>{setCurrentPage(pN)}}>{pN + 1}</span>))}
          {currentPage<noOfPages-1 && <span onClick={()=>{setCurrentPage((currentPage)=>currentPage+1)}}>next</span>}
      </div>
    </div>
  )
}

export default Pagination;