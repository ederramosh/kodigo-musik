export const token = 'BQC4E1U0oAiVwPjYx-OyLS4erV8C_sywQ-GnddlZwAWrwLp6lzYkRRBqqdTT467-W9oM37I0LN7vXqbNE0Rxf17QexC2BdrIvew-Cp2xtTJ6WSfyosXNKrXnGoOdOLm7tfT1ylBlW9YShiT7PU689oSpiIdFazPuTfU4GVRRs-gKvV008tfY-11-0Vutjlmv_AkJ7Xow2YTVrGzRXFSm6S9CmM3Nk_5jqQ5HoPgWOZf4-0fflbut5OoSvff4rPwWtFHt7WNXcN27ie6Nrg-CEOV-oFjEK7jh1lxPrksV';

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
