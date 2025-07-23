export const token = process.env.NEXT_PUBLIC_SPOTIFY_TOKEN;

async function fetchWebApi(endpoint: string, method: string, body?: Record<string, unknown>) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) {
    throw new Error(`Spotify API error: ${res.status}`);
  }

  return res.json();
}

export async function getTopTracks(limit = 5) {
  const data = await fetchWebApi(`v1/me/top/tracks?time_range=long_term&limit=${limit}`, 'GET');
  return data.items;
}
