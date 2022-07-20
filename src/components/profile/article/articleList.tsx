import SecTitle from "../../common/SecTitle";
import data from "../../../data/profile/article/data";
import SecArticle from "./SecArticle";

export type ArticleType = {
    title:string;
    date:string;
    link:string;
}

const ArticleList = ()=> {
    const articles = data.article;
    return(
        <div className="pt-4 mb-20 md:mb-24">
            <SecTitle text={"Article"} />
            {
                articles.map((
                    article:ArticleType,
                    idx:number
                )=>{
                    return <SecArticle article={article} key={idx} />
                })
            }
        </div>
    )
}

export default ArticleList;