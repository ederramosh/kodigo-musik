
async function fetchWebApi(endpoint: string, method: string, accessToken: string, body?: Record<string, unknown>) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    method,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) {
    const errorData = await res.json();
    console.error("Spotify API error:", errorData);
    throw new Error(`Spotify API error: ${res.status}`);
  }

  return res.json();
}

export async function getTopTracks(accessToken: string, limit = 5) {
  const data = await fetchWebApi(`v1/me/top/tracks?time_range=long_term&limit=${limit}`, 'GET', accessToken);
  return data.items;
}
