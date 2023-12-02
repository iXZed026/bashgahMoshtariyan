import React from 'react'
import './CompetitionsAreBegin.css';
import { Route , Routes } from 'react-router-dom';
import CompetitionsAreBeginBox from './CompetitionsAreBeginBox';

export default function CompetitionsAreBegin() {
  return (
        <div className="CompetitionsAreBegin">
            <div className="CompetitionsAreBegin-container">
                <div className="CompetitionsAreBegin-flex">
                    <CompetitionsAreBeginBox/>
                    <CompetitionsAreBeginBox/>
                    <CompetitionsAreBeginBox/>
                    <CompetitionsAreBeginBox/>
                </div>
            </div>
        </div>
      
  )
}
