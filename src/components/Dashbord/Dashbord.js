import React from 'react';
import './Dashbord.css'
import AssetLeft from './AssetLeft';
import AssetRight from './AssetRight';

export default function Dashbord() {
  return (
    <div className="dashbord-panel">
       <div className="dashbord-panel-top">
        <AssetLeft/>
        <AssetRight/>
       </div>
    </div>
  )
}
