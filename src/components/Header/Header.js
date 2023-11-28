import React from 'react';
import './Header.css';
import Datas from '../../Data';
import { VscDashboard } from "react-icons/vsc";
import { FaUserCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

export default function Header() {


    return (
        <div className="header">
            <div className="header-flex">
                <div className="dashbord">
                    <VscDashboard style={{width:'22px' , height:'22px'}} />
                    <p>داشبورد</p>
                </div>
                <div className="fund">
                    <p>مجموع سرمایه من</p>
                    <p>8,000,000</p>
                </div>
                <div className="user-score">
                    <p> امتیاز </p>
                    <p> 1000 </p>
                </div>
                <div className="user-profile">
                <IoIosArrowDown style={{width:'19px', height:'19px', marginBottom:'3px'}}/><p>User Name</p>
                        <FaUserCircle style={{width:'35px' , height:'35px'}}/>
                </div>
            </div>
        </div>
    )
}
