import { GlobalStyle } from "./GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blue from "./pages_first/Blue";
import Green from "./pages_first/Green";
import Pink from "./pages_first/Pink";
import Purple from "./pages_first/Purple";
import Red from "./pages_first/Red";
import Yellow from "./pages_first/Yellow";
import SecondPage from "./pages_second/SecondPage";
import FirstPage from "./page/FirstPage";

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
                <Blue /> <SecondPage /> <FirstPage />
              </>
            }
          />
          <Route
            path="/green"
            element={
              <>
                <Green />
                <SecondPage />
                <FirstPage />
              </>
            }
          />
          <Route
            path="/pink"
            element={
              <>
                <Pink /> <SecondPage />
                <FirstPage />
              </>
            }
          />
          <Route
            path="/purple"
            element={
              <>
                <Purple /> <SecondPage />
                <FirstPage />
              </>
            }
          />
          <Route
            path="/red"
            element={
              <>
                <Red /> <SecondPage />
                <FirstPage />
              </>
            }
          />
          <Route
            path="/yellow"
            element={
              <>
                <Yellow /> <SecondPage />
                <FirstPage />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
