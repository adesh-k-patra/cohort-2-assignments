import "./css/Login.css";
import { useRef } from "react";

export function Login(){
    const one = useRef();
    const two = useRef();
    const three = useRef();
    const four = useRef();
    const final = useRef();

    function otp1(){
        if(one.current.value.length == 1){
            two.current.focus();
        } 
    }
    function otp2(){
        if(two.current.value.length == 1){
            three.current.focus();
        }    
    }
    function otp3(){
        if(three.current.value.length == 1){
            four.current.focus();
        }    
    }
    function otp4(){
        if(one.current.value.length == 1){
            final.current.focus();
        }    
    }

    return(<div>
        <div className="enter-otp">
            <input ref={one} onChange={otp1} className="otp" type="text" maxLength="1" autoFocus="autofocus"></input>
            <input ref={two} onChange={otp2} className="otp" type = "text" maxLength="1"></input>
            <input ref={three} onChange={otp3} className="otp" type = "text" maxLength="1"></input>
            <input ref={four} onChange={otp4} className="otp" type = "text" maxLength="1"></input>
        </div>
        <button ref={final} className="login">Login</button>
    </div>)
}