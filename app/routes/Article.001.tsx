import type { MetaFunction } from "@remix-run/node";
import NotFound from "~/img/notfound.png";
import Calender from "~/components/svg/calender";

export const meta: MetaFunction = () => {
  return [
    { title: "Article - ポートフォリオサイトを作成しました！🎉" },
    { name: "description", content: "記事" },
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
              src={NotFound}
              alt="Project Thumbnail"
              onContextMenu={(e) => e.preventDefault()}
              onSelect={(e) => e.preventDefault()}
              onMouseDown={(e) => e.preventDefault()}
            />
            <article className="mt-7 mb-7 pb-2 border-b-2 border-slate-500/15">
              <h1 className="font-bold text-4xl">
                ポートフォリオサイトを作成しました！🎉
              </h1>

              <div className="flex flex-row mt-1 gap-1 leading-7 text-slate-400/50">
                <Calender />
                <p className="">2025年1月21日</p>
              </div>
            </article>

            <article className="">
              <div className="border-l-4 border-indigo-500">
                <h3 className="font-bold text-2xl mt-5 mb-5 ps-2">経緯</h3>
              </div>
              <p className="leading-8">
                こんにちは！Hamaryoです！
                <br />
                今年で大学4年生になり、大学生生活も終盤に差し掛かりました。
                <br />
                情報学の学生なのに、ポートフォリオサイト持ってないじゃん！ということで、
                今までの学習内容や制作物をまとめるためにポートフォリオサイトを作成しました。
                <br />
                過去に
                <a
                  class="underline decoration-indigo-500 font-bold"
                  href="https://nextjs.org/"
                  target="_blank"
                >
                  Next.js
                </a>
                の
                <a
                  class="underline decoration-indigo-500 font-bold"
                  href="https://nextra.site/"
                  target="_blank"
                >
                  Nextra
                </a>
                というライブラリを使用した作りかけがありましたが、
                一部環境で勝手に組み文字になることがあり、めんどくさくなってやめました。
                <br />
                <a
                  className="underline decoration-indigo-500 font-bold"
                  href="https://hamaryo-portfolio.vercel.app/"
                  target="_blank"
                >
                  ➡過去に作成していたポートフォリオなるもの...
                </a>
              </p>
            </article>

            <article className="">
              <div className="border-l-4 border-indigo-500">
                <h3 className="font-bold text-2xl mt-5 mb-5 ps-2">使用技術</h3>
              </div>
              <p className="leading-8">
                今回のポートフォリオサイトはNext.jsではなく、
                <a
                  className="underline decoration-indigo-500 font-bold"
                  href="https://remix.run/"
                  target="_blank"
                >
                  Remix
                </a>
                というWebフレームワークを使用して作成しました。CSSフレームワークには
                <a
                  className="underline decoration-indigo-500 font-bold"
                  href="https://tailwindcss.com/"
                  target="_blank"
                >
                  TailwindCSS
                </a>
                と
                <a
                  className="underline decoration-indigo-500 font-bold"
                  href="https://daisyui.com/"
                  target="_blank"
                >
                  daisyUI
                </a>
                を使用しています。
                <br />
                Remixは「Outlet」という機能が特徴で、親ルート内に子ルートをレンダリングできるというコンポーネントがあります。
                <br />
                自分はそういうのは関係なく、去年のはじめ辺りからブイブイ言わせていることを知り、Remixを選択しました...
                <br />
              </p>
            </article>

            <article className="">
              <div className="border-l-4 border-indigo-500">
                <h3 className="font-bold text-2xl mt-5 mb-5 ps-2">
                  今後の展望
                </h3>
              </div>
              <p className="leading-8">
                まだOutlet機能を使えていないので、今後プロジェクトの詳細ページに導入しようと思います。
                <br />
                その他にも、ダークモードやプロジェクト,記事の一覧ページ、タグ機能などを追加していきたいです。
                <br />
                乞うご期待！
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
