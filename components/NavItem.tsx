import React from "react";
import { Link } from "@nextui-org/react";
import { usePathname } from "next/navigation";

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  icon: React.ElementType;
}

const NavItem: React.FC<NavItemProps> = ({ href, children, icon: Icon }) => {
  const currentPath = usePathname();
  const isActive = currentPath === href;

  const baseClasses =
    "px-2 sm:px-4 py-2 rounded-full text-white flex items-center justify-center";
  const activeClasses =
    "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500";
  const inactiveClasses = "bg-black hover:bg-neutral-900";

  const combinedClasses = `${baseClasses} ${
    isActive ? activeClasses : inactiveClasses
  }`;

  return (
    <Link
      href={href}
      className={combinedClasses}
      aria-current={isActive ? "page" : undefined}
    >
      <Icon className="w-5 h-5 sm:mr-2 ml-2" />
      <span className={`hidden ${isActive ? "sm:inline" : "sm:hidden"}`}>
        {children}
      </span>
    </Link>
  );
};

export default NavItem;
