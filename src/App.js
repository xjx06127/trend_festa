import { GlobalStyle } from "./GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blue from "./pages_first/Blue";
import Green from "./pages_first/Green";
import Pink from "./pages_first/Pink";
import Purple from "./pages_first/Purple";
import Red from "./pages_first/Red";
import Yellow from "./pages_first/Yellow";
import SecondPage from "./pages_second/SecondPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route
            path="/blue"
            element={
              <>
                <Blue /> <SecondPage />
              </>
            }
          />
          <Route
            path="/green"
            element={
              <>
                <Green />
                <SecondPage />
              </>
            }
          />
          <Route
            path="/pink"
            element={
              <>
                <Pink /> <SecondPage />
              </>
            }
          />
          <Route
            path="/purple"
            element={
              <>
                <Purple /> <SecondPage />
              </>
            }
          />
          <Route
            path="/red"
            element={
              <>
                <Red /> <SecondPage />
              </>
            }
          />
          <Route
            path="/yellow"
            element={
              <>
                <Yellow /> <SecondPage />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
