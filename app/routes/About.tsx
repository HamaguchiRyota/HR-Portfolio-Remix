import type { MetaFunction } from "@remix-run/node";
import NotFound11 from "~/img/ntf1-1.png";
import Remix from "~/img/Remix.png";
import Tailwindcss from "~/img/Tailwindcss.png";

export const meta: MetaFunction = () => {
  return [
    { title: "このサイトについて" },
    { name: "description", content: "" },
  ];
};

export default function Article() {
  return (
    <div className="selection:bg-indigo-300 selection:text-indigo-700">
      <div className="p-4">
        <div className="p-5">
          <div className="w-full max-w-4xl justify-center mx-auto">
            <article className="mb-4 pb-2 border-b-2 border-slate-500/15">
              <h1 className="font-bold sm:text-4xl sd:text-3xl text-2xl pb-2">
                本サイトについて
              </h1>
            </article>

            <article className="pt-5 pb-8 border-b-2 border-slate-500/15">
              <div className="flex justify-center gap-10">
                <img
                  className="rounded-2xl w-1/4 skew-y-6"
                  src={Remix}
                  alt="Project Thumbnail"
                  onContextMenu={(e) => e.preventDefault()}
                  onSelect={(e) => e.preventDefault()}
                  onMouseDown={(e) => e.preventDefault()}
                />
                <img
                  className="rounded-2xl w-1/4 skew-y-6"
                  src={Tailwindcss}
                  alt="Project Thumbnail"
                  onContextMenu={(e) => e.preventDefault()}
                  onSelect={(e) => e.preventDefault()}
                  onMouseDown={(e) => e.preventDefault()}
                />
                <img
                  className="rounded-2xl w-1/4 skew-y-6"
                  src={NotFound11}
                  alt="Project Thumbnail"
                  onContextMenu={(e) => e.preventDefault()}
                  onSelect={(e) => e.preventDefault()}
                  onMouseDown={(e) => e.preventDefault()}
                />
              </div>
            </article>

            <article className="pt-5">
              <p className="text-lg leading-8">
                本サイトは、Remixを利用して構築されたサイトです。Remixは、ReactをベースにしたWebアプリケーションフレームワークで、サーバーサイドレンダリングやプリレンダリングをサポートしています。
                <br />
                また、本サイトは、Tailwind CSSを利用してデザインされています。
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
