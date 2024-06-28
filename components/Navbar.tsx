import React from "react";
import { Navbar, NavbarContent, NavbarItem, Link } from "@nextui-org/react";

export default function NavBar() {
  return (
    <Navbar>
      <NavbarContent className="hidden sm:flex gap-4 mt-5" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            About Me
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link aria-current="page" href="/webprojects">
            Web
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Data
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/photography">
            Photography
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
