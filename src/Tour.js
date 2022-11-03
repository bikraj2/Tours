import React, { useState } from 'react';

const Tour = ({id,image,info,price,name,func}) => {
  const [readMore,setReadMore]= useState(false)
  return (
    <article className='single-tour'>
      <img src={image} alt={name}></img>
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        <p style={{textAlign:"left"}}>{
          readMore?info:`${info.substring(0,200)}....`
          }
          <button onClick={()=>{setReadMore(!readMore)}}>{readMore?'show less':'Read More'}</button>
          </p>

        <button className='delete-btn' onClick={()=>{func(id)}}>Remove</button>
      </footer>
    </article>
  );
};

export default Tour;
