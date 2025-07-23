import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

const refreshAccessToken = async (token: any) => {
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
        refresh_token: token.refreshToken!,
      }),
    });

    if (!res.ok) {
      throw new Error("Failed to refresh token");
    }

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
    async jwt({ token, account, user }) {
      // Primer inicio de sesión
      if (account && user) {
        return {
          accessToken: account.access_token,
          accessTokenExpires: Date.now() + Number(account.expires_in ?? 3600) * 1000,
          refreshToken: account.refresh_token,
          user,
        };
      }

      // Token aún válido
      if (Date.now() < (token.accessTokenExpires as number)) {
        return token;
      }

      // Acceso expirado, refrescarlo
      return await refreshAccessToken(token);
    },

    async session({ session, token }) {
      session.user = token.user ?? {};
      session.accessToken = token.accessToken;
      session.error = token.error;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
