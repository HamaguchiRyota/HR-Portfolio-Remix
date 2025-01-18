import type { MetaFunction } from "@remix-run/node";
import Card from "~/components/ui/card";

export const meta: MetaFunction = () => {
  return [
    { title: "Profile" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="selection:bg-indigo-300 selection:text-indigo-700">
      <div className="p-4">
        <div className="p-5">
          <div className="flex justify-center md:size-auto">
            <div className="grid grid-cols-2 gap-4 fill-blue-500">
              <Card
                title="高齢者に向けたフレイルチェックシステム開発プロジェクト"
                description="高齢者のフレイルチェックを支援するため、Djangoや音声認識を用いたWebシステムを開発。"
                image="https://i.ytimg.com/vi/Q4_Pv0xDGRM/hq720.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
