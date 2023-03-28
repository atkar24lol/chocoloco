import * as React from 'react';
import { Link } from 'react-router-dom'
import favorite from '../assets/favorite.svg'
import cart from '../assets/cart_icon.png'

export default function CardComponent(props) {
  const product = props.cardInfo
  return (
    <div className='card'>
      <Link className='card-link-wrapper' style={{ textDecoration: 'none', color: 'black', position: 'relative' }} to={`/products/${product.id}`}>
        <div className='card-favorite-button'>
          <img className='img-favorite' src={favorite} alt="" />
        </div>
        <div className='card-image'>
          <img src={product.image} alt="" />
        </div>
        <div className='card-title'>
          {product.title}
        </div>
        <div className='card-description'>
          {product.description}
        </div>
        <div className='card-price'>
          {product.price}c
        </div>
        <div className='card-cart-button'>
          <img className='cart-image' src={cart} alt="" />
        </div>
      </Link>
    </div>
  );
};