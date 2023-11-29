import React from 'react';
import './Dashbord.css'
import AssetLeft from './AssetLeft';
import AssetRight from './AssetRight';
import Chart from './Chart';

export default function Dashbord() {
  return (
    <div className="dashbord-panel">
       <div className="dashbord-panel-top" style={{marginBottom:'2%'}}>
        <AssetLeft/>
        <AssetRight/>
       </div>
       <div className="dashbord-panel-bottom">
        <Chart />
       </div>
    </div>
  )
}
