import React,{ useEffect, useState } from "react";
import SecTitle from "../../common/SecTitle";
import data from "../../../data/profile/interview/data";
import SecInterview from "./SecInterview";
import SecButton from "./SecButton";

export type InterviewType = {
    title:string;
    date:string;
    link:string;
}

const InterviewList:React.FC = ()=> {
    const interviews = data.interview;

    // ページネーション
    const [pageIdx,setPageIdx] = useState<number>(0);


    const beforePage = ()=>{
        setPageIdx(pageIdx-1)
    }

    const nextPage = ()=>{
        setPageIdx(pageIdx+1)
    }

    return(
        <div className="pt-4 mb-20 md:mb-24">
            <SecTitle text={"Interview"} />
            <div className="font-light">
                <p className="mb-3">
                インタービューされた記事やプロダクトが紹介された記事です。<br />
                </p>
            </div>
            <br />

            <p className="text-gray-300 mb-3">合計記事数 : {interviews.length}</p>
            {
                interviews
                .map((
                    interview:InterviewType,
                    idx:number
                )=>{
                    if (pageIdx * 9 <= idx && idx < (pageIdx + 1) * 9){
                        return <SecInterview interview={interview} key={idx} />
                    }else{
                        return null;
                    }
                })
            }

            {
                0 < pageIdx
                ?
                <SecButton func={beforePage} text={"before"} />
                :
                <span className="text-gray-600">before</span>
            }
            <span className="text-gray-200 text-xl"> {pageIdx + 1} </span>
            {
                (pageIdx + 1) * 5 < interviews.length
                ?
                <SecButton func={nextPage} text={"next"} />
                :
                <span className="text-gray-600">next</span>
            }

        </div>
    )
}

export default InterviewList;