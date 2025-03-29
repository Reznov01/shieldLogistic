import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import "./App.css";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/scroll-to-top/Scroll";
import Nav from "./components/nav/Nav";
import ScrollToTopPages from "./components/scrollToTopPages";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col">
        <div className=" bg-[#f9fafb] overflow-x-hidden ">
          <ScrollToTop />
          <ScrollToTopPages />
          <Nav />
          <AppRoutes />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
