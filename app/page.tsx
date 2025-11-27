import { main } from "ts-node/dist/bin"
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import Cocktails from "./components/Cocktails"
import About from "./components/About"
import Art from "./components/Art"
import Menu from "./components/Menu"
import Footer from "./components/Footer"


const page = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Menu />
      <Footer />
    </main>
  )
}

export default page