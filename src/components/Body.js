import React, { useEffect, useState } from 'react'
import MemeCard from './MemeCard';
import ShimmerUI from './ShimmerUI';

const Body = () => {

    const [memes, setMeme] = useState([]);

    useEffect(()=>{
        fetchUrl();

        //Logic for infinite scroll
        window.addEventListener('scroll',handleScroll);
        return ()=>window.removeEventListener('scroll', handleScroll);
    },[])

    const handleScroll = ()=>{
      if(window.innerHeight + window.scrollY >= document.body.scrollHeight){
        fetchUrl();
      }
    }

    const fetchUrl = async ()=>{
        const data = await fetch('https://meme-api.com/gimme/20');
        const json = await data.json();
        console.log(json);
        setMeme((memes)=> [...memes,...json.memes]);
        
    }
  return (
    <div className='flex flex-wrap'>
      {/* If meme is loaded then show MemeCard else show ShimmerUI */}
      {memes ? memes.map((meme,i)=> <MemeCard key={i} data={meme}/>) : <ShimmerUI/>}
    </div>
  )
}

export default Body