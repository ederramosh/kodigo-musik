import { ExtendedToken, Token } from "@/types/next-auth";
import NextAuth, { Account, User } from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

const refreshAccessToken = async (token: ExtendedToken): Promise<ExtendedToken> => {
  try {
    const basicAuth = Buffer.from(
      `${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}:${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET}`
    ).toString("base64");

    const res = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${basicAuth}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: token.refreshToken,
      }),
    });

    if (!res.ok) throw new Error("Failed to refresh token");

    const refreshed = await res.json();

    return {
      ...token,
      accessToken: refreshed.access_token,
      accessTokenExpires: Date.now() + refreshed.expires_in * 1000,
      refreshToken: refreshed.refresh_token ?? token.refreshToken,
    };
  } catch (error) {
    console.error("Error refreshing access token", error);
    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
};

const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,

  providers: [
    SpotifyProvider({
      clientId: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID!,
      clientSecret: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET!,
      authorization: {
        params: {
          scope: "user-read-email user-read-private user-top-read",
        },
      },
    }),
  ],
  callbacks: {
    async jwt({
      token,
      account,
      user,
    }: {
      token: ExtendedToken;
      account: Account | null;
      user?: User;
    }) {
      if (account && user) {
        return {
          ...token,
          accessToken: account.access_token!,
          accessTokenExpires: Date.now() + Number(account.expires_in ?? 3600) * 1000,
          refreshToken: account.refresh_token!,
          user,
        };
      }
    
      if (Date.now() < token.accessTokenExpires) {
        return token;
      }
    
      return await refreshAccessToken(token);
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      return session;
    },
  }
});

export { handler as GET, handler as POST };
