import React from 'react'
import './NavLeft.css';
import { IoHomeOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { IoIosPeople } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { LiaTelegram } from "react-icons/lia";
import { BsTelephone } from "react-icons/bs";


export default function NavLeft() {
    return (
        <div className="nav-left">
            <div className="nav-left-flex">
                <IoHomeOutline style={{ width: '26', height: '26', cursor: 'pointer' }} />
                <br /><br /><br /><br />
                <CiMail style={{ width: '26', height: '26', cursor: 'pointer' }} /><br />
                <IoIosPeople style={{ width: '26', height: '26', cursor: 'pointer' }} /><br />
                <FaInstagram style={{ width: '26', height: '26', cursor: 'pointer' }} /><br />
                <LiaTelegram style={{ width: '26', height: '26', cursor: 'pointer' }} />
                <br /><br /><br /><br />
                <BsTelephone style={{ width: '26', height: '26', cursor: 'pointer' }} />
                <br /><br />
            </div>
        </div>
    )
}
