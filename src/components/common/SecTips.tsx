import Reqct from "react";

type Prop = {
    text:string;
}

const SecTips:React.FC<Prop> = ({text}) => {
    return(
        <div className="my-6 mx-4">
            <div 
                className="
                    border-2 border-green-700 
                    bg-gray-800
                    opacity-75 p-3 shadow-2xl 
                    rounded-lg text-gray-200
                    "
            >
                <p className="text-base font-bold mb-1">💡 Tips</p>
                <p className="text-sm font-light">{text}</p>
            </div>
        </div>
    )
}

export default SecTips;