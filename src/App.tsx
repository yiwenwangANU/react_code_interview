import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage/HomePage";
import AccordionPage from "./pages/AccordionPage";
import ContactFormPage from "./pages/ContactFormPage";
import HolyGrailPage from "./pages/HolyGrailPage";
import ProgressBarPage from "./pages/ProgressBarPage";
import MortgageCalculatorPage from "./pages/MortgageCalculatorPage";
import FlightBookerPage from "./pages/FlightBookerPage";
import GenerateTablePage from "./pages/GenerateTablePage";
import ProgressBar2Page from "./pages/ProgressBar2Page";
import TemperatureConverterPage from "./pages/TemperatureConverterPage";
import TweetPage from "./pages/TweetPage";

const App = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/accordion" element={<AccordionPage />} />
    <Route path="/contactform" element={<ContactFormPage />} />
    <Route path="/holygrail" element={<HolyGrailPage />} />
    <Route path="/progressbar" element={<ProgressBarPage />} />
    <Route path="/mortgagecalculator" element={<MortgageCalculatorPage />} />
    <Route path="/flightbooker" element={<FlightBookerPage />} />
    <Route path="/generatetable" element={<GenerateTablePage />} />
    <Route path="/progressbar2" element={<ProgressBar2Page progress={50} />} />
    <Route
      path="/temperatureconverter"
      element={<TemperatureConverterPage />}
    />
    <Route path="/tweet" element={<TweetPage />} />
  </Routes>
);

export default App;
