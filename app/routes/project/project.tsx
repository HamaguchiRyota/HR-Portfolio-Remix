import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "Project - " }, { name: "description", content: "" }];
};

export default function Index() {
  return (
    <div className="selection:bg-indigo-300 selection:text-indigo-700">
      <div className="p-4">
        <div className="p-5"></div>
      </div>
    </div>
  );
}
