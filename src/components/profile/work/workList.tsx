import React from "react";
import SecTitle from "../../common/SecTitle";
import data from "../../../data/profile/work/data"
import Work from "./work";

export type WorkType = {
    date:string;
    img:string;
    name:string;
    about:string;
}

const WorkList = () => {
    const works = data.work;
    return (
        <div className="pt-4 mb-4 md:mb-8">
            <SecTitle text={"Work Experience"} />
            {
                works.map((
                    work:WorkType,
                    idx:number
                )=>{
                    if (idx===works.length-1){
                        return <Work work={work} isLast={true} key={idx}/>
                    }else{
                        return <Work work={work} isLast={false} key={idx}/>
                    }
                    
                })
            }
        </div>
    )
}

export default WorkList;
