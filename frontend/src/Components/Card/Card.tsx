import React, { JSX } from 'react';
import "./Card.css";
import { JsxElement } from 'typescript';
interface Props {
  coinName: string;
  ticker: string;
  price: number;
}

const Card: React.FC<Props> = ({coinName, ticker, price}: Props) :JSX.Element=> {
  return <div className='card'>
    <img src='https://tdutkowski.com/images/blog/apple-1977.jpg'></img>
    <div className='details'>
        <h2>{coinName} ({ticker})</h2>
        <p>${price}</p>
    </div>
     <p className='info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolores voluptates ex repellendus similique incidunt eos inventore suscipit molestiae facere magni, quam numquam labore, iure rem et neque? Cumque, velit!</p>
  </div>

};

export default Card