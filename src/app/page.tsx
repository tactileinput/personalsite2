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
              src="/growing/growing_in_between.jpg"
              alt="Growing In Between"
              className="w-full h-full object-cover"
            />
          </div>
          <a href="/growing/growing-in-between.png" className="text-black text-center underline">
            Growing In Between
          </a>
        </div>

        {/* Genesis - Right on desktop, Bottom on mobile */}
        <div className="flex flex-col items-center gap-6">
          <div className="w-96 h-96 overflow-hidden shadow-2xl">
            <img
              src="/genesis/artwork_atonal.u.png"
              alt="Genesis artwork"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-black text-center">
            <a href="https://linktr.ee/tactileinput" className="underline">Genesis</a>
          </p>
        </div>

      </div>
    </div>
  );
}

