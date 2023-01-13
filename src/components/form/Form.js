import "./Form.css";
import Btn from "../../UI/Btn";
import React, { useState } from "react";

const FormContainer = (props) => {
  const [ Name, SetName ] = useState("");
  const [ Email, SetEmail ] = useState("");
  const [ Phone, SetPhone ] = useState("");
  const [ Hbd, SetHbd ] = useState("");
  const [ invalidName, SetValidName ] = useState(false);
  const [ invalidEmail, SetValidEmail ] = useState(false);
  const [ invalidPhone, SetValidPhone ] = useState(false);
  const [ invalidDate, SetValidDate ] = useState(false);
  const [formHandler,setFormHandler] = useState(invalidName && invalidEmail && invalidPhone && invalidDate);
  const [btnHandler,setBtnHandler] = useState("button");

  const NameInputTakerHandler = (e) => {
    if(e.target.value.trim().length < 1 || /\s/.test(e.target.value)){
      SetValidName(false);
      SetName(e.target.value)
    } else{
      SetName(e.target.value)
      SetValidName(true)
    }
  };

  const EmailInputTakerHandler = (e) => {
    if(e.target.value.trim().length < 1 || !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value))){// eslint-disable-line
      SetValidEmail(false);
      SetEmail(e.target.value);
    } else{
      SetEmail(e.target.value);
      SetValidEmail(true)
    }
  };

  const PhoneInputTakerHandler = (e) => {
    if(e.target.value.trim().length < 1 || !e.target.value.match(/^\d{10}$/) || e.target.value.trim().length > 10){
      SetValidPhone(false);
      SetPhone(e.target.value);
    } else{
      SetPhone(e.target.value);
      SetValidPhone(true)
    }
  };

  const HbdInputTakerHandler = (e) => {
    if(e.target.value.trim().length < 1){
      SetValidDate(false);
      SetHbd(e.target.value);
    } else{
      SetHbd(e.target.value);
      SetValidDate(true)
    }
  };

  const FormHandler = () =>{
    console.log(invalidName + " " + invalidEmail + " " + invalidPhone + " " + invalidDate);
    if (formHandler){
      setBtnHandler("submit");
    } else{
      setBtnHandler("button");
    }
  }


  const submitHandler = (e) =>{
    e.preventDefault();

    const user = {
        name: Name,
        email: Email,
        phoneNumber: Phone,
        DOB: new Date(Hbd).toLocaleDateString("US-en",{timeZone: "IST"}),
        id: new Date().toISOString()
    };
    props.onAddUser(user);  
    SetName('');
    SetEmail('');
    SetPhone('');
    SetHbd('');
    setBtnHandler("button");
    SetValidDate(false)
    SetValidName(false)
    SetValidPhone(false)
    SetValidEmail(false)
  };

  const cancelHandler = (e) =>{
    e.preventDefault();
    props.onCancel();  
    SetName('');
    SetEmail('');
    SetPhone('');
    SetHbd('');
  };

  return (
    <form className="form-container " onChange={FormHandler} onSubmit={submitHandler}>
      <div className={`input-box ${invalidName ? "error-box" : ""}`}>
        <input
          type="text"
          value={Name}
          placeholder="Enter your name"
          onChange={NameInputTakerHandler}
        />
      </div>
      <div className={`input-box ${invalidEmail ? "error-box" : ""}`}>
        <input
          type="text"
          value={Email}
          placeholder="Enter your email"
          onChange={EmailInputTakerHandler}
        />
      </div>
      <div className={`input-box ${invalidPhone ? "error-box" : ""}`}>
        <input
          type="text"
          value={Phone}
          placeholder="Enter your phone number"
          onChange={PhoneInputTakerHandler}
        />
      </div>
      <div className={`input-box ${invalidDate ? "error-box" : ""}`}>
        <input
          type="date"
          value={Hbd}
          min="2001-01-01" max="2005-12-31"
          placeholder="Enter your birthday"
          onChange={HbdInputTakerHandler}
        />
      </div>
      <div className="action-buttons">
        <Btn type={"button"} value={"Cancel"} onClick={cancelHandler}></Btn>
      </div>
      <div className="action-buttons">
        <Btn type={btnHandler} value={"Add User"}></Btn>
      </div>
    </form>
  );
};

export default FormContainer;
