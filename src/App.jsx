import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800">
      <Hero />
      <Features />
      <HowItWorks />
      <CTA />

      <footer className="py-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-blue-200/80">
          <p>© {new Date().getFullYear()} SkyShare. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#how" className="hover:text-white transition">How it works</a>
            <a href="#cta" className="hover:text-white transition">Get started</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
