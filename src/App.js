import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GithubContextProvider } from "./context/github/GithubContext";
import { AlertProvider } from "./context/alert/AlertContext";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import User from "./pages/User";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <GithubContextProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <NavBar />
            <main className="container mx-auto px-3 pb-12">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/user/:login" element={<User />} />
                <Route path="/about" element={<About />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubContextProvider>
  );
}

export default App;
