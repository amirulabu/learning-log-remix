import type { MetaFunction } from "@remix-run/node";
import { Form, Link } from "@remix-run/react";

import { useOptionalUser } from "~/utils";

export const meta: MetaFunction = () => [{ title: "Remix Notes" }];

export default function Index() {
  const user = useOptionalUser();
  return (
    <main className="relative min-h-screen bg-violet-100 sm:flex sm:items-center sm:justify-center">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Learning log
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              A place to log all you learnings
            </p>
            <div className="pt-6">
              {user ? (
                <Link
                  to="/notes"
                  className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-violet-700 shadow-sm hover:bg-violet-50 sm:px-8"
                >
                  View Notes for {user.email}
                </Link>
              ) : (
                <div className="flex items-center justify-center rounded-md bg-violet-500 px-4 py-3 font-medium text-white hover:bg-violet-600">
                  <Form action="/auth/google" method="post">
                    <button>Login with Google</button>
                  </Form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
