import { IconBrandGithub, IconBrandLinkedin, IconMail } from '@tabler/icons';

import DocumentHeader from "../components/DocumentHeader";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { HeroSection, Showcase, About, Projects, Experience, Contact } from '../components/home'

const accounts = [
  {
    name: "Github",
    url: "https://github.com/Adam-Isaak-dev/",
    icon: <IconBrandGithub className="h-6 w-6"/>,
    colors: "text-white bg-zinc-800 hover:bg-zinc-700"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/adam-isaak-dev/",
    icon: <IconBrandLinkedin className="h-6 w-6"/>,
    colors: "text-white bg-sky-600 hover:bg-sky-400"
  },
  {
    name: "E-Mail",
    url: "mailto:contact@adamisaak.dev",
    icon: <IconMail className="h-6 w-6"/>,
    colors: "text-white bg-indigo-900 hover:bg-indigo-700"
  },
];

export default function Home() {
  return (
    <div className="bg-gray-900">
      <DocumentHeader title="Adam Isaak - Developer" description="My personal portfolio website, come take a look!"/>
      <main>
        <div className="pt-20" id="home">
          <NavBar />
          <HeroSection />
          <Showcase />
          <About />
          <Projects />
          <Experience />
          <Contact accounts={accounts}/>
        </div>
      </main>
      <Footer accounts={accounts}/>
    </div>
  )
}
