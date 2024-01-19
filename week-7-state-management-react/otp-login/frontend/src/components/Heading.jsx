/* eslint-disable no-undef */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./Login";
import { SendOTP } from "./SendOTP";
import "./css/Heading.css";

export function Heading(){
    document.body.style.backgroundColor = "black";
    return <div className="outer-div">
        <p className="heading">Login via OTP</p>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SendOTP/>} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    </div>
}