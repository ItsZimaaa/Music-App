import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Home from "./Pages/Home.jsx";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <main className="grid grid-cols-[200px_1fr]  justify-between h-screen">
          <div>
            <Navbar />
          </div>
          <section className="">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </section>

          {/* <div className="">
            <Navbar />
          </div> */}
        </main>
      </BrowserRouter>
    </>
  )
}
