import React from "react";
import SecSkillContent from "./SecSkillContent";
import SecSkillTitle from "./SecSkillTitle";

type Prop = {
    title:string;
    color:string;
    langList:LangType[];
}

export type LangType = {
    name:string;
    level:number;
}

const SecSkillGroup:React.FC<Prop> = ({title,color,langList}) => {
    return (
        <div className="mb-10">
            <SecSkillTitle title={title} color={color} />
            <div className="grid grid-cols-3 md:grid-cols-4">
                {
                    langList.map((lang,idx)=>{
                        return <SecSkillContent lang={lang} key={idx} color={color}/>
                    })
                }
            </div>
        </div>
    )
}

export default SecSkillGroup;