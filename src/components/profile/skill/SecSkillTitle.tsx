import React from "react";

type Prop = {
    title:string;
    color:string;
}


const SecSkillTitle:React.FC<Prop> = ({title,color}) => {
    return (
        <>
            <div className={`rounded-full h-9 w-28 bg-${color}-500 my-auto shadow-lg`}>
                <p className="text-center font-normal text-lg">
                    <span className="inline-block align-middle">
                        {title}
                    </span>
                </p>
            </div>
        </>
    )
}

export default SecSkillTitle;