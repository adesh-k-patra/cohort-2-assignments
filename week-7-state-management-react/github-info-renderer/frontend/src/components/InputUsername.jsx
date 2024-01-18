import { useSetRecoilState } from "recoil";
import "./css/InputUsername.css";
import {useRef} from "react";
import { gitInfo } from "../store/atoms/gitInfo";

export function InputUsername(){

    const userRef = useRef();
    const setGitInfo = useSetRecoilState(gitInfo);

    function updateProfile(){
        const username = userRef.current.value;
        console.log(username);
        const url = `https://api.github.com/users/${username}`;
        fetch(url).then(async (res)=>{
            const response = await res.json();
            const newGitInfo = {
                first : false,
                image : response.avatar_url,
                name : response.name == null ? "Not avaliable" : response.name,
                email : response.email == null ? "Not avaliable" : response.email,
                company : response.company == null ? "Not avaliable" : response.company,
                location : response.location == null ? "Not avaliable" : response.location,
                pRepo : response.public_repos == null ? "Not avaliable" : response.public_repos,
                pGist : response.public_gists == null ? "Not avaliable" : response.public_gists,
                created : response.created_at == null ? "Not avaliable" : response.created_at
            }
            setGitInfo(newGitInfo);
        })
    }
    return(<div>
        <input ref={userRef} type="text" placeholder="Type your usename here"></input>
        <button onClick={updateProfile}>Generate Github Info</button>
    </div>)
}