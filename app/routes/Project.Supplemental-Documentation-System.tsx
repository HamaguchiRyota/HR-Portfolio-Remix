import type { MetaFunction } from "@remix-run/node";
import TLFMSThum from "~/img/TL.png";
import Calender from "~/components/svg/calender";

export const meta: MetaFunction = () => {
  return [
    { title: "Project - Supplemental-Documentation-System" },
    {
      name: "description",
      content: "Supplemental-Documentation-System",
    },
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
              src={TLFMSThum}
              alt="Project Thumbnail"
              onContextMenu={(e) => e.preventDefault()}
              onSelect={(e) => e.preventDefault()}
              onMouseDown={(e) => e.preventDefault()}
            />
            <article className="mt-7 mb-7 pb-2 border-b-2 border-slate-500/15">
              <h1 className="font-bold sm:text-4xl sd:text-3xl text-2xl">
                聴覚障碍者に向けたノートテイクシステム開発プロジェクト
              </h1>

              <div className="flex flex-row mt-1 gap-1 leading-7 text-slate-400/50">
                <Calender />
                <p className="">2023年8月 ~ 2023年12月</p>
              </div>
            </article>

            <article className="">
              <div className="border-l-4 border-indigo-500">
                <h3 className="font-bold text-2xl mt-5 mb-5 ps-2">概要</h3>
              </div>
              <p className="leading-8">
                障害者差別解消法によって、大学には障碍者への合理的配慮義務が課せられている。東京大学バリアフリー支援室1)によると、聴覚障碍のある学生への支援としてパソコンテイク、ノートテイク、ノート作成、字幕挿入の4つが挙げられている。しかし、これらは支援を行う情報保障者の不足や能力差が課題となっている。実際に、規模の小さい大学では人員的余裕がなくノートテイクの補助ができなかった事例や、希望された理工系の情報保障者を割り当てられなかった事例などがJASSOに報告されている2)3)。
                本プロジェクトでは、聴覚障碍者に向けて情報保障者が行う支援内容をシステムで代替するため、講義動画から音声、スライドを抽出し、ノートテイクされた資料を作成するシステムを開発し、課題の解決を図った。
              </p>
            </article>
            {/*  
            <article className="">
              <div className="border-l-4 border-indigo-500">
                <h3 className="font-bold text-2xl mt-5 mb-5 ps-2">
                  想定クライアント
                </h3>
              </div>
              <p className="leading-8">xx</p>
            </article>
            */}
            <article className="">
              <div className="border-l-4 border-indigo-500">
                <h3 className="font-bold text-2xl mt-5 mb-5 ps-2">目的</h3>
              </div>
              <p className="leading-8">
                講義資料から聴覚障碍者への合理的配慮のある補足資料を作る。
              </p>
            </article>
            {/*   
            <article className="">
              <div className="border-l-4 border-indigo-500">
                <h3 className="font-bold text-2xl mt-5 mb-5 ps-2">目標</h3>
              </div>
              <p className="leading-8">xx</p>
            </article>
            */}
            <article className="">
              <div className="border-l-4 border-indigo-500">
                <h3 className="font-bold text-2xl mt-5 mb-5 ps-2">参考文献</h3>
              </div>
              <p className="leading-8">
                1)　東京大学バリアフリー支援室．”支援の例”．https://ds.adm.u-tokyo.ac.jp/receive-support/student02.html，2023-11-25参照．
                2)　独立行政法人日本学生支援機構．”事例No.194(難聴)授業時のノートテイク補助の申し出について
                |
                JASSO”．https://www.jasso.go.jp/statistics/gakusei_shogai_kaiketsu/case_aud/194.html，2023-11-25参照．
                3)　独立行政法人日本学生支援機構．”事例No.18(聾)情報保障者に専攻（理工系）を理解できる学生を申し出
                |
                JASSO”．https://www.jasso.go.jp/statistics/gakusei_shogai_kaiketsu/case_aud/18.html，2023-11-25参照．
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
