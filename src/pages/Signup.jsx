import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation, faXmark } from '@fortawesome/free-solid-svg-icons';
import "./Signup.css";
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [nameError, setNameError] = useState(null);
    const [emailError, setEmailError] = useState(null);

    const [success, setSuccess] = useState(false);
    const [count, setCount] = useState(5);
    const nav = useNavigate();

    const onChangeName = (e) => {
        if (e.target.value !== null && e.target.value !== "") {
            setName(e.target.value);
            setNameError(null);
        } else {
            setNameError("Name is required");
        }
    };

    const onChangeEmail = (e) => {
        const email = e.target.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        setEmail(email);
        
        if(email && emailRegex.test(email)) {
            setEmailError(null);
        } else {
            setEmailError("Enter a valid email address");
        }
    };
    
    const signupHandler = () =>{
        if(!nameError && !emailError){
            setSuccess(true);

           
            setTimeout(()=>{
                nav("/");
            }, 5000)

            
            setInterval(()=>{
                setCount(count => count-1);
            },1000)
        }
    }

    return (
        <div>
            <div className="signup-header">
                <div className="container">
                    <div className="row sign-up-header-row">
                        <div className="col-lg-6 col-6">
                            <div className="logo">
                                <img src="/images/Logo.png" alt="" />
                            </div>
                        </div>
                        {!success &&
                            <div className="col-lg-6 col-6 text-end">
                                <FontAwesomeIcon onClick={() => nav("/")} className='cross-icon' icon={faXmark}></FontAwesomeIcon>
                            </div>
                        }
                    </div>
                </div>
            </div>

            {!success ?
                <div className="sign-up-form">
                    <div className="container sign-up-container">
                        <div className="row">
                            <div className="col-md-12 text-center ">
                                <div className="form-title">
                                    <p>Registration Form</p>
                                </div>
                                <div className="form-subtitile">
                                    <p>Start your success <br /> Journey here!</p>
                                </div>
                                <div className="form-body">
                                    <div className="name">
                                        <input type="text" placeholder='Enter Your Name' onChange={onChangeName} />
                                        {nameError && <span className='error'>{nameError}</span>}
                                    </div>
                                    <div className="email">
                                        <input type="text" placeholder='Enter your Email' onChange={onChangeEmail} />
                                        {emailError && <span className='error'><FontAwesomeIcon style={{marginRight: "5px"}} icon={faCircleExclamation}></FontAwesomeIcon> {emailError}</span>}
                                    </div>
                                    <div className="form-button">
                                        <button disabled={!name || !email} onClick={()=>{signupHandler()}}>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                : <div className="sign-up-success">
                    <div className="container sign-up-success-container ">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="success-logo">
                                    <img src="/images/success-logo.svg" alt="" />
                                </div>
                                <div className="success-titile">
                                    <p>Success Submitted</p>
                                </div>
                                <div className="notify">
                                    <p className='greet'>Congratulations</p>
                                    <p className='text'> Your request has been successfully submitted to us. We will validate your information and reach out to your shortly with updates</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="container">
                        <div className="sign-up-success-footer text-center">
                            <p>Redirecting you to Homepage in <span style={{ color:"#1C1C1C"}}>{count} Seconds</span></p>
                        </div>
                    </div>
                        
                </div>
            }
        </div>
    )
}

export default Signup