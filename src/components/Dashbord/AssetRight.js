import React from 'react'
import './AssetRight.css';

export default function AssetRight() {
  return (
    <div className="asset-right">
      <div className="asset-right-container">
        <h3 style={{marginBottom:'4%'}}>تفکیک دارایی</h3>
        <div style={{textAlign:'center'}}>
          <img src="../images/R59.png" alt="" style={{width:'170px' ,position:'relative'}}/>
        </div>
          <div className='total-value'>
          <span style={{fontSize:'13px'}}>Total Value</span><br />
          <span>80%</span>
          </div>
          <div className="asset-right-title">
            <div id='asset-right-title-flex'><span>عنوان</span><div id='asset-right-title-purple'></div></div>
            <div id='asset-right-title-flex'><span>عنوان</span><div id='asset-right-title-pink'></div></div>
            <div id='asset-right-title-flex'><span>عنوان</span><div  id='asset-right-title-blue'></div ></div>
          </div>
      </div>
    </div>
  )
}
