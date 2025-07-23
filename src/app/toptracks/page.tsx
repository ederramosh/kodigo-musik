'use client'

import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";

type Track = {
  id: string;
  name: string;
  artists: { name: string }[];
  album: {
    images: { url: string }[];
  };
};

export default function TopTracksPage() {
  const { data: session } = useSession();
  const [tracks, setTracks] = useState<Track[]>([]);

  useEffect(() => {
    const fetchTopTracks = async () => {
      const res = await fetch("https://api.spotify.com/v1/me/top/tracks?limit=5", {
        headers: {
          Authorization: `Bearer ${session?.accessToken}`,
        },
      });

      const data = await res.json();
      setTracks(data.items);
    };

    if (session?.accessToken) fetchTopTracks();
  }, [session?.accessToken]);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Top Tracks</h1>
      <ul className="space-y-4">
        {tracks.map((track) => (
          <li key={track.id} className="flex items-center space-x-4">
            <Image
              src={track.album.images[0]?.url}
              alt={track.name}
              className="w-16 h-16 rounded"
              width={100}
              height={100}
            />
            <div>
              <p className="font-semibold">{track.name}</p>
              <p className="text-sm text-gray-500">
                {track.artists.map((a) => a.name).join(", ")}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
