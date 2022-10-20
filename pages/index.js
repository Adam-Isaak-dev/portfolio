import PageHeader from "../components/PageHeader";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div>
      <PageHeader title="Home" description="my personal portfolio website"/>
      <main>
        <div className="h-full h-screen bg-slate-900">
          <NavBar />
        </div>
      </main>
      <footer>
      </footer>
    </div>
  )
}
