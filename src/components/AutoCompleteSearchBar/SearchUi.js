import React, { useEffect, useState } from 'react'

const SearchUi = () => {
    const [searchText,setSearchText] = useState('');
    const [searchResults,SetSearchResults] = useState([]);
    const [isFocus,setIsFocus] = useState(false);

    useEffect(()=>{

        const timer = setTimeout(()=>{
            fetchData()
        },500)

        return ()=> clearTimeout(timer)
        
    },[searchText]);

    const fetchData = async ()=>{
        const data = await fetch(`https://www.google.com/complete/search?client=firefox&q=${searchText}`)
        const json = await data.json();
        console.log(json[1]);
        SetSearchResults(json[1])
    }
  return (
    <div className='m-4'>
        <input type='text' className='border border-black p-2 w-96' 
            value={searchText} 
            onChange={(e)=>setSearchText(e.target.value)} 
            onFocus={()=>setIsFocus(true)} 
            onBlur={()=>setIsFocus(false)}
        />
        {searchResults.length>1 && isFocus && (<ul className='p-2 w-96 border border-black'>
            {searchResults.map((result,index)=><li className='cursor-pointer' key={result}>{result}</li>)}
            
            
        </ul>)}
    </div>
  )
}

export default SearchUi