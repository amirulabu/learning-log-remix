// app/services/auth.server.ts
import { Authenticator } from "remix-auth";
import { GoogleStrategy } from "remix-auth-google";
import invariant from "tiny-invariant";

import { User, getOrCreateUser } from "~/models/user.server";
import { sessionStorage } from "~/session.server";

// Create an instance of the authenticator, pass a generic with what
// strategies will return and will store in the session
export const authenticator = new Authenticator<User>(sessionStorage);

invariant(process.env.GOOGLE_CLIENT_ID, "GOOGLE_CLIENT_ID must be set");
invariant(process.env.GOOGLE_CLIENT_SECRET, "GOOGLE_CLIENT_SECRET must be set");

const googleCallbackPath = "/auth/google/callback";

const googleStrategy = new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL:
      (process.env.BASE_URL ?? "http://localhost:3000") + googleCallbackPath,
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async ({ accessToken, refreshToken, extraParams, profile }) => {
    return getOrCreateUser(profile.emails![0].value, "google");
  },
);

authenticator.use(googleStrategy);
