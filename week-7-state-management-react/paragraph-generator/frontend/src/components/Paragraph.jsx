import { useRecoilValue } from "recoil";
import { noOfWords } from "../store/atom/noOfWords";
import { wordArray } from "../paragraph";
import "./Paragraph.css"

export function Paragraph(){
    const totalWords = useRecoilValue(noOfWords);
    let finalString = "";
    for(let i = 0; i < totalWords; i++){
        finalString = finalString +  " " + wordArray[i];
    }
    console.log(totalWords);
    return(<div className="paragraph">
        {finalString}
    </div>)

}