import React from "react";

type Prop = {
    about:string;
    img:string;
}

const SecAwardTitle:React.FC<Prop> = ({about,img}) => {
    return (
        <div className="mb-6">
            {
                img ?
                <img src={img} alt="" className="w-60 md:w-80 mb-2 mt-4"/>
                :<></>
            }
            <p>{about}</p>
        </div>
    )
}

export default SecAwardTitle;