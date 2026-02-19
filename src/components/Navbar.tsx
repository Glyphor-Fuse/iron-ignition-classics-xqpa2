
import { useState, useEffect } from "react";
import { Menu, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Process", href: "#process" },
    { name: "Gallery", href: "#gallery" },
    { name: "Services", href: "#services" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/10 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="flex h-10 w-10 items-center justify-center bg-primary text-foreground font-bold">
            <Wrench className="h-5 w-5 fill-current" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-xl font-bold uppercase leading-none text-foreground tracking-tighter">
              Iron & Ignition
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/60 group-hover:text-primary transition-colors">
              Classics
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium uppercase tracking-widest text-foreground/70 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button className="bg-background text-foreground hover:bg-background/90 font-bold uppercase tracking-wider text-xs px-6">
            Inquire
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground hover:bg-background/10">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-card border-l-white/10 text-foreground">
              <div className="flex flex-col gap-8 mt-12">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-2xl font-display font-bold uppercase text-foreground/80 hover:text-primary"
                  >
                    {link.name}
                  </a>
                ))}
                <Button className="w-full bg-primary text-foreground font-bold uppercase mt-4">
                  Inquire Now
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
