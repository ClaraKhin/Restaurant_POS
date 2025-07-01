import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Auth, Orders, Tables } from "./pages";
import Header from "./components/shared/Header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Auth" element={<Auth />} />
          <Route path="/Orders" element={<Orders />} />
          <Route path="/Tables" element={<Tables />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
