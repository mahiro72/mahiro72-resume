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
                    現在は、Golangを使用して基盤APIの開発や大規模なリプレイスプロジェクトに取り組んでいます。<br /><br />

                    副業ではIT系のスタートアップを共同創業し、0から1のフェーズにおける開発や経営に関する業務に携わっています。<br />
                    他にも業務委託を通じて、1から10の成長フェーズにあるスタートアップのバックエンド開発もしています。<br /><br />
                </p>
                <p className="mb-3">
                    最近の関心事は、コンピュータサイエンスやスタートアップ、<br />
                    アーキテクチャ（コードレベルからアプリケーションレベルまで）あたりです。<br /><br />
                    
                    また、エンジニアリングを通じて問題解決に取り組むことが好きで、<br />
                    特に言語化されていない潜在的な問題へのアプローチや、<br />  
                    リプレースを通じて既存の課題を解決することに興味を持っています。<br /><br />

                    長々と書きましたが、とりあえずエンジニアリングに関わることであれば、何でも好きです。(適当)<br />
                </p>
            </div>
        </div>
    )
}

export default Summary;
