import { GlobalStyle } from "./GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blue from "./pages_first/Blue";
import Green from "./pages_first/Green";
import Pink from "./pages_first/Pink";
import Purple from "./pages_first/Purple";
import Red from "./pages_first/Red";
import Yellow from "./pages_first/Yellow";
import Second from "./Second";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/blue" element={<Blue />} />
          <Route path="/green" element={<Green />} />
          <Route path="/pink" element={<Pink />} />
          <Route path="/purple" element={<Purple />} />
          <Route path="/red" element={<Red />} />
          <Route path="/yellow" element={<Yellow />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
