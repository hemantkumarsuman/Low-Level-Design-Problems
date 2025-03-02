import React, { useEffect, useState } from 'react'
import MemeCard from './MemeCard';
import ShimmerUI from './ShimmerUI';

const Body = () => {

    const [memes, setMeme] = useState(null);

    useEffect(()=>{
        fetchUrl();
    },[])

    const fetchUrl = async ()=>{
        const data = await fetch('https://meme-api.com/gimme/20');
        const json = await data.json();
        console.log(json);
        setMeme(json.memes);
        
    }
  return (
    <div className='flex flex-wrap'>
      {/* If meme is loaded then show MemeCard else show ShimmerUI */}
      {memes ? memes.map((meme,i)=> <MemeCard key={i} data={meme}/>) : <ShimmerUI/>}
    </div>
  )
}

export default Body