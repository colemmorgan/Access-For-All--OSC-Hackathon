import Nav from "./components/Nav";
import Forum from "./pages/Forum";
import Home from "./pages/Home";
import PageRater from "./pages/PageRater";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sites from "./pages/Sites";
import axios from "axios";

function App() {
  const [sites, setSites] = useState([]);
  async function getSites() {
    const response = await axios.get("http://localhost:8000/get_sites");
    setSites(response.data);
  }

  useEffect(() => {
    getSites();
  }, []);

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home sites={sites}/>} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/page/:id" element={<PageRater sites={sites}/>} />
        <Route path="/sites" element={<Sites sites={sites}/>} />
      </Routes>
    </Router>
  );
}

export default App;
