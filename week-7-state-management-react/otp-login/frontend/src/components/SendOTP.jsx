import { useNavigate } from "react-router-dom";
import "./css/SendOTP.css";
import { useRef } from "react";



export function SendOTP(){
    const mobile = useRef();
    const navigate = useNavigate();
    function sendMobNumber (){
        const number = Number(mobile.current.value);
        console.log(number);
        if(number >= 1000000000){
            navigate("/login");
        }
        else{
            alert("Wrong input type");
        }  
    }
    return(<div>
        <input ref={mobile} className="input" type = "text" maxLength="10" placeholder="Enter mobile number"></input><br></br>
        <button onClick={sendMobNumber} className="send-otp">Send OTP</button>
    </div>)
}