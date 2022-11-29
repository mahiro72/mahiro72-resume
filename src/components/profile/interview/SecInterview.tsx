import React from "react";
import { InterviewType } from "./interviewList";
import img_microphone from "../../../img/common/microphone.png"

type Prop = {
    interview:InterviewType;
}

const SecInterview:React.FC<Prop> = ({interview}) => {
    return (
        <div className="mb-4">
            <p className="text-base font-light">{interview.date}</p>
            <div className="flex">
                <img src={img_microphone} alt="" className="h-5 w-5 mt-2 mr-2" />
                <a 
                className="text-gray-300 truncate text-lg hover:text-blue-400"
                href={interview.link}
                target="_blank"
            >
                {interview.title}
            </a>
            </div>

        </div>
    )
}

export default SecInterview;