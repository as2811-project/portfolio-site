"use client";
import React from "react";
import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";
import NavItem from "./NavItem";

export default function NavBar() {
  return (
    <Navbar>
      <NavbarContent
        className="hidden sm:flex gap-4 mt-5 ml-9 p-5"
        justify="center"
      >
        <NavbarItem isActive>
          <NavItem href="/">Home</NavItem>
        </NavbarItem>
        <NavbarItem isActive>
          <NavItem href="/webprojects">Web</NavItem>
        </NavbarItem>
        <NavbarItem isActive>
          <NavItem href="/data">Data</NavItem>
        </NavbarItem>
        <NavbarItem isActive>
          <NavItem href="/photography">Photography</NavItem>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
