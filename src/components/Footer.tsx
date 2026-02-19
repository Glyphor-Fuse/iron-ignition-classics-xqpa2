
import { Wrench, Instagram, Facebook, Twitter, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background py-16 text-foreground border-t border-border/10">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-4">
          
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
               <div className="flex h-8 w-8 items-center justify-center bg-primary text-foreground font-bold">
                <Wrench className="h-4 w-4 fill-current" />
              </div>
              <span className="font-display text-lg font-bold uppercase text-foreground">
                Iron & Ignition
              </span>
            </div>
            <p className="text-sm text-foreground-400 mb-6">
              Premier automotive restoration and customization shop. We build dreams from steel and gasoline.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-foreground-400 hover:text-primary"><Instagram className="w-5 h-5"/></a>
              <a href="#" className="text-foreground-400 hover:text-primary"><Facebook className="w-5 h-5"/></a>
              <a href="#" className="text-foreground-400 hover:text-primary"><Twitter className="w-5 h-5"/></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-lg font-bold uppercase mb-6 text-primary">Explore</h4>
            <ul className="space-y-3 text-sm text-foreground-400">
              <li><a href="#" className="hover:text-foreground transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">The Process</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Inventory</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Merchandise</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-bold uppercase mb-6 text-primary">Contact</h4>
            <ul className="space-y-4 text-sm text-foreground-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>1024 Octane Blvd,<br/>Detroit, MI 48201</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>(555) 012-3456</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>builds@ironignition.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-lg font-bold uppercase mb-6 text-primary">Hours</h4>
            <ul className="space-y-2 text-sm text-foreground-400">
              <li className="flex justify-between">
                <span>Mon - Fri</span>
                <span className="text-foreground">8:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-foreground">9:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-primary">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-border/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-foreground-500 uppercase tracking-wider">
          <p>&copy; 2024 Iron & Ignition Classics. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground">Privacy Policy</a>
            <a href="#" className="hover:text-foreground">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
