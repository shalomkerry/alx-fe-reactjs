import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "turquoise",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/service">Service</Link>
      </nav>
    </>
  );
}
export default Navbar;
