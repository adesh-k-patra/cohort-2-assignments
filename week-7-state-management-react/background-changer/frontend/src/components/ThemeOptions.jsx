import "./ThemeOptions.css"

export function ThemeOptions(){
    return(<div className="outer-div">
        <button onClick = {()=>{document.body.style.backgroundColor = "red"}} className="theme red">Red</button>
        <button onClick = {()=>{document.body.style.backgroundColor = "yellow"}} className="theme yellow">Yellow</button>
        <button onClick = {()=>{document.body.style.backgroundColor = "black"}} className="theme black">Black</button>
        <button onClick = {()=>{document.body.style.backgroundColor = "purple"}} className="theme purple">Purple</button>
        <button onClick = {()=>{document.body.style.backgroundColor = "green"}} className="theme green">Green</button>
        <button onClick = {()=>{document.body.style.backgroundColor = "blue"}} className="theme blue">Blue</button>
        <button onClick = {()=>{document.body.style.backgroundColor = "orange"}} className="theme default">Default</button>
    </div>)
}