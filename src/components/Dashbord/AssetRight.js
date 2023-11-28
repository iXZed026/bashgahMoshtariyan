import React from 'react'
import './AssetRight.css';

export default function AssetRight() {
  return (
    <div className="asset-right">
      <div className="asset-right-container">
        <h3 style={{marginBottom:'4%'}}>تفکیک دارای</h3>
        <div style={{textAlign:'center'}}>
          <img src="../images/R59.png" alt="" style={{width:'60%' ,position:'relative'}}/>
        </div>
          <div className='total-value'>
          <span>Total Value</span><br />
          <span>80%</span>
          </div>
      </div>
    </div>
  )
}
