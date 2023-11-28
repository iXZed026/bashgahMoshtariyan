import React , {useState,useEffect} from 'react'
import "../UserInformation/UserInformation.css"
import Input from './Input'
import Datas from '../../Data';


export default function UserInformation() {

  let [usersInformation,setUsersInformation] = useState(Datas.userInformationData)



  return (
    <div className="user-information">
        <div className="user-information-container">
            <h3>اطلاعات حساب کاربری شما</h3>
            <div className="user-information-flex">
            <div className="user-information-flex1">
                <Input id={1} title={'کد ملی'} val={usersInformation.nationalCode} usersInformation={usersInformation} setUsersInformation={setUsersInformation}/>
                <Input id={2} title={'نام'} val={usersInformation.firstName}   usersInformation={usersInformation} setUsersInformation={setUsersInformation}/>
                <Input id={3} title={'شماره تلفن همراه'}  val={usersInformation.telephoneNumber} usersInformation={usersInformation} setUsersInformation={setUsersInformation}/>
            </div>
            <div className="user-information-flex2">
                <Input id={4} title={'نام کاربری'}  val={usersInformation.userName} usersInformation={usersInformation} setUsersInformation={setUsersInformation}/>
                <Input id={5} title={'نام خانوادگی'} val={usersInformation.lastName} usersInformation={usersInformation} setUsersInformation={setUsersInformation} />
                <Input id={6} title={'رمز عبور'}  val={usersInformation.password} usersInformation={usersInformation} setUsersInformation={setUsersInformation}/>
            </div>

                
            </div>
            <button type='submit'>ویرایش</button>
        </div>
    </div>
  )
}
