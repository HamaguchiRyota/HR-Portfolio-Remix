import { Outlet } from "@remix-run/react";

export default function ProjectLayout() {
  return (
    <div className="selection:bg-indigo-300 selection:text-indigo-700">
      <div className="p-4">
        <div className="p-5">
          <div className="w-full max-w-4xl justify-center mx-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
