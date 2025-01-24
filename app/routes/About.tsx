import type { MetaFunction } from "@remix-run/node";

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
            <article className="mt-7 mb-7 pb-2 border-b-2 border-slate-500/15">
              <h1 className="font-bold sm:text-4xl sd:text-3xl text-2xl pb-2">
                このサイトについて
              </h1>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
