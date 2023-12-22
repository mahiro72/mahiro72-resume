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
                    メガベンチャーに入社した新卒1年目のバックエンドエンジニアです。<br />
                    Golangで基盤のAPIを開発したり、大規模なリプレイスなどに携わっています。 <br /><br />
    
                    また副業ではIT系の会社を共同創業しており会社自身も含めた0→1の開発や <br />
                    他にも業務委託で1→10フェーズのスタートアップで、バックエンドの開発なども行っております。<br /><br />

                    最近はコンピュータサイエンスやスタートアップ、<br />
                    アーキテクチャ(コードレベルからアプリケーションレベルの話まで)の話が好物です。<br /><br />
                </p>
                <p className="mb-3">
                    またエンジニアリングを通して、問題解決に取り組むことが好きです。 <br />
                    その中でも、課題すら言語化されてないような潜在的な問題へのアプローチを考えたり、
                    リプレースを通して既存の課題を解決することに関心があります。 <br /><br />
                    とりあえずエンジニアリングができたらなんでも好きです。(適当)
                </p>
            </div>
        </div>
    )
}

export default Summary;
