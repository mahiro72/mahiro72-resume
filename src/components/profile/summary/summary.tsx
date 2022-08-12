import React from "react";
import SecTitle from "../../common/SecTitle";

const Summary:React.FC = () => {
    return (
        <div className="mb-4 md:mb-8">
            <SecTitle text={"Summary"} />
            <div className="font-light ml-8">
                <p className="mb-3">
                    こんにちは, mahiroです
                </p>
                <p className="mb-3">
                    趣味でweb開発や競プロをやってます <br />
                    最近はCS(コンピュータサイエンス)を学んでいます
                </p>
                <p className="mb-3">
                    技術を使って問題解決に取り組むことが好きです.
                </p>
                <p className="mb-3">
                    就職活動は終了しましたが, <br />
                    エンジニアとしてのインターンやアルバイトにとても興味があります！ <br />
                    ご連絡お待ちしております🙇
                </p>
            </div>
        </div>
    )
}

export default Summary;
