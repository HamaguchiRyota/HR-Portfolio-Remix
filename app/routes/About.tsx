import type { MetaFunction } from "@remix-run/node";
import NotFound11 from "~/img/ntf1-1.png";

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

            <article className="pt-5">
              <div className="flex justify-center gap-10">
                <img
                  className="rounded-2xl w-1/4 skew-y-6"
                  src={NotFound11}
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
          </div>
        </div>
      </div>
    </div>
  );
}
