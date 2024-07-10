"use client";
import React from "react";
import { Navbar, NavbarContent } from "@nextui-org/react";
import NavItem from "./NavItem";
import { FaLaptopCode, FaDatabase, FaCamera } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { BsPersonWorkspace } from "react-icons/bs";

const navItems = [
  { href: "/", label: "Home", icon: GoHomeFill },
  { href: "/workexp", label: "Experience", icon: BsPersonWorkspace },
  { href: "/webprojects", label: "Web", icon: FaLaptopCode },
  { href: "/dataprojects", label: "Data", icon: FaDatabase },
  { href: "/photography", label: "Photography", icon: FaCamera },
];

export default function NavBar() {
  return (
    <Navbar className="bg-black">
      <NavbarContent
        className="flex gap-2 sm:gap-4 mt-5 ml-2 sm:ml-9 p-2 sm:p-5"
        justify="center"
      >
        {navItems.map((item) => (
          <NavItem key={item.href} href={item.href} icon={item.icon}>
            {item.label}
          </NavItem>
        ))}
      </NavbarContent>
    </Navbar>
  );
}
