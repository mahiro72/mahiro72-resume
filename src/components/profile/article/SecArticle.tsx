import React from "react";
import { ArticleType } from "./articleList";
import img_memo from "../../../img/common/memo.png"

type Prop = {
    article:ArticleType;
}

const SecArticle:React.FC<Prop> = ({article}) => {
    return (
        <div className="mb-4">
            <p className="text-base font-light">{article.date}</p>
            <div className="flex">
                <img src={img_memo} alt="" className="h-5 w-5 mt-1 mr-2" />
                <a 
                className="text-gray-300 truncate text-lg hover:text-blue-400"
                href={article.link}
                target="_blank"
            >
                {article.title}
            </a>
            </div>

        </div>
    )
}

export default SecArticle;