"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { theme } from "@/theme";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", path: "/" },
    { name: "Produtos", path: "/produtos" },
    { name: "Contato", path: "/contato" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-white/90 py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold" style={{ fontFamily: theme.fonts.title, color: theme.colors.primary }}>
          Sweet Haven
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`relative text-sm font-medium transition-colors ${
                pathname === link.path
                  ? "text-[#5C3A21]"
                  : "text-gray-600 hover:text-[#5C3A21]"
              }`}
              style={{ fontFamily: theme.fonts.text }}
            >
              {link.name}
              {pathname === link.path && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#B9E5EE] rounded-full" />
              )}
            </Link>
          ))}
          <Link
            href="/contato"
            className="px-6 py-2 rounded-full text-white font-medium transition-all hover:shadow-lg hover:scale-105"
            style={{ backgroundColor: theme.colors.accent, fontFamily: theme.fonts.text }}
          >
            Encomendar
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X color={theme.colors.primary} /> : <Menu color={theme.colors.primary} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-sm font-medium ${
                  pathname === link.path ? "text-[#5C3A21]" : "text-gray-600"
                }`}
                style={{ fontFamily: theme.fonts.text }}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contato"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-6 py-2 rounded-full text-white font-medium text-center"
              style={{ backgroundColor: theme.colors.accent, fontFamily: theme.fonts.text }}
            >
              Encomendar
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
