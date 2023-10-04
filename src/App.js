import { GlobalStyle } from "./GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blue from "./pages_first/Blue";
import Green from "./pages_first/Green";
import Pink from "./pages_first/Pink";
import Purple from "./pages_first/Purple";
import Red from "./pages_first/Red";
import Yellow from "./pages_first/Yellow";
import SecondPage from "./pages_second/SecondPage";
import First_page from "./page/First_page";

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
                <Blue /> <SecondPage /> <First_page />
              </>
            }
          />
          <Route
            path="/green"
            element={
              <>
                <Green />
                <SecondPage />
                <First_page />
              </>
            }
          />
          <Route
            path="/pink"
            element={
              <>
                <Pink /> <SecondPage />
                <First_page />
              </>
            }
          />
          <Route
            path="/purple"
            element={
              <>
                <Purple /> <SecondPage />
                <First_page />
              </>
            }
          />
          <Route
            path="/red"
            element={
              <>
                <Red /> <SecondPage />
                <First_page />
              </>
            }
          />
          <Route
            path="/yellow"
            element={
              <>
                <Yellow /> <SecondPage />
                <First_page />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
