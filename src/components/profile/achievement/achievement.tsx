import React,{ useState } from "react";
import { AchievementType } from "./achievementList"
import SecAchievementTitle from "./SecAchievementTitle";
import SecAchievementLink from "./SecAchievementLink";
import img_memo from "../../../img/common/memo.png"
import img_github from "../../../img/common/github.png";

type Props = {
    achievement:AchievementType;
}

const Achievement:React.FC<Props> = ({achievement}) => {
    const [isExpand, setIsExpand] = useState<boolean>(false);

    return (
        <div className="flex mb-2">

            {/* ボタン */}
            {
                isExpand ?
                <div className=" md:mr-4 mt-6 ml-2">
                    <button onClick={()=>{setIsExpand(!isExpand)}}>
                        <div className="w-8 overflow-hidden inline-block">
                            <div className=" h-4 w-4 bg-gray-500 -rotate-45 transform origin-top-left"></div>
                        </div>
                    </button>
                </div>
                :
                <div className="mr-2 md:mr-6 mt-5 ml-4">
                    <button onClick={()=>{setIsExpand(!isExpand)}}>
                        <div className="w-4 overflow-hidden inline-block">
                            <div className="h-8 bg-gray-500 rotate-45 transform origin-top-left"></div>
                        </div>
                    </button>
                    </div>
            }

            <div className="text-base font-light w-64 md:w-full">
                <div className="">
                    <p className="text-sm text-gray-400">{achievement.date}</p>
                    <a 
                        className="hover:text-blue-400" 
                        onClick={()=>{setIsExpand(!isExpand)}}
                    >
                        {achievement.name}
                    </a>
                </div>
                {
                    isExpand ?
                    <div className="text-sm md:text-base mb-8 mt-2">
                        <SecAchievementTitle img={achievement.img} about={achievement.about} />
                        <SecAchievementLink img={img_memo} link={achievement.article} />
                        <SecAchievementLink img={img_github} link={achievement.github} />
                    </div>
                    :
                    <></>
                }
            </div>
        </div>
    )
}

export default Achievement;
