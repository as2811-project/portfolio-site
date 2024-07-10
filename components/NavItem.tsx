import React from "react";
import { Link, Tooltip } from "@nextui-org/react";
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
    "relative px-2 sm:px-3 py-2 rounded-full text-white flex items-center justify-center mr-2";

  return (
    <Tooltip content={children} placement="bottom">
      <Link
        href={href}
        aria-current={isActive ? "page" : undefined}
        className="relative"
      >
        {isActive && (
          <motion.span
            layoutId="pill-tab"
            animate={{ x: isActive ? 0 : -100, opacity: isActive ? 1 : 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="absolute inset-0 z-0 bg-white rounded-full"
          ></motion.span>
        )}
        <div className={`${baseClasses} z-10`}>
          <Icon
            className={`w-5 h-5 sm:mr-2 ml-2 ${
              isActive ? "text-black" : "text-white"
            }`}
          />
          <span
            className={`hidden text-black ${
              isActive ? "sm:inline" : "sm:hidden"
            }`}
          >
            {children}
          </span>
        </div>
      </Link>
    </Tooltip>
  );
};

export default NavItem;
// bg-gradient-to-r from-violet-600 to-indigo-600
