import React, { useEffect, useState } from 'react';
import { BiUser } from 'react-icons/bi';
import { AiOutlineKey } from 'react-icons/ai';
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { GrRefresh } from 'react-icons/gr';
import { BiMobileAlt } from "react-icons/bi";
import "./Login.css";
import { eventWrapper } from '@testing-library/user-event/dist/utils';

function Login(props) {
    let { login, setLogin } = props;
    const [security, setSecurity] = useState(Math.floor(Math.random() * 99000) + 10000);
    const [showPassword, setShowPassword] = useState(false);
    const [forgetPass, setForgetPass] = useState(false);

    let emptyInputErr = 'لطفا داخل کادر را خالی نگذارید.';
    let secCodeErr = 'لطفا کد امنیتی را با دقت وارد کنید.'


    // Function to generate a random security code
    function randomSecurityCode() {
        setSecurity(Math.floor(Math.random() * 90000) + 10000);
    }

    // Event handler for changes in the national code or username input
    function nationalOrUserNameHandler(event) {
        setLogin({
            ...login,
            nationalCodeOrUserName: event.target.value
        });
    }

    // Event handler for changes in the password input
    function passwordHandler(event) {
        setLogin({
            ...login,
            password: event.target.value
        });
    }

    // Event handler for toggling password visibility
    function showPasswordHandler() {
        setShowPassword(!showPassword);
    }

    // Event handler for changes in the security code input
    function securityHandler(event) {
        setLogin({
            ...login,
            securityCodeInput: event.target.value
        });
    }

    // Form submission handler
    function submitedForm(event) {
        event.preventDefault();

        setLogin({
            ...login,
            submited: true
        });


        if (login.nationalCodeOrUserName.trim().length < 12 && login.password.trim().length < 12 && login.securityCodeInput == security) {
            setLogin({
                ...login,
                allTrue: true
            });

            localStorage.setItem('userName',login.nationalCodeOrUserName);

        } else {
            setSecurity(Math.floor(Math.random() * 99000) + 10000);
        }
        // Hide span errors after 10secound
        if (!login.allTrue) {
            setTimeout(() => {
                setLogin({
                    ...login,
                    submited: false
                });
            }, 10000)
        }

    }

    function forgetPasswordHandler() {
        setForgetPass(true)
    }

    function backFormHandler() {
        setForgetPass(false);
    }


    return (
        <>
            <div className="form-display-flex">
                <div className="form" data={login.allTrue}>
                    <form className="form-container" onSubmit={submitedForm}>
                        <div className="logo">
                            <img src="./images/noAndishan.svg" alt="" />
                            <span>کارگذاری نواندیشان</span>
                        </div>
                        <h3>جهت بازیابی رمز عبور اطلاعات خود را وارد نمایید.</h3>

                        {
                            !forgetPass ? (
                                <>
                                    <div className="form-input">
                                        <span className='input-title'>کد ملی / نام کاربری</span><br></br>
                                        {<BiUser className="logo" />}
                                        <input
                                            type='text' className="form-input"
                                            value={login.nationalCodeOrUserName}
                                            maxLength={20}
                                            onChange={nationalOrUserNameHandler}
                                        />
                                        {
                                            login.nationalCodeOrUserName.trim().length == 0 && login.submited == true && (
                                                <span className="username-error" id='form-span-error'>{emptyInputErr}</span>
                                            )
                                        }
                                        {
                                            login.nationalCodeOrUserName.trim().length >= 12 && login.submited == true && login.nationalCodeOrUserName.trim().length != 0 && (
                                                <span className="username-error" id='form-span-error'>کد ملی یا نام کاربری صحیح نمیباشد.</span>
                                            )
                                        }
                                    </div>

                                    <div className="form-input">
                                        <span className='input-title'>رمز عبور</span><br></br>
                                        {<AiOutlineKey className="logo" />}
                                        <input
                                            type={showPassword ? 'text' : 'password'} className="form-input"
                                            onChange={passwordHandler}
                                        />
                                        <span className="showpasssword" onClick={showPasswordHandler}>
                                            {!showPassword ? <FaEyeSlash className='closeEye' /> : <IoEyeSharp className='openEye' />}
                                        </span>
                                        {
                                            login.password.trim().length == 0 && login.submited == true && (
                                                <span className="password-error" id='form-span-error'>{emptyInputErr}</span>
                                            )
                                        }
                                        {
                                            login.password.trim().length >= 12 && login.submited == true && login.password.trim().length != 0 && (
                                                <span className="password-error" id='form-span-error'>رمز عبور صحیح نمیباشد.</span>
                                            )
                                        }
                                    </div>
                                </>
                            ) : (

                                <>
                                    <div className="form-input">
                                        <span className='input-title'>کد ملی</span><br></br>
                                        {<BiUser className="logo" />}
                                        <input
                                            type='text' className="form-input"
                                            value={login.nationalCodeOrUserName}
                                            maxLength={20}
                                            onChange={nationalOrUserNameHandler}
                                        />
                                        {
                                            login.nationalCodeOrUserName.trim().length == 0 && login.submited == true && (
                                                <span className="username-error" id='form-span-error'>{emptyInputErr}</span>
                                            )
                                        }
                                        {
                                            login.nationalCodeOrUserName.trim().length >= 12 && login.submited == true && login.nationalCodeOrUserName.trim().length != 0 && (
                                                <span className="username-error" id='form-span-error'>کد ملی یا نام کاربری صحیح نمیباشد.</span>
                                            )
                                        }
                                    </div>

                                    <div className="form-input">
                                        <span className='input-title'>شماره تلفن همراه</span><br></br>
                                        {<BiMobileAlt className="logo" />}
                                        <input
                                            style={{ direction: 'ltr' }}
                                            type='text' className="form-input"
                                            placeholder='09*********'
                                            value={login.nationalCodeOrUserName}
                                            maxLength={11}
                                            onChange={nationalOrUserNameHandler}
                                        />
                                        {
                                            login.nationalCodeOrUserName.trim().length == 0 && login.submited == true && (
                                                <span className="username-error" id='form-span-error'>{emptyInputErr}</span>
                                            )
                                        }
                                        {
                                            login.nationalCodeOrUserName.trim().length >= 12 && login.submited == true && login.nationalCodeOrUserName.trim().length != 0 && (
                                                <span className="username-error" id='form-span-error'>کد ملی یا نام کاربری صحیح نمیباشد.</span>
                                            )
                                        }
                                    </div>

                                </>


                            )
                        }

                        <div className="security-code">
                            <span className='input-title'>کد امنیتی</span>
                            <div className="security-code-container">
                                <div className="code" id='code1'>
                                    <input type="text" placeholder='کد امنیتی' onChange={securityHandler} />
                                </div>
                                <div className="code" id='code2'>
                                    <input type="text" placeholder={security} disabled />
                                    <GrRefresh className='refresh' onClick={randomSecurityCode} />
                                </div>
                            </div>
                            {
                                login.securityCodeInput.trim() != security && login.submited == true && (
                                    <span className="seccode-error" id='form-span-error'>{secCodeErr}</span>
                                )
                            }
                        </div>
                        <div className="form-footer">
                            {
                                !forgetPass ? (
                                    <>
                                        <button type='submit'>ورود به پنل کاربری</button><br></br>
                                        <p style={{ fontSize: '12px', color: 'blue', cursor: 'pointer' }} onClick={forgetPasswordHandler}>کلمه عبور خود را فراموش کرده اید؟</p>
                                    </>
                                ) : (
                                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '90%', margin: 'auto' }}>
                                        <button style={{ width: '45%' }} type='submit'>ارسال کد بازیابی</button>
                                        <button style={{ width: '45%' }} type='submit' onClick={backFormHandler}>بازگشت</button>
                                    </div>
                                )
                            }
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;
