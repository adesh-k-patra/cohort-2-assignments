import { useSetRecoilState } from "recoil"
import "./Layout.css"
import { noOfWords } from "../store/atom/noOfWords"
import { useRef } from "react"

export function Layout(){
    const newValue = useRef();
    const setNoOfWords = useSetRecoilState(noOfWords);
    function updateAtom(){
        setNoOfWords(Number(newValue.current.value));
    }
    return(<div className="outer-div">
        <h1 className="title">Para Generator</h1>
        <input ref = {newValue} className= "input" type = "text" placeholder="Enter Number of Words"></input>
        <button className="generate" onClick={updateAtom}>Generate</button>
    </div>)
}