import React from "react";

type Prop = {
    text:string;
    img:string;
    link:string;
}

const SecInfoLink:React.FC<Prop> = ({text,img,link}) => {
    return (
        <div className="text-sm mb-2 flex">
            <div className="flex justify-center">
                <img src={img} alt="" className="my-auto h-5 w-5" />
                { 
                    link==="" ?
                    <p className="ml-2 text-gray-300">{text}</p>
                    :
                    <a 
                        href={link} 
                        className="ml-2 text-gray-300 hover:text-blue-400"
                        target="_blank"
                    >
                        {text}
                    </a>
                }
            </div>
        </div>
    )
}

export default SecInfoLink;