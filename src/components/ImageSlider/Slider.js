import React, { useEffect, useState } from 'react'

const Slider = () => {

    const [active, setActive] = useState(0);

    const images = [        
        'https://cdn.pixabay.com/photo/2023/12/07/11/04/girl-8435329_1280.png',
        'https://cdn.pixabay.com/photo/2023/12/07/11/11/girl-8435340_1280.png',
        'https://cdn.pixabay.com/photo/2024/05/26/15/27/anime-8788959_1280.jpg',
        'https://cdn.pixabay.com/photo/2022/03/12/07/29/dragon-7063556_1280.png'
    ];

    const handleLeftClick=()=>{
        setActive(active=>(active-1)<0 ? images.length-1 : active-1)
    }

    const handleRightClick=()=>{
        setActive(active=>(active+1)%images.length)
    }



    return (
        <div>
            <div className='m-2 p-2 flex justify-center '>
                <button className='font-bold px-5 mx-5 text-5xl border border-black' onClick={handleLeftClick}>Left</button>
                <img className='w-96' src={images[active]}/>
                <button className='font-bold px-5 mx-5 text-5xl border border-black' onClick={handleRightClick}>Right</button>
            </div>

        </div>
    )
}

export default Slider