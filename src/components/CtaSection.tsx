
import { Button } from "@/components/ui/button";

export default function CtaSection() {
  return (
    <section id="cta" className="relative bg-primary py-24">
       {/* Texture Overlay */}
       <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-multiply pointer-events-none"></div>
       
      <div className="container relative z-10 mx-auto px-6 text-center">
        <h2 className="mb-6 font-display text-5xl font-bold uppercase text-foreground md:text-7xl">
          Ready to <span className="text-foreground">Ignite?</span>
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-xl font-medium text-foreground/80">
          Slots for 2025 restorations are filling up. Reserve your consultation today and let's discuss your dream build.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button size="lg" className="h-16 bg-background px-10 text-xl font-bold uppercase tracking-wider text-foreground hover:bg-background/80 shadow-2xl">
            Book Consultation
          </Button>
          <Button variant="outline" size="lg" className="h-16 border-2 border-border bg-transparent px-10 text-xl font-bold uppercase tracking-wider text-foreground hover:bg-background hover:text-foreground transition-all">
            Contact Workshop
          </Button>
        </div>
      </div>
    </section>
  );
}
