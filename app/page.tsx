import { main } from "ts-node/dist/bin"
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import Cocktails from "./components/Cocktails"
import About from "./components/About"
import Art from "./components/Art"


const page = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
    </main>
  )
}

export default page