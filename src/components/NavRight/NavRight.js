import React from 'react'
import './NavRight.css';
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa6";
import { VscDashboard } from "react-icons/vsc";
import { PiMedalLight } from "react-icons/pi";
import { HiUsers } from "react-icons/hi";
import { DiGoogleAnalytics } from "react-icons/di";
import { MdModelTraining } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function NavRight() {
  return (
    <div className="nav-right">
      <div className="nav-right-flex">
        <div className="nav-right-logo">
          <img src="./images/noAndishan.svg" alt="noAndishan" />
          <span>کارگذاری نو اندیشان</span>
        </div>
        <nav>
          <Link id='navLinks' to='./UserInformation/UserInformation'><FaUser style={{width:'17px',height:'17px'}}/><p>اطلاعات کاربری</p></Link>
          <Link id='navLinks' to='./Dashbord/Dashbord'><VscDashboard style={{width:'17px',height:'17px'}}/><p>داشبورد مدریتی</p></Link>
          <Link id='navLinks' to='./PrivilagesAndFacilities/PrivilagesAndFacilities'><PiMedalLight style={{width:'17px',height:'17px'}}/><p>امتیازات و تسهیلات</p></Link>
          <Link id='navLinks' to='./CustomerClub/CustomerClub'><HiUsers style={{width:'17px',height:'17px'}}/><p>خدمات باشگاه مشتریان</p></Link>
          <Link id='navLinks' to=''><DiGoogleAnalytics style={{width:'17px',height:'17px'}}/><p>گزارش,تحلیل و انالیز</p></Link>
          <Link id='navLinks' to=''><MdModelTraining style={{width:'17px',height:'17px'}}/><p>اموزش و وبینار</p></Link>
        <Link  id='navLinks' className='navLinks-margin' to=''><BsFillTelephoneFill style={{width:'17px',height:'17px'}}/><p>پشتیبانی و مشاوره</p></Link>
        </nav>
      </div>
    </div>
  )
}
