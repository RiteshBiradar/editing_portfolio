import Hero from './components/Hero'
import MentorSection from './components/MentorSection'
import ClientWork from './components/ClientWork'
import ReelsGrid from './components/ReelsGrid'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#040404] text-[#f5f5f5]">
      <Hero />
      <MentorSection />
      <ClientWork />
      <ReelsGrid />
      <Footer />
    </div>
  )
}

export default App
