import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
function App() {
  return (
    <Router>
      <Navbar />
      <main className="container mx-auto px-2">
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
