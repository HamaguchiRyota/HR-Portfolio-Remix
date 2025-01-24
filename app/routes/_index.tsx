import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import XformerlyTwitter from "~/components/svg/Twitter";
import Github from "~/components/svg/github";
import LinkedIn from "~/components/svg/linkedin";
import Card from "~/components/ui/card";
import FCSThum from "~/img/fcs.png";
import TLFMSThum from "~/img/TL.png";
import NotFound from "~/img/notfound.png";

export const meta: MetaFunction = () => {
  return [
    { title: "Hamaryo-Portfolio" },
    { name: "description", content: "Portfolio of Hamaryo built with Remix." },
  ];
};

export default function Index() {
  return (
    <div className="selection:bg-indigo-300 selection:text-indigo-700 md:size-auto sm:size-auto lg:size-auto xl:size-auto">
      <div className="p-4">
        <div className="p-5">
          <div className="flex justify-center w-full max-w-4xl mx-auto">
            <img
              className="rounded-full size-1/3"
              src="https://avatars.githubusercontent.com/u/52881627"
              alt="icon"
              onContextMenu={(e) => e.preventDefault()}
              onSelect={(e) => e.preventDefault()}
              onMouseDown={(e) => e.preventDefault()}
            />
          </div>
        </div>

        <div className="p-5">
          <h1 className="font-sans text-2xl font-bold subpixel-antialiased text-center">
            Hamaryo
          </h1>
        </div>

        <div className="p-5">
          <div className="flex justify-center">
            <div className="grid grid-cols-3 gap-3 fill-blue-500">
              <a href="https://x.com/_hamaryo" target="_blank">
                <XformerlyTwitter
                  width="35"
                  height="35"
                  fill="#fff"
                  className="hover:fill-indigo-500 duration-300"
                />
              </a>
              <a href="https://github.com/HamaguchiRyota" target="_blank">
                <Github
                  width="35"
                  height="35"
                  fill="#fff"
                  className="hover:fill-indigo-500 duration-300"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/hamaguchi-ryota/"
                target="_blank"
              >
                <LinkedIn
                  width="35"
                  height="35"
                  fill="#fff"
                  className="hover:fill-indigo-500 duration-300"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="w-full max-w-6xl mx-auto">
          <div className="m-5 p-5 bg-[#374250] rounded-2xl shadow-inner">
            <div className="pb-5 flex items-center justify-between">
              <h1 className="font-mono font-bold text-2xl subpixel-antialiased justify-content-start">
                プロジェクト一覧
              </h1>
              <p className="font-mono font-bold text-xl subpixel-antialiased justify-content-end underline decoration-indigo-500">
                <Link to="/Project/">{">"}</Link>
              </p>
            </div>

            <div className="flex justify-center md:size-auto">
              <div className="grid sm:grid-cols-2 gap-4 fill-blue-500">
                <Link to="/Project/Frailty-Check-System/">
                  <Card
                    title="高齢者に向けたフレイルチェックシステム開発プロジェクト"
                    description="高齢者のフレイルチェックを支援するため、Djangoや音声認識を用いたWebシステムを開発。"
                    image={FCSThum}
                    date=""
                  />
                </Link>
                <Link to="/Project/Supplemental-Documentation-System/">
                  <Card
                    title="聴覚障碍者に向けたノートテイクシステム開発プロジェクト"
                    description="聴覚障碍者の支援内容をシステムで代替するため、講義動画から音声、スライドを抽出し、ノートテイク資料を作成するシステムを開発。"
                    image={TLFMSThum}
                    date=""
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="m-5 p-5 bg-[#374250] rounded-2xl shadow-inner">
            <div className="pb-5 flex items-center justify-between">
              <h1 className="font-mono font-bold text-2xl subpixel-antialiased justify-content-start">
                記事一覧
              </h1>
              <p className="font-mono font-bold text-xl subpixel-antialiased justify-content-end underline decoration-indigo-500">
                <Link to="/Article/">{">"}</Link>
              </p>
            </div>

            <div className="flex justify-center md:size-auto">
              <div className="grid sm:grid-cols-2 gap-4 fill-blue-500">
                <Link to="/Article/001/">
                  <Card
                    title="ポートフォリオサイトを作成しました！🎉"
                    description=""
                    image={NotFound}
                    date="2025年1月21日"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
