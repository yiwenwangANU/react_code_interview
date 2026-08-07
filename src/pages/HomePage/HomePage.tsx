import { NavLink } from "react-router";

const HomePage = () => (
  <nav>
    <NavLink to="/accordion">Accordion</NavLink>
    <NavLink to="/contactform">Contact Form</NavLink>
    <NavLink to="/holygrail">Holy Grail</NavLink>
    <NavLink to="/progressbar">Progress Bar</NavLink>
    <NavLink to="/mortgagecalculator">Mortgage Calculator</NavLink>
    <NavLink to="/flightbooker">Flight Booker</NavLink>
    <NavLink to="/generatetable">Generate Table</NavLink>
  </nav>
);

export default HomePage;
