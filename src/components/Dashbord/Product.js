import React from 'react'
import './Product.css'
import { CiBasketball } from "react-icons/ci";

export default function Product(props) {
const {productName,myPrice,scoreClub} = props;

  return (
    <div className="product">
        <div className="product-container">
            <div className="product-flex">
                
                <span style={{display:'flex',alignItems:'center',gap:'40px'}}><span className='product-color'></span>{productName}</span>
                <span>{myPrice} ریال</span>
                <span>{scoreClub}%</span>
            </div>
        </div>
    </div>
  )
}
