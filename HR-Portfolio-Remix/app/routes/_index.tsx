import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Profile Page" },
    { name: "description", content: "This is the profile page." },
  ];
};

export default function Profile() {
  return (
    <div className="flex h-screen items-center justify-center">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
        Profile Page
      </h1>
    </div>
  );
}