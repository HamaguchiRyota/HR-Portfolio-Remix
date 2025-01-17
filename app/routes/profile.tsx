import type { MetaFunction } from "@remix-run/node";
import XformerlyTwitter from "~/components/svg/Twitter";
import Github from "~/components/svg/github";
import LinkedIn from "~/components/svg/linkedin";

import Card from "~/components/ui/card";

export const meta: MetaFunction = () => {
  return [
    { title: "Profile" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="p-4">
      <div className="p-5">
        <div className="flex justify-center md:size-auto">
          <img
            className="rounded-full size-1/3"
            src="https://avatars.githubusercontent.com/u/52881627"
            alt="icon"
          />
        </div>
      </div>

      <div className="p-5">
        <div className="flex justify-center md:size-auto">
          <div className="grid grid-cols-4 gap-4 fill-blue-500">
            <XformerlyTwitter width="100" height="100" fill="#fff" />
            <Github width="100" height="100" fill="#fff" />
            <LinkedIn width="100" height="100" fill="#fff" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 fill-blue-500">
        <Card
          title="高齢者に向けたフレイルチェックシステム開発プロジェクト"
          description="高齢者のフレイルチェックを支援するため、Djangoや音声認識を用いたWebシステムを開発。"
          image="https://i.ytimg.com/vi/Q4_Pv0xDGRM/hq720.jpg"
        />
      </div>
    </div>
  );
}
