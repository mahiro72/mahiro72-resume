import React from "react";
import SecTitle from "../../common/SecTitle";
import Award from "./award";
import data from '../../../data/profile/award/data'
import SecTips from "../../common/SecTips";

export type AwardType = {
    date:string;
    name:string;
    img:string;
    about:string;
    article:string;
    github:string;
}

const AwardList:React.FC = () => {

    const awards = data.award;

    return (
        <div className="pt-4 mb-4 md:mb-8">
            <SecTitle text={"Award"} />
            <SecTips text={"▶ ボタンを押すと詳細画面が表示されます"} />
            {
                awards.map((
                    award:AwardType,
                    idx:number
                )=>{
                    return <Award award={award} key={idx}/>
                })
            }
        </div>
    )
}

export default AwardList;

