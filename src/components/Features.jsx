import { Zap, Link as LinkIcon, ShieldCheck, Timer, Globe2, QrCode } from "lucide-react"

function Features() {
  const items = [
    {
      icon: <Zap className="text-blue-400" size={22} />,
      title: "Lightning fast uploads",
      desc: "Optimized edge storage so your files upload and download in seconds.",
    },
    {
      icon: <LinkIcon className="text-blue-400" size={22} />,
      title: "Instant share links",
      desc: "Every file gets a short, secure link you can share anywhere.",
    },
    {
      icon: <ShieldCheck className="text-blue-400" size={22} />,
      title: "Secure by default",
      desc: "Files are private until you share the link. Optional password protection.",
    },
    {
      icon: <Timer className="text-blue-400" size={22} />,
      title: "Expiring links",
      desc: "Choose a time limit for access — from 10 minutes to 30 days.",
    },
    {
      icon: <Globe2 className="text-blue-400" size={22} />,
      title: "Global CDN",
      desc: "Files are cached around the world for blazing fast downloads.",
    },
    {
      icon: <QrCode className="text-blue-400" size={22} />,
      title: "QR codes",
      desc: "Auto-generate QR codes for easy sharing from any device.",
    },
  ]

  return (
    <section id="features" className="relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Everything you need to share files</h2>
          <p className="mt-3 text-blue-200/80">Simple, secure, and built for speed.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((f, i) => (
            <div key={i} className="rounded-2xl bg-slate-900/50 border border-white/10 p-6 hover:border-blue-500/30 transition">
              <div className="h-10 w-10 rounded-xl bg-blue-500/15 grid place-items-center mb-4">
                {f.icon}
              </div>
              <h3 className="text-white font-semibold">{f.title}</h3>
              <p className="mt-2 text-blue-200/80 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
