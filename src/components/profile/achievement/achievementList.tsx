import React from "react";
import SecTitle from "../../common/SecTitle";
import Achievement from "./achievement";
import data from '../../../data/profile/achievement/data'
import SecTips from "../../common/SecTips";

export type AchievementType = {
    date:string;
    name:string;
    img:string;
    about:string;
    article:string;
    github:string;
}

const AchievementList:React.FC = () => {

    const achievements = data.achievement;

    return (
        <div className="pt-4 mb-4 md:mb-8">
            <SecTitle text={"Achievement"} />
            <SecTips text={"▶ ボタンを押すと詳細画面が表示されます"} />
            {
                achievements.map((
                    achievement:AchievementType,
                    idx:number
                )=>{
                    return <Achievement achievement={achievement} key={idx}/>
                })
            }
        </div>
    )
}

export default AchievementList;

