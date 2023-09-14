import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../../views/Layout";
import Info from "../../views/Info";
import Task from "../../views/EvenOrOdd";
import Recursion from "../../views/Recursion";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Info />} />
          <Route path="recursion" element={<Recursion />} />
          <Route path="evenOrOdd" element={<Task />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
