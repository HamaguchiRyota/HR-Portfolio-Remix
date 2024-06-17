import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <figure className="box-content h-62 w-62 bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img className="w-24 h-24 rounded-full mx-auto" src="https://avatars.githubusercontent.com/u/52881627" alt="" width="384" height="512"/>
        <div className="pt-6 text-center space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              テスト<br></br>
              テスト
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
              Ryota Hamaguchi
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              Student
            </div>
          </figcaption>
        </div>
      </figure>
    </div>

  );
}
