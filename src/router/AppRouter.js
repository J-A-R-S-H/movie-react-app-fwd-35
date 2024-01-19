import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageHome from "../pages/pageHome";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/workshop" element={<PageHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
