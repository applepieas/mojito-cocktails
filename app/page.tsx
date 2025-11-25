import { main } from "ts-node/dist/bin"
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import Cocktails from "./components/Cocktails"


const page = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <Cocktails />
    </main>
  )
}

export default page