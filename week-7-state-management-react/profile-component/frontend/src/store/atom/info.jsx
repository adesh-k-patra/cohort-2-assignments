import {atom} from "recoil"
export const profileInformation = atom({
    key : "profileInformation",
    default : {
        name : "Rita Correia",
        age : 32,
        place : "London",
        followers : "80K",
        likes : "803K",
        photos : "1.4K"
    }
})