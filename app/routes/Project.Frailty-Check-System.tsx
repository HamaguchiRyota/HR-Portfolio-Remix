import type { MetaFunction } from "@remix-run/node";
import thumbnail from "~/img/fcs.png";
import Clock from "~/components/svg/time";

export const meta: MetaFunction = () => {
  return [
    { title: "Project - Frailty-Check-System" },
    { name: "description", content: "Frailty-Check-System" },
  ];
};

export default function Index() {
  return (
    <div className="selection:bg-indigo-300 selection:text-indigo-700">
      <div className="p-4">
        <div className="p-5">
          <div className="w-full max-w-4xl justify-center mx-auto">
            <img
              className="rounded-2xl w-full"
              src={thumbnail}
              alt="Project Thumbnail"
              onContextMenu={(e) => e.preventDefault()}
              onSelect={(e) => e.preventDefault()}
              onMouseDown={(e) => e.preventDefault()}
            />
            <article className="mt-7 mb-7">
              <h1 className="font-bold text-4xl">
                高齢者に向けたフレイルチェックシステム開発プロジェクト
              </h1>

              <div className="flex flex-row mt-1 gap-1 leading-7 text-slate-400/50">
                <Clock />
                <p className="">2023年1月 ~ 2024年12月</p>
              </div>
            </article>

            <article className="">
              <div className="border-l-4 border-indigo-500">
                <h3 className="font-bold text-2xl mt-5 mb-5 ps-2">概要</h3>
              </div>
              <p className="leading-8">
                高齢期になり心身の機能や活力が衰え、虚弱になった状態を「フレイル」と呼ぶ。要介護予備群、または健康寿命延伸のカギとして注目されている。
                高齢者の特性を踏まえた保健事業ガイドラインによって、自治体には住民主体の運営によって市町村独自のフレイルチェック票等、元気度のチェックを通いの場等で実施してもらうよう努めることが明記されている。横須賀市では、フレイルチェック教室がボランティアによって年に数回程度開催されている。しかし、これらは講師を務めるボランティアの不足や能力差が課題となっている。
                本プロジェクトでは、ボランティアが行う教室管理業務、フレイルチェックを支援するため、Djangoや音声認識を用いたWebシステムを開発し、課題の解決を図った。
              </p>
            </article>

            <article className="">
              <div className="border-l-4 border-indigo-500">
                <h3 className="font-bold text-2xl mt-5 mb-5 ps-2">
                  想定クライアント
                </h3>
              </div>
              <p className="leading-8">
                神奈川県横須賀市 民生局健康部健康増進課
              </p>
            </article>

            <article className="">
              <div className="border-l-4 border-indigo-500">
                <h3 className="font-bold text-2xl mt-5 mb-5 ps-2">目的</h3>
              </div>
              <p className="leading-8">
                フレイルチェック教室におけるフレイルチェックの支援
              </p>
            </article>

            <article className="">
              <div className="border-l-4 border-indigo-500">
                <h3 className="font-bold text-2xl mt-5 mb-5 ps-2">目標</h3>
              </div>
              <p className="leading-8">
                業務フロー図からスタッフの業務を5項目削減
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
