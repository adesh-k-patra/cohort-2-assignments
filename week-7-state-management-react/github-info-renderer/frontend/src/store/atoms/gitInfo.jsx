import {atom} from "recoil";

export const gitInfo = atom({
    key : "gitInfo",
    default : {
        first : true,
        image : "",
        name : "",
        email : "",
        company : "",
        location : "",
        pRepo : 0,
        pGist : 0,
        created : ""
    }
})