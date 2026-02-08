import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Top from "./pages/Top";
import Coffee from "./pages/Coffee";
import Contact from "./pages/Contact";
import Barista from "./pages/Barista";
import Menu from "./pages/Menu";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Aside from "./components/layout/Aside";

function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<Top />} />
                <Route path="/coffee" element={<Coffee />} />
                <Route path="/barista" element={<Barista />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>

            <Aside />
            <Footer />
        </>
    );
}

export default App;
