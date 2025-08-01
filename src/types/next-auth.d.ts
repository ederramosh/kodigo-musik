import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    accessToken?: string;
    error?: string;
    user: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }

  interface User {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
    accessTokenExpires?: number;
    refreshToken?: string;
    user?: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
    error?: string;
  }
}

export interface Token {
  accessToken: string;
  accessTokenExpires: number;
  refreshToken: string;
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
  error?: string;
}

export type ExtendedToken = JWT & {
  accessToken: string;
  accessTokenExpires: number;
  refreshToken: string;
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
  error?: string;
};