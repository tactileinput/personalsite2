export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4 sm:px-8 py-8">
      {/* Email centered at top */}
      <a href="mailto:gabriel@tactileinput.net" className="text-xs text-black mb-12">
        gabriel@tactileinput.net
      </a>

      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-12 sm:gap-16">
        
        {/* Growing In Between - Left on desktop, Top on mobile */}
        <div className="flex flex-col items-center gap-6">
          <div className="w-96 h-96 overflow-hidden shadow-2xl">
            <img
              src="/growing_in_between.jpg"
              alt="Growing In Between"
              className="w-full h-full object-cover"
            />
          </div>
          <a href="/growing-in-between.png" className="text-black text-center underline">
            Growing In Between
          </a>
        </div>

        {/* Genesis - Right on desktop, Bottom on mobile */}
        <div className="flex flex-col items-center gap-6">
          <div className="w-96 h-96 overflow-hidden shadow-2xl">
            <img
              src="/artwork_atonal.u.png"
              alt="Atonal artwork"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-black text-center">
            <a href="https://www.ninaprotocol.com/releases/gabriel-hollis-genesis" className="underline">Nina</a>
            {" | "}
            <a href="https://soundcloud.com/tactileinput/genesis" className="underline">SoundCloud</a>
            {" | "}
            <a href="https://tactileinput.bandcamp.com/track/genesis" className="underline">Bandcamp</a>
            {" | "}
            <a href="https://open.spotify.com/track/58Byvfbg24yIy4ShDRMI0S?si=45c76068ddea4f4d" className="underline">Spotify</a>
            {" | "}
            <a href="https://music.apple.com/us/song/genesis/1858127997" className="underline">Apple</a>
            {" | "}
            <a href="https://music.youtube.com/watch?v=51tkSmwDVr4&si=NawaNk7BhSeW59Fb" className="underline">YouTube</a>
          </p>
        </div>

      </div>
    </div>
  );
}

