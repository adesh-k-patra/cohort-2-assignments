import { useRecoilValue } from "recoil"
import "./css/GithubInfo.css"
import { gitInfo } from "../store/atoms/gitInfo"
export function GithubInfo(){
    const data = useRecoilValue(gitInfo);
    return(<div>
        {data.first ? <div></div> : <Layout />}     
    </div>)
}

function Layout(){
    const data = useRecoilValue(gitInfo);
    return <div className="outer-div">
        <div>
            <img src={data.image}></img>
        </div>
        <div className="info">
        Name : {data.name} <br></br>
        Email : {data.email} <br></br>
        Comapany : {data.company} <br></br>
        Location : {data.location} <br></br>
        Public Repositories : {data.pRepo} <br></br>
        Public Gists : {data.pGist} <br></br>
        Created At : {data.created} <br></br>
        </div>
    </div>    
}