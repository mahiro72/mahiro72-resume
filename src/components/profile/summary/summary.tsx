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
                    現在はメガベンチャーで、Golangを用いた基盤API開発やマイクロサービスのGatewayの開発運用を行っています。副業では、Pythonを用いたLLMサービスのAPI開発や、SREとしてシステムの監視や自動化,運用といった業務にも取り組んでいます。<br /><br />

                    最近の関心事は、LLMを用いたサービスのアーキテクティングや、スタートアップ（特にシリーズAからシリーズB調達が見えてきた段階）です。現在は会社を積極的にリードするというより、学ぶフェーズにいると感じているので、シード段階よりもう少しあとの企業に関心があります。<br /><br />
                </p>
                <p className="mb-3">
                    将来的には、お金がある程度たまったら、毎日自宅でOSS開発に没頭することが夢です。他にも、日本のスタートアップのエコシステムの発展にも助力したいなと思ったりもしてます。<br /><br />
                </p>
            </div>
        </div>
    )
}

export default Summary;

