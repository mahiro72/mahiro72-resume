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
                    普段はメガベンチャーにて、Golangを用いたマイクロサービスの基盤の設計•開発•運用をしています。
                </p>
                <p className="mb-3">
                    副業では、AIスタートアップ複数社にて技術顧問を担当しており、サービスの設計からコードのレビュー、PMや組織設計など幅広く携わっています。他にもSREとしてSaaSのインフラ基盤構築などの経験もあり、上流から下流まで幅広い領域で実務経験を積んでいます。
                </p>
                <br/>
                <p className="mb-3">
                    現在は特に生成AI領域での技術支援に強い関心があり、シードからシリーズA-B程度のスタートアップでの参画機会を探しています。該当する企業様がございましたら、お気軽にご連絡ください。
                </p>
                <br/>
                <p className="mb-3">
                    将来の野望として、技術的な側面からスタートアップエコシステムの発展に貢献することを目指しています。日本発のグローバルで戦えるスタートアップを生み出し、優秀で情熱ある人材が活躍できる環境づくりに寄与していきたいと考えています。
                </p>
            </div>
        </div>
    )
}

export default Summary;

