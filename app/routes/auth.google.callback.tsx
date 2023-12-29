import { LoaderFunctionArgs } from "@remix-run/node";

import { authenticator } from "~/auth.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return authenticator.authenticate("google", request, {
    successRedirect: "/notes",
    failureRedirect: "/login",
  });
};
