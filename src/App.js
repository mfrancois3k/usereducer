import { BrowserRouter, Routes, Route } from "react-router-dom";
import Base from "./components/Base";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BASE />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
