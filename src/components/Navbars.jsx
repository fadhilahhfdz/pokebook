import pokeLogo from "../assets/logo.png";
import { Navbar } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";

const Navbars = () => {
  const location = useLocation();
  return (
    <Navbar rounded className="shadow-md md:px-12">
      <Navbar.Brand as={Link} to="/">
        <img src={pokeLogo} className="mr-3 h-6 sm:h-9" alt="Poke Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold font-kodeMono dark:text-white">
          PokeBook
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link as={Link} to="/" active={location.pathname === "/"}>
          Home
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          to="/rating"
          active={location.pathname === "/rating"}
        >
          Rating
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          to="/about"
          active={location.pathname === "/about"}
        >
          About
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbars;
