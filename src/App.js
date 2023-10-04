
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Second from "./Second";


function App() {
  return (
    <>
   
      <BrowserRouter>
        <Routes>
          <Route path="/Second" element={<Second />} />
    
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
