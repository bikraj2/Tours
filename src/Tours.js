import React from 'react';
import Tour from './Tour';
const Tours = ({tours,func}) => {
  return <section>
    <div className='title'>
      <h2>Available Tours</h2>
      <div className='underline'></div>
      <div className='single-tour'>
        {tours.map((tour)=><Tour key = {tour.id} {...tour} func = {func}/>)}
      </div>
    </div>
  </section>;
};

export default Tours;
