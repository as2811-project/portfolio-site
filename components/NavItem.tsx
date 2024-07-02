import React from "react";
import { Link } from "@nextui-org/react";
import { usePathname } from "next/navigation";

interface NavItemProps {
  href: string;
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ href, children }) => {
  const currentPath = usePathname();

  const isActive = currentPath === href;
  const baseClasses = "px-4 py-2 rounded-full text-white";
  const activeClasses =
    "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500";
  const combinedClasses = `${baseClasses} ${isActive ? activeClasses : ""}`;

  return (
    <Link
      href={href}
      className={combinedClasses}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </Link>
  );
};

export default NavItem;
