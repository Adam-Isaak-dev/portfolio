import DocumentHeader from "../components/DocumentHeader";
import NavBar from "../components/NavBar";
import HeroSection from "../components/home/HeroSection";
import Showcase from "../components/home/Showcase";

export default function Home() {
  return (
    <div>
      <DocumentHeader title="Home" description="my personal portfolio website"/>
      <main>
        <div className="h-full h-screen bg-gray-900">
          <NavBar />
          <HeroSection />
          <Showcase />
        </div>
      </main>
      <footer>
      </footer>
    </div>
  )
}
