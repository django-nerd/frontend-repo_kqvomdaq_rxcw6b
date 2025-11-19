import { UploadCloud, Link as LinkIcon, Share2 } from "lucide-react"

function HowItWorks() {
  const steps = [
    {
      icon: <UploadCloud size={20} className="text-blue-400" />,
      title: "Upload",
      desc: "Drag & drop your files or browse to select them.",
    },
    {
      icon: <LinkIcon size={20} className="text-blue-400" />,
      title: "Get Link",
      desc: "We generate a short, secure link instantly.",
    },
    {
      icon: <Share2 size={20} className="text-blue-400" />,
      title: "Share",
      desc: "Send the link anywhere — email, chat, or QR.",
    },
  ]

  return (
    <section id="how" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="rounded-3xl bg-slate-900/50 border border-white/10 p-8 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">How it works</h2>
          <div className="mt-8 grid sm:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="text-center">
                <div className="h-12 w-12 rounded-2xl bg-blue-500/15 grid place-items-center mx-auto">
                  {s.icon}
                </div>
                <h3 className="mt-4 text-white font-semibold">{s.title}</h3>
                <p className="mt-1 text-blue-200/80 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
