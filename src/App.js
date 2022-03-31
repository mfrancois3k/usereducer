import { BrowserRouter, Routes, Route } from "react-router-dom";
import Base from "./Components/Base";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Base />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
