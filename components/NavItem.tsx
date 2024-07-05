import React from "react";
import { Link } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  icon: React.ElementType;
}

const NavItem: React.FC<NavItemProps> = ({ href, children, icon: Icon }) => {
  const currentPath = usePathname();
  const isActive = currentPath === href;

  const baseClasses =
    "relative px-2 sm:px-4 py-2 rounded-full text-white flex items-center justify-center";
  const activeClasses =
    "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500";
  const inactiveClasses = "bg-black hover:bg-neutral-900";

  const combinedClasses = `${baseClasses} ${
    isActive ? activeClasses : inactiveClasses
  }`;

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className="relative"
    >
      {isActive && (
        <motion.div
          layoutId="navIndicator"
          transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
          className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full z-0"
        />
      )}
      <div className={`${baseClasses} z-10`}>
        <Icon className="w-5 h-5 sm:mr-2 ml-2" />
        <span className={`hidden ${isActive ? "sm:inline" : "sm:hidden"}`}>
          {children}
        </span>
      </div>
    </Link>
  );
};

export default NavItem;
