import { main } from "ts-node/dist/bin"
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"


const page = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <div className="h-screen"></div>
    </main>
  )
}

export default page