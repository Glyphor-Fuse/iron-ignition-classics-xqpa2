
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const stages = [
  {
    id: 1,
    title: "Discovery",
    subtitle: "The Barn Find",
    desc: "Every legend starts somewhere. We scour the country for rare chassis, assessing structural integrity and potential.",
    image: "/images/stage-1.png",
  },
  {
    id: 2,
    title: "Teardown",
    subtitle: "Stripped to Metal",
    desc: "Precision disassembly. Every bolt cataloged. The chassis is blasted to bare metal, revealing the raw iron soul.",
    image: "/images/stage-2.png",
  },
  {
    id: 3,
    title: "Resurrection",
    subtitle: "Paint & Polish",
    desc: "Hundreds of hours of bodywork followed by 12 coats of custom paint. The finish is deeper than the ocean.",
    image: "/images/stage-3.png",
  },
  {
    id: 4,
    title: "Delivery",
    subtitle: "Showroom Ready",
    desc: "Reassembly with modern reliability and classic style. The moment the key turns and the engine roars to life.",
    image: "/images/stage-4.png",
  },
];

export default function ProcessReveal() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

  return (
    <section id="process" ref={targetRef} className="relative h-[300vh] bg-card">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Section Header (Absolute to stay consistent) */}
        <div className="absolute top-8 left-8 z-30 md:top-12 md:left-12 bg-background/50 p-4 backdrop-blur-md rounded border border-border/10">
            <h2 className="font-display text-4xl font-bold uppercase text-foreground md:text-5xl">
              The <span className="text-primary">Process</span>
            </h2>
            <p className="mt-2 text-sm text-foreground/60 max-w-xs">
              Scroll to witness the rebirth of an icon.
            </p>
        </div>

        <motion.div style={{ x }} className="flex gap-12 px-12 md:px-24">
          {stages.map((stage) => (
            <div
              key={stage.id}
              className="group relative h-[70vh] w-[85vw] min-w-[85vw] overflow-hidden rounded-sm border border-border/10 bg-background md:w-[60vw] md:min-w-[60vw]"
            >
              {/* Image Background */}
              <div className="absolute inset-0 z-0">
                <img
                  src={stage.image}
                  alt={stage.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 z-10 w-full p-8 md:p-12">
                <div className="mb-4 flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/50 bg-background/50 font-display text-xl font-bold text-primary backdrop-blur-md">
                    0{stage.id}
                  </span>
                  <div className="h-[1px] w-24 bg-primary/50" />
                </div>
                <h3 className="font-display text-4xl font-bold uppercase text-foreground md:text-6xl">
                  {stage.title}
                </h3>
                <h4 className="mb-4 font-mono text-lg uppercase tracking-widest text-primary">
                  {stage.subtitle}
                </h4>
                <p className="max-w-md text-foreground-300">
                  {stage.desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
