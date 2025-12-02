export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-6">
        <div className="w-96 h-96 overflow-hidden shadow-2xl">
          <img
            src="/artwork_atonal.u.png"
            alt="Atonal artwork"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col items-center gap-4">
          <p className="text-black text-center">
            <a href="https://www.ninaprotocol.com/releases/gabriel-hollis---genesis" className="underline">Nina Protocol</a>
            {" | "}
            <a href="https://tactileinput.bandcamp.com/track/genesis" className="underline">Bandcamp</a>
            {" | "}
            <a href="https://soundcloud.com/tactileinput/genesis" className="underline">SoundCloud</a>
          </p>
          <a href="mailto:gabriel@tactileinput.net" className="text-xs text-black">gabriel@tactileinput.net</a>
        </div>
      </div>
    </div>
  );
}

