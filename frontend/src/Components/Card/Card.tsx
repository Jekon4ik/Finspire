import React from 'react';
import "./Card.css";
type Props = {}

const Card = (props: Props) => {
  return <div className='card'>
    <img src='https://tdutkowski.com/images/blog/apple-1977.jpg'></img>
    <div className='details'>
        <h2>AAPL</h2>
        <p>$115</p>
    </div>
     <p className='info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolores voluptates ex repellendus similique incidunt eos inventore suscipit molestiae facere magni, quam numquam labore, iure rem et neque? Cumque, velit!</p>
  </div>

};

export default Card