import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";

function App() {
  return (
    <div className="bg-base-200 flex flex-col min-h-screen">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Details />} path="/details/:musicId" />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
