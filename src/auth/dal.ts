//Data  Access Layer server-only  dado que userserver es para los server-action
import "server-only";

import { redirect } from "next/navigation";
import { UserSchema } from "../schemas";
import { cache } from "react";
import getToken from "./token";

export const verifySession = cache(async () => {
  const token = await getToken();
  if (!token) {
    redirect("/auth/login");
  }
  const url = `${process.env.API_URL}/auth/user`;

  const req = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const session = await req.json();

  const result = UserSchema.safeParse(session);

  if (!result.success) {
    redirect("/auth/login");
  }

  return {
    user: result.data,
    isAuth: true,
  };
});
