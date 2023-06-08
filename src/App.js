import { Route, Routes } from "react-router-dom";
import Books from "./components/Books";
import Categories from "./components/Categories";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
