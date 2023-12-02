import React from 'react';
import './CompetitionsAreBeginBox.css';
import { PiMedalMilitary } from "react-icons/pi";

export default function CompetitionsAreBeginBox() {
  return (
    <div className="CompetitionsAreBeginBox">
        <div className="CompetitionsAreBeginBox-container">
                <div className="CompetitionsAreBeginBox-title">
                <PiMedalMilitary style={{width:'25px' , height:"25px", color:'orangered'}}/>
                    <h4>عنوان مسابقه</h4>
                </div>
            <div className="CompetitionsAreBeginBox-flex ">
                <div className="CompetitionsAreBeginBox-flex-right">
                    <p style={{marginBottom:'10px'}}>امتیاز ورودی:رایگان</p>
                    <p>تعداد شرکت کنندگان : 10نفر</p><br />
                    <p style={{fontSize:'16px'}}>سوال: سوال مسابقه</p><br></br>
                    <div ><span><input type="radio" /> </span><p>1.پاسخ یک</p></div>
                    <div><span><input type="radio" /></span><p>2.پاسخ دو</p></div>
                    <div><span><input type="radio" /></span><p>3.پاسخ سه</p></div>
                    <div><span><input type="radio" /></span><p>4.پاسخ چهارشنبه</p></div>

                </div>
                <div className="CompetitionsAreBeginBox-flex-left">
                    <p>پاداش: 140 امتیاز</p><br />
                    <p>مهلت پاسخ 1402/09/06</p>
                </div>
            </div><br />
                <div style={{direction:'ltr', width:'100%',margin:'auto'}}>
                <button id='comp-btn' type="submit">شرکت در مسابقه</button>
                </div>
        </div>
    </div>
  )
}
