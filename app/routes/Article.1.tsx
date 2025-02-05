/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import type { MetaFunction } from "@remix-run/node";
import NotFound from "~/img/notfound.png";
import Calender from "~/components/svg/calender";
import articleData from "~/article/hamaryo/001.json";

export const meta: MetaFunction = () => {
  return [
    { title: `記事 - ${articleData.title}` },
    { name: "description", content: "記事" },
  ];
};

export default function Article() {
  return (
    <div>
      <img
        className="rounded-2xl w-full"
        src={NotFound}
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
          <h3 className="font-bold text-2xl mt-5 mb-5 ps-2">参考リンク</h3>
        </div>
        <ul className="leading-8">
          {Object.entries(articleData.links).map(([text, url]) => (
            <li key={url}>
              <a
                className="font-mono text-indigo-400 font-bold after:content-['_↗'] hover:underline decoration-indigo-500"
                href={url}
                target="_blank"
                rel="noreferrer"
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}
