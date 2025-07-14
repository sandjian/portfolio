// src/components/navbar.tsx
"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion"; 
import { usePathname } from "next/navigation";
import { useClickAway } from "react-use";
import Link from "next/link";
import { Menu, Home, User, Folder, Mail, X } from "lucide-react";
import Image from "next/image";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, 
      delayChildren: 0.2,   
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  useClickAway(menuRef, () => setIsOpen(false));

  const handleNavLinkClick = useSmoothScroll();

  const NAV_ITEMS = [
    { id: 1, label: "Home", href: "#home", icon: Home },
    { id: 2, label: "About me", href: "#about-me", icon: User },
    { id: 3, label: "Projects", href: "#projects", icon: Folder },
    { id: 4, label: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <nav className="absolute w-full z-50">
      {/* Desktop Menu */}
      <motion.div
        className="hidden lg:flex items-center justify-between border-b border-white/5 border-dashed mx-auto py-4 px-8 max-w-7xl w-full"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <Link
            href="#home"
            onClick={(e) => handleNavLinkClick(e, '#home')}
            className="flex items-center px-6"
            aria-label="logo portfolio"
          >
            <Image alt="logo portfolio" src={"/logo/as-dev.png"} width={100} height={80} />
          </Link>
        </motion.div>

        <ul className="flex items-center space-x-4 px-6">
          {NAV_ITEMS.map((navItem) => (
            <motion.li
              key={navItem.id}
              className="relative group"
              variants={itemVariants}
            >
              <Link
                href={navItem.href}
                onClick={(e) => handleNavLinkClick(e, navItem.href)}
                className={`text-sm py-1.5 px-4 flex cursor-pointer transition-all duration-300 items-center justify-center gap-2 relative ${
                  pathname === navItem.href
                    ? "text-foreground font-semibold"
                    : "text-neutral-400 group-hover:text-foreground group-hover:scale-105"
                }`}
              >
                <navItem.icon className="w-4 h-4" />
                <span>{navItem.label}</span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Mobile Menu */}
      <div className="lg:hidden flex justify-between items-center px-4 md:px-8 pt-4 pb-2 border-b border-white/5 border-dashed">

        <Link
          href="#home"
          onClick={(e) => handleNavLinkClick(e, '#home')}
          className="flex items-center"
          aria-label="logo portfolio"
        >
          <Image alt="logo portfolio" src={"/logo/as-dev.png"} width={70} height={50} />
        </Link>

        <button
          onClick={() => setIsOpen(true)}
          className="p-2 text-foreground/60 hover:text-foreground transition-colors duration-300"
          aria-label="Abrir menú"
        >
          <Menu className="w-6 h-6" />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 bg-neutral-950/60 z-50 flex justify-end"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                ref={menuRef}
                className="w-full max-w-xs bg-gradient-to-b from-white via-cyan-200 to-primary p-6 shadow-sm shadow-white flex flex-col relative rounded-l-3xl"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-between pb-4 border-b border-primary">
                  <Link
                    href="#home"
                    onClick={(e) => {
                      handleNavLinkClick(e, '#home');
                      setIsOpen(false);
                    }}
                    className="flex items-center"
                    aria-label="logo portfolio"
                  >
                    <Image alt="logo portfolio" src={"/logo/as-dev.png"} width={80} height={60} className="invert"/>
                  </Link>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-neutral-900 hover:scale-110 transition-all duration-300"
                    aria-label="Cerrar menú"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <nav className="space-y-2 mt-8">
                  {NAV_ITEMS.map((link) => (
                    <Link
                      key={link.id}
                      href={link.href}
                      onClick={(e) => {
                          handleNavLinkClick(e, link.href);
                          setIsOpen(false);
                      }}
                      className={`relative flex items-center px-4 py-3 rounded-xl gap-3 ${
                        pathname === link.href
                          ? "text-foreground bg-black/40"
                          : "text-neutral-900 hover:bg-black/40 hover:text-foreground "
                      }`}
                    >
                      <link.icon className="w-5 h-5" />
                      <span>{link.label}</span>
                    </Link>
                  ))}
                </nav>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}