import { useRecoilValue } from "recoil"
import "./ProfileComponent.css"
import { profileInformation } from "../store/atom/info"

export function ProfileComponent(){
    const info = useRecoilValue(profileInformation);
    return(<div className="outer-div">
        <div className="top-div">
        </div>
        <div className="bottom-div">
            <div className="personal-info">
                <div className="name-info">
                    <p className="name">{info.name}</p>
                    <p className="age">{info.age}</p>
                </div>
                <div className="place-info">
                    <p>{info.place}</p>
                </div>
            </div>
            <hr></hr>
            <div className="social-info">
                <div className="sub-social">
                    <p className="focus">{info.followers}</p>
                    <p className="focus-lite">Followers</p>
                </div>
                <div className="sub-social">
                    <p className="focus">{info.likes}</p>
                    <p className="focus-lite">Likes</p>
                </div>
                <div className="sub-social">
                    <p className="focus">{info.photos}</p>
                    <p className="focus-lite">Photos</p>
                </div>
            </div>
        </div>
    </div>)
}