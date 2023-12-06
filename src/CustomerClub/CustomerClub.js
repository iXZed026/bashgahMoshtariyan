import React from 'react'
import "./CustomerClub.css";
import Customer from './Customer';
import Datas from '../Data';

export default function CustomerClub() {

    let {customerData} = Datas;

    let [customer,setCustomer] = React.useState(customerData);

    

  return (
    <div className="customer-club">
        <div className="customer-club-container">
            <h1 id='customer-club-title'>خدمت ما در باشگاه مشتریان کارگزاری نو اندیشان</h1>
            <div className="customer-club-flex">
              {
                customer.map((custom,key)=> <Customer key={custom.id} {...custom} customer={customer} setCustomer={setCustomer}/>)
              }
            </div>
        </div>
    </div>
  )
}
