import { BrowserRouter, Routes, Route } from "react-router-dom";
import SecondPage from "./pages_second/SecondPage";
import {GlobalStyle} from "./GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SecondPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;