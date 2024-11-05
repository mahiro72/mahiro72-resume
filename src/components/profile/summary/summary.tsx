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
                    メガベンチャーにて、Golangを用いたマイクロサービスの基盤開発をしているバックエンドエンジニアです。具体的には基盤APIやAPI Gatewayの開発•運用を担当し、大規模サービスの技術基盤を支えています。
                </p>
                <p className="mb-3">
                    副業では、生成AIを用いたtoCサービスの開発や、AIスタートアップでの技術設計支援、SaaSのインフラ基盤構築など、幅広い技術領域でスタートアップの成長を支援しています。
                </p>
                <p className="mb-3">
                    現在は特にLLMなど生成AI領域での技術支援に強い関心があり、シリーズA-B程度のスタートアップでお力添えできればと考えています。技術顧問やアドバイザーとしてお手伝いできる機会を探しているので、お気軽にご連絡ください。
                </p>
                <p className="mb-3">
                    将来的には、技術面からスタートアップエコシステムの発展に貢献したいと考えています。日本からグローバルで戦えるスタートアップを生み出し、より多くの優秀で熱意ある人々が活躍できる環境を作っていければと思います。
                </p>
            </div>
        </div>
    )
}

export default Summary;

