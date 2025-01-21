import { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async () => {
  return new Response("dh=7219df401f1545949b5e29fc2cd53216a5c979fc", {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
};

export default function Discord() {
  return null; // UI は不要なので null を返します
}
