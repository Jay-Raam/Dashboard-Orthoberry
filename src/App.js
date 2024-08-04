import Home from "./components/Hero";
import Navbar from "./components/Navbar";
import UserDetails from "./components/UserDatails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen max-w-[1440px] mx-auto my-0 flex-col lg:flex-row">
        <Navbar />
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<UserDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
