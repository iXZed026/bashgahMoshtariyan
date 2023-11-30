import React from 'react'
import './Product.css'
import { TiShoppingCart } from "react-icons/ti";


export default function Product(props) {
  return (
        <div className="box-product">
            <div className="box-prudct-container">
                <div className="box-product-flex">
                    <img src={props.src} alt="" />
                    <h3>{props.title}</h3>
                    <span>{props.score} امتیاز</span>
                    <button type='submit'><TiShoppingCart style={{width:'17px' , height:'17px'}}/><div>خرید</div></button>
                </div>
            </div>
        </div>
  )
}
