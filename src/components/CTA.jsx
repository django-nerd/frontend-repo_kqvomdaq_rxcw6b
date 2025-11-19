import { UploadCloud } from "lucide-react"

function CTA() {
  return (
    <section id="cta" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative">
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-500/20 via-cyan-400/20 to-blue-500/20 blur-xl" />
          <div className="relative rounded-3xl bg-slate-900/60 border border-white/10 p-8 sm:p-10 text-center">
            <div className="mx-auto h-14 w-14 rounded-2xl bg-blue-500 grid place-items-center text-white shadow-lg shadow-blue-500/30">
              <UploadCloud size={26} />
            </div>
            <h2 className="mt-6 text-3xl sm:text-4xl font-bold text-white">Ready to share your first file?</h2>
            <p className="mt-2 text-blue-200/80">No account required. Your first 10GB are on us.</p>
            <a href="#" className="mt-6 inline-block rounded-xl bg-white text-slate-900 px-6 py-3 font-medium hover:bg-blue-50 transition">
              Upload a file
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
