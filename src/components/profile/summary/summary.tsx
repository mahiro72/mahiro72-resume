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
                    普段はメガベンチャーにて、バックエンドエンジニアとして働いています。業務内容としては、Golangを用いたマイクロサービスやAPI Gatewayの設計、開発、運用などしています。
                </p>
                <p className="mb-3">
                    副業では、AIスタートアップ複数社にて技術顧問を担当しており、サービスの設計からコードのレビュー、PMや組織設計など幅広く携わっています。他にもSREとしてSaaSのインフラ基盤構築などの経験もあり、上流から下流まで幅広い領域で実務経験を積んでいます。
                </p>
            </div>
        </div>
    )
}

export default Summary;

