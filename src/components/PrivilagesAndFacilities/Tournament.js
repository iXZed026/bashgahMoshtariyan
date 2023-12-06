import React from 'react';
import './Tournament.css';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import CompetitionsAreBegin from '../Tournament/CompetitionsAreBegin';

export default function Tournament() {
    return (
        <div className="tournament">
            <div className="tournament-container">
                <div className="tournament-logo">
                    <h3>مسابقه</h3>
                    <img src="../images/tournament.png" alt="" />
                </div>
                <div className="tournament-todo">
                    <div className="tournament-willstart"><p><Link to='../Tournament/CompetitionsAreBegin' style={{textDecoration:'none'}}>مسابقات در حال برگزاری</Link></p></div>
                    <div className="tournament-join" ><p><Link to='../Tournament/Participeted' style={{textDecoration:'none'}}>مسابقاتی که شرکت کردم</Link></p></div>
                    <div className="tournament-end"><p>مسابقات خاتمه یافته</p></div>
                </div>
            </div>
        </div>
        

    )
}
