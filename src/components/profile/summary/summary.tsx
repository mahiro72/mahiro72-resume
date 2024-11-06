import React from "react";
import SecTitle from "../../common/SecTitle";

const Summary:React.FC = () => {
    return (
        <div className="mb-4 md:mb-8">
            <SecTitle text={"Summary"} />
            <div className="font-light ml-8">
                <p className="mb-3">
                    こんにちは、mahiroです。
                </p>
                <p className="mb-3">
                    普段はメガベンチャーにて、Golangを用いたマイクロサービスの基盤開発をしています。具体的には基盤APIやAPI Gatewayの開発•運用を担当し、大規模サービスの技術基盤を支えています。
                </p>
                <p className="mb-3">
                    副業では、生成AIを用いたtoCサービスの開発や、AIスタートアップでの技術設計支援、SaaSのインフラ基盤構築など、様々な技術領域での実務経験を積んでいます。
                </p>
                <p className="mb-3">
                    現在は特にLLMなど生成AI領域での技術支援に強い関心があり、シリーズA-B程度のスタートアップでの参画機会を探しています。該当する企業様がございましたら、お気軽にご連絡ください。
                </p>
                <p className="mb-3">
                    将来的には、技術的な側面からスタートアップエコシステムの発展に貢献することを目指しています。日本発のグローバルで戦えるスタートアップを生み出し、優秀で情熱ある人材が活躍できる環境づくりに寄与していきたいと考えています。
                </p>
            </div>
        </div>
    )
}

export default Summary;

