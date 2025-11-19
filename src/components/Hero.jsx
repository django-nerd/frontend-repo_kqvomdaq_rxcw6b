import { ArrowRight, UploadCloud, Link as LinkIcon, Shield } from "lucide-react"

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-30 pointer-events-none">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-blue-500/30 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-cyan-400/30 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 sm:pt-28 sm:pb-20">
        <header className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 grid place-items-center text-white shadow-lg shadow-blue-500/30">
              <UploadCloud size={22} />
            </div>
            <span className="text-white/90 font-semibold tracking-tight text-lg">SkyShare</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-blue-100/80">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#how" className="hover:text-white transition">How it works</a>
            <a href="#cta" className="hover:text-white transition">Get started</a>
          </nav>
        </header>

        <div className="mt-12 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Host and share any files instantly
            </h1>
            <p className="mt-5 text-blue-100/90 text-lg leading-relaxed">
              Drag-and-drop to upload. Get a short link you can share anywhere. No setup, no friction — just fast, reliable file hosting.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#cta"
                className="inline-flex items-center justify-center rounded-xl bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 font-medium shadow-lg shadow-blue-500/25 transition"
              >
                Start uploading
                <ArrowRight className="ml-2" size={18} />
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/15 text-white px-5 py-3 font-medium border border-white/15 backdrop-blur transition"
              >
                Learn more
              </a>
            </div>

            <div className="mt-6 flex items-center gap-4 text-sm text-blue-200/80">
              <div className="flex items-center gap-2"><Shield size={16} /> Private by default</div>
              <div className="flex items-center gap-2"><LinkIcon size={16} /> Shareable links</div>
            </div>
          </div>

          <div>
            <div className="relative">
              <div className="absolute -inset-1 rounded-[22px] bg-gradient-to-br from-blue-500/30 to-cyan-400/30 blur-xl" />
              <div className="relative rounded-2xl bg-slate-900/60 border border-white/10 p-4 sm:p-6 shadow-2xl">
                <div className="rounded-xl border border-white/10 bg-slate-800/60 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-yellow-400" />
                    <div className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                  <div className="text-center py-10">
                    <UploadCloud className="mx-auto text-blue-400" size={40} />
                    <p className="mt-3 text-blue-100 font-medium">Drop files here to upload</p>
                    <p className="mt-1 text-blue-200/70 text-sm">PNG, JPG, PDF, ZIP and more</p>
                    <button className="mt-5 inline-flex items-center rounded-lg bg-white text-slate-900 px-4 py-2 font-medium hover:bg-blue-50 transition">
                      Browse files
                    </button>
                  </div>
                  <div className="mt-6 grid grid-cols-3 gap-3 text-xs text-blue-100/80">
                    <div className="rounded-lg bg-slate-700/40 border border-white/10 p-3 text-center">10GB free</div>
                    <div className="rounded-lg bg-slate-700/40 border border-white/10 p-3 text-center">No signup</div>
                    <div className="rounded-lg bg-slate-700/40 border border-white/10 p-3 text-center">Share instantly</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
