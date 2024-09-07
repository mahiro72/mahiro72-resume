import React from "react";
import SecTitle from "../../common/SecTitle";
import SecTips from "../../common/SecTips";
import SecSkillGroup from "./SecSkillGroup";

import data from "../../../data/profile/skill/data";

const SkillList:React.FC = () => {
    const frontendList = data.frontendList;
    const backendList = data.backendList;
    const infraList = data.infraList;
    const otherList = data.otherList;

    return(
        <div className="pt-4 mb-4 md:mb-8">
            <SecTitle text={"Skill"} />
            <SecTips text={"★が多いほど得意な技術です (min:1, max:5)"} />
            <SecSkillGroup title={"Frontend"} color={"rose"} langList={frontendList}/>
            <SecSkillGroup title={"Backend"} color={"violet"} langList={backendList}/>
            <SecSkillGroup title={"Tools"} color={"orange"} langList={infraList}/>
            <SecSkillGroup title={"Others"} color={"emerald"} langList={otherList}/>
        </div>
    )
}

export default SkillList;