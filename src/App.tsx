import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage/HomePage";
import AccordionPage from "./pages/AccordionPage";
import ContactFormPage from "./pages/ContactFormPage";
import HolyGrailPage from "./pages/HolyGrailPage";
import ProgressBarPage from "./pages/ProgressBarPage";

const App = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/accordion" element={<AccordionPage />} />
    <Route path="/contactform" element={<ContactFormPage />} />
    <Route path="/holygrail" element={<HolyGrailPage />} />
    <Route path="/progressbar" element={<ProgressBarPage />} />
  </Routes>
);

export default App;
