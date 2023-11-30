import React from 'react';
import './Tournament.css';

export default function Tournament() {
    return (
        <div className="tournament">
            <div className="tournament-container">
                <div className="tournament-logo">
                    <h3>مسابقه</h3>
                    <img src="../images/tournament.png" alt="" />
                </div>
                <div className="tournament-todo">
                    <div className="tournament-willstart"><p>مسابقات در حال برگزاری</p></div>
                    <div className="tournament-join" ><p>سابقاتی که شرکت کردم</p></div>
                    <div className="tournament-end"><p>مسابقات خاتمه یافته</p></div>
                </div>
            </div>
        </div>
    )
}
