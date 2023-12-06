import React from 'react';
import "./Customer.css";
import { PiMedalMilitary } from "react-icons/pi";

export default function Customer(props) {

    let {logo,showInfo,title,info} = props;

    let [infos,setInfos] = React.useState(showInfo);

    function showInfoHandler(){
        setInfos(!infos)
    }
 
    return (
        <div className="customer">
            <div className="customer-container">
                <div className="customer-flex">
                    <div className="customer-title">
                        {logo}<h2 onClick={showInfoHandler}>{title}</h2>
                    </div>
                    <p style={{display:infos?'initial' : 'none'}}>{info}</p>
                </div>
            </div>
        </div>
    )
}
