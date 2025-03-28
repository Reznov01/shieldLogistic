import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import "./App.css";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/scroll-to-top/Scroll";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col">
        <div className=" bg-gray-100 overflow-x-hidden ">
          <ScrollToTop />
          <Nav />
          <AppRoutes />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
