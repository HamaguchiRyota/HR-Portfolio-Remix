import type { MetaFunction } from "@remix-run/node";
import thumbnail from "~/img/fcs.png";
import Calender from "~/components/svg/calender";
import articleData from "~/Article/Project/fcs.json";

export const meta: MetaFunction = () => {
  return [
    { title: `プロジェクト - ${articleData.title}` },
    { name: "description", content: `${articleData.title}` },
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
            <article className="mt-7 mb-7 pb-2 border-b-2 border-slate-500/15">
              <h1 className="font-bold sm:text-4xl sd:text-3xl text-2xl">
                {articleData.title}
              </h1>

              <div className="flex flex-row mt-1 gap-1 leading-7 text-slate-400/50">
                <Calender />
                <p>{articleData.date}</p>
              </div>
            </article>

            {Object.entries(articleData.content).map(
              ([sectionTitle, sectionContent]) => (
                <article key={sectionTitle}>
                  <div className="border-l-4 border-indigo-500">
                    <h3 className="font-bold text-2xl mt-5 mb-5 ps-2">
                      {sectionTitle}
                    </h3>
                  </div>
                  <p className="leading-8">{sectionContent}</p>
                </article>
              )
            )}

            <article>
              <div className="border-l-4 border-indigo-500">
                <h3 className="font-bold text-2xl mt-5 mb-5 ps-2">
                  参考リンク
                </h3>
              </div>
              <ul className="leading-8">
                {Object.entries(articleData.links).map(([text, url]) => (
                  <li key={url}>
                    <a
                      className="underline decoration-indigo-500 font-bold"
                      href={url}
                      target="_blank"
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
