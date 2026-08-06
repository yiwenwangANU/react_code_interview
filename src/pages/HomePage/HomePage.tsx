import { NavLink } from "react-router";

const HomePage = () => (
  <nav>
    <NavLink to="/accordion">Accordion</NavLink>
    <NavLink to="/contactform">Contact Form</NavLink>
    <NavLink to="/holygrail">Holy Grail</NavLink>
    <NavLink to="/progressbar">Progress Bar</NavLink>
    <NavLink to="/MortgageCalculator">Mortgage Calculator</NavLink>
  </nav>
);

export default HomePage;
