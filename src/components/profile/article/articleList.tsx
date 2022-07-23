import { useEffect, useState } from "react";
import SecTitle from "../../common/SecTitle";
import data from "../../../data/profile/article/data";
import SecArticle from "./SecArticle";
import SecButton from "./SecButton";

export type ArticleType = {
    title:string;
    date:string;
    link:string;
}

const ArticleList = ()=> {
    const articles = data.article;

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
            <SecTitle text={"Article"} />
            <p className="text-gray-300 mb-3">合計記事数 : {articles.length}</p>
            {
                articles
                .map((
                    article:ArticleType,
                    idx:number
                )=>{
                    if (pageIdx * 5 <= idx && idx < (pageIdx + 1) * 5){
                        return <SecArticle article={article} key={idx} />
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
            <span className="text-gray-200 text-xl"> {pageIdx} </span>
            {
                (pageIdx + 1) * 5 < articles.length
                ?
                <SecButton func={nextPage} text={"next"} />
                :
                <span className="text-gray-600">next</span>
            }

        </div>
    )
}

export default ArticleList;