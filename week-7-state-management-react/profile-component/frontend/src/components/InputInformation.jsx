import { useSetRecoilState } from "recoil"
import { profileInformation } from "../store/atom/info"
import { useRef } from "react";

export function InputInformation(){
    const setInfo = useSetRecoilState(profileInformation);
    const nameRef = useRef();
    const ageRef = useRef();
    const placeRef = useRef();
    const followerRef = useRef();
    const likeRef = useRef();
    const photoRef = useRef();
    
    function updateInfo(){
        setInfo({
            name : nameRef.current.value,
            age : ageRef.current.value,
            place : placeRef.current.value,
            followers : followerRef.current.value,
            likes : likeRef.current.value,
            photos : photoRef.current.value
        })
    }
    return(<div>
        <input ref = {nameRef} type = "text" placeholder="Type Name"></input>
        <input ref = {ageRef} type = "text" placeholder="Type Age"></input>
        <input ref = {placeRef} type = "text" placeholder="Type Place"></input>
        <input ref = {followerRef} type = "text" placeholder="Type no.of Followers"></input>
        <input ref = {likeRef} type = "text" placeholder="Type no.of Likes"></input>
        <input ref = {photoRef} type = "text" placeholder="Type no.of Photos"></input>
        <button onClick = {updateInfo}>Generate Profile Component</button>
    </div>)
}