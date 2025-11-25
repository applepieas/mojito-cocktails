import { main } from "ts-node/dist/bin"
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import Cocktails from "./components/Cocktails"
import About from "./components/About"


const page = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <Cocktails />
      <About />
    </main>
  )
}

export default page