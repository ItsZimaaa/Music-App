import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Home from "./Pages/Home.jsx";
import Player from "./Components/Player.jsx";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <main className="grid md:grid-cols-[300px_1fr]">
          <div className="hidden md:block">
            <Navbar />
          </div>
          <section className="">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </section>


        </main>
      </BrowserRouter>
    </>
  )
}
