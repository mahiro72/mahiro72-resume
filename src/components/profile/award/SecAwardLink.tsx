import React from "react";

type Prop = {
    img:string;
    link:string;
}

const SecAwardLink:React.FC<Prop> = ({img,link}) => {
    return (
        <>
        {
            link !== "" ?
            <div className="mb-2 flex">
                <img src={img} alt="" className="h-5 w-5 md:h-6 md:w-6" />
                <a 
                    className="ml-2 hover:text-blue-400 truncate" 
                    href={link}
                    target="_blank"
                >
                    {link}
                </a>
            </div>
            :<></>
        }
        </>
    )
}

export default SecAwardLink;