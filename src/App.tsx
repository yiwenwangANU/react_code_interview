import { Route, Routes } from "react-router";
import Accordion from "./pages/AccordionPage";
import HomePage from "./pages/HomePage/HomePage";

const App = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/accordion" element={<Accordion />} />
  </Routes>
);

export default App;
