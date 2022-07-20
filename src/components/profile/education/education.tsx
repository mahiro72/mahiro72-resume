import React from "react";
import { EducationType } from "./educationList"

type Props = {
    education:EducationType;
    isLast:boolean;
}

const Education:React.FC<Props> = ({education,isLast})=>{
    return (
        <div className="flex">
            <div className="mr-8">
                <div className="mx-auto w-1 h-3 bg-gray-400"></div>
                <div className="bg-gray-400 rounded-full h-6 w-6">
                    {
                        isLast?
                        <>
                            <div className="mx-auto w-1 h-20 bg-gray-400"></div>
                            <div className="mt-2 mx-auto w-1 h-2 bg-gray-400"></div>
                            <div className="mt-2 mx-auto w-1 h-1 bg-gray-400"></div>
                        </>
                        :
                        <div className="mx-auto w-1 h-40 bg-gray-400"></div>
                    }
                </div>
            </div>

            <div className="text-lg font-light mt-2 mb-4">
                <div className="">
                    <div className="font-normal">{education.date}</div>
                    <div className="flex my-1">
                        <img src={education.img} className="w-9 h-9 mr-2 rounded-lg shadow-lg" />
                        <div className="my-auto font-normal text-xl">{education.name}</div>
                    </div>
                    <div className="text-base">
                        {education.about}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education;