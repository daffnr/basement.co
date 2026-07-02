"use client";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Beranda", href: "/" },
    { name: "Tentang Kami", href: "/tentang-kami" },
    { name: "Layanan", href: "/layanan" },
    { name: "Portofolio", href: "/portfolio" },
    { name: "Paket Harga", href: "/paket-harga" },
    { name: "Hubungi Kami", href: "/hubungi-kami" },
  ];

  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-md border-b border-border/45 py-4 z-50 transition-all duration-300">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl sm:text-2xl text-foreground font-black tracking-tighter flex items-center hover:opacity-90 transition-opacity">
          basement<span className="text-primary font-serif">co.</span>
        </Link>

        {/* Hamburger Menu (Tombol) */}
        <div className="md:flex lg:hidden xl:hidden hidden">
          {/* Fallback to md hidden/flex */}
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
            className="text-foreground focus:outline-none p-2 hover:bg-black/5 rounded-lg transition-colors"
          >
            {menuOpen ? (
              <AiOutlineClose size={22} />
            ) : (
              <AiOutlineMenu size={22} />
            )}
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-1">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-primary/10 text-primary border border-primary/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-black/5 border border-transparent"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          
          <Link href="/order" className="ml-4">
            <button className="bg-primary text-primary-foreground hover:bg-primary/95 text-xs font-bold px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm">
              Pesan Jasa
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Links */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-lg border-b border-border/40 px-6 py-4 flex flex-col space-y-3 transition-all duration-300 ease-in-out ${
          menuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-semibold px-4 py-3 rounded-xl transition-all ${
                isActive
                  ? "bg-primary/15 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-black/5"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
        
        <Link
          href="/order"
          onClick={() => setMenuOpen(false)}
          className="text-center bg-primary text-primary-foreground hover:bg-primary/95 text-sm font-bold py-3 rounded-xl transition-all"
        >
          Pesan Jasa
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
