import React, { useEffect } from 'react'

function CardComponent({item,index}) {

  return (
    <div className='w-[300px] border border-slate-400 rounded-lg '>
        <div className='relative'>
        <img src={item.thumbnail} className='rounded-md h-[300px] w-full object-cover'   alt="" />

        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/30 hover:bg-transparent transition-all rounded-md'  />
        </div>
        <div className='p-3 '>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <p>{item.price}</p>
        <button className='px-4 py-2 bg-blue-400 rounded-md text-white hover:bg-red-400 transition-all' >Add to CART</button>
        </div>
    </div>
  )
}

export default CardComponent