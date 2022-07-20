import SecTitle from "../../common/SecTitle";

const Summary = () => {
    return (
        <div className="mb-4 md:mb-8">
            <SecTitle text={"Summary"} />
            <div className="font-light">
                <p className="mb-3">
                    こんにちは, mahiroです
                </p>
                <p className="mb-3">
                    趣味でweb開発や競プロをやってます <br />
                    最近はCS(コンピュータサイエンス)を学んでいます
                </p>
                <p className="mb-3">
                    技術と, 技術を使ってユーザーに良い体験を届けることが好きです
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
