import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../views/Home";
import Layout from "../../views/Layout";
import Info from "../../views/Info";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Info />} />
          <Route path="recursion" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
