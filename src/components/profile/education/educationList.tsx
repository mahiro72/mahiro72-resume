import React from "react";
import SecTitle from "../../common/SecTitle";
import Education from "./education";
import data from '../../../data/profile/education/data'

export type EducationType = {
    date:string;
    img:string;
    name:string;
    about:string;
}

const EducationList:React.FC = ()=>{
    const educations = data.education;

    return (
        <div className="pt-4 mb-4 md:mb-8">
            <SecTitle text={"Education"} />
            {
                educations.map((
                    education:EducationType,
                    idx:number
                )=>{
                    if (idx===educations.length-1){
                        return <Education education={education} isLast={true} key={idx}/>
                    }else{
                        return <Education education={education} isLast={false} key={idx}/>
                    }
                    
                })
            }
        </div>
    )
}

export default EducationList;