
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-background">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/45 z-10" /> {/* Overlay */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <span className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-4.5 text-sm font-bold uppercase tracking-widest text-primary backdrop-blur-sm border border-primary/30">
            Est. 2024
          </span>
          <h1 className="mb-6 font-display text-5xl font-bold uppercase leading-none tracking-tight text-foreground md:text-7xl lg:text-8xl">
            Iron & <span className="text-primary">Ignition</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-foreground-300 md:text-xl font-light">
            Resurrecting automotive legends. From barn-find rust to concours-grade glory.
            We blend gritty craftsmanship with showroom perfection.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="h-14 bg-primary px-8 text-lg font-bold uppercase tracking-wider text-foreground hover:bg-primary/90">
              Start Your Build
            </Button>
            <Button variant="outline" size="lg" className="h-14 border-border/20 bg-background/5 px-8 text-lg font-bold uppercase tracking-wider text-foreground backdrop-blur-sm hover:bg-background/10 hover:text-foreground">
              View Gallery
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2 text-foreground/50"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-[0.2em]">Scroll to Reveal</span>
          <ChevronDown className="animate-bounce h-5 w-5" />
        </div>
      </motion.div>
    </section>
  );
}
