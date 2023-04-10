import React from "react";
import SecTitle from "../../common/SecTitle";

const Summary:React.FC = () => {
    return (
        <div className="mb-4 md:mb-8">
            <SecTitle text={"Summary"} />
            <div className="font-light ml-8">
                <p className="mb-3">
                    こんにちは、mahiro です。<br />
                </p>
                <p className="mb-3">
                    趣味でweb開発やハッカソンをしており、 <br />
                    最近はSREっぽいこともしてます。
                </p>
                <p className="mb-3">
                    エンジニアリングを通して、問題解決に取り組むことが好きです。 <br />
                    その中でも最近は、リプレースを通して既存の課題を解決することに関心があります。 <br />
                </p>
            </div>
        </div>
    )
}

export default Summary;
