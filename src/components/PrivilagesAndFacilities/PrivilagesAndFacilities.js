import React from 'react';
import './PrivilagesAndFacilities.css'
import Product from './Product';
import Tournament from './Tournament';
import { RiMoneyDollarCircleLine } from "react-icons/ri";
// import { TiShoppingCart } from "react-icons/ti";

export default function PrivilagesAndFacilities() {

    let [products, setProducts] = React.useState([
        { id: 1, title: 'اشتراک یک ماه فیلیمو', score: 300, src: '../images/filimo.png' },
        { id: 2, title: 'اشتراک یکماه نماوا', score: 100, src: '../images/namava.png' },
        { id: 3, title: ' کد تخفیف 20 درصدی فیدیبو', score: 200, src: '../images/fidibo.png' },
        { id: 4, title: 'کد تخفیف 10 درصدی بینه دات کام', score: 400, src: '../images/bimedotcom.png' },
        { id: 5, title: 'کد تخفیف 30 درصدی مکتب خونه', score: 400, src: '../images/maktabkhone.png' },
        { id: 6, title: 'اشتراک دو ماهه فیلم نت', score: 600, src: '../images/filmnet.png' },
    ])

    return (
        <div className="PrivilagesAndFacilities">
            <div className="PrivilagesAndFacilities-container">
                <div className="PrivilagesAndFacilities-top-flex">
                    <div className="small-product">
                        {
                            products.map((product, key) => (
                                <Product {...product} key={product.id} />
                            ))
                        }
                    </div>
                    <div className="big-product">
                        <div className="box-product2">
                            <div className="box-product-flex2">
                                <h3 id='top-title'>برداشت نقدی امتیازات</h3>
                                <img src="../images/Rectangle70.png" alt="" style={{width:'45%'}}/>
                                <input type="range" min={0}  max={1000}/>
                                <p id="box-product-price">1,000,000 ریال</p>
                                <button><p>برداشت وجه</p><span><RiMoneyDollarCircleLine  style={{width:'19px' , height:'19px'}}/></span></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="PrivilagesAndFacilities-bottom-flex">
                    <Tournament />
                </div>
            </div>
        </div>
    )
}
