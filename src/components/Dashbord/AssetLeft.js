import React from 'react';
import './AssetLeft.css';
import Product from './Product';

export default function AssetLeft() {

    let [products,setProducts] = React.useState([
        {id:1,productName:'کفش',myPrice:'3000,000,00' , scoreClub:33},
        {id:2,productName:'لباس',myPrice:'1400,000,00' , scoreClub:56},
        {id:3,productName:'طلا',myPrice:'50,000,00' , scoreClub:10},
    ])

  return (
    <div className="asset-left" style={{overflowY:products.length>3 && 'scroll'}}>
        <div className="asset-left-container">
        <h3>تفکیک دارایی</h3>
        <div className="asset-left-flex">
            <div className="product-head">
                <p>نام محصول</p>
                <p>میزان سرمایه شما</p>
                <p>امتیاز در کلاب</p>
            </div>
            {
                products.map(product => (
                    <Product {...product} />
                ))
            }
        </div>
                
        </div>
    </div>
  )
}
