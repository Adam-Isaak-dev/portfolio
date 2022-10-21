import DocumentHeader from "../components/DocumentHeader";
import NavBar from "../components/NavBar";
import HeroSection from "../components/home/HeroSection";
import Showcase from "../components/home/Showcase";
import Projects from "../components/home/Projects";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-gray-900">
      <DocumentHeader title="Home" description="my personal portfolio website"/>
      <main>
        <div>
          <NavBar />
          <HeroSection />
          <Showcase />
          <Projects />
        </div>
      </main>
      <Footer />
    </div>
  )
}
