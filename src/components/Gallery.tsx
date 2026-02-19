
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from 'lucide-react';

const projects = [
  {
    title: "1967 Fastback",
    category: "Full Restoration",
    image: "/images/project-1.png",
    color: "Midnight Blue"
  },
  {
    title: "1970 Challenger",
    category: "Restomod",
    image: "/images/project-2.png",
    color: "Inferno Orange"
  },
  {
    title: "1955 Bel Air",
    category: "Concours",
    image: "/images/project-3.png",
    color: "Classic Teal"
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-background py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <h2 className="font-display text-4xl font-bold uppercase text-foreground md:text-6xl">
              Recent <span className="text-muted-foreground">Builds</span>
            </h2>
            <div className="mt-4 h-1 w-24 bg-primary" />
          </div>
          <p className="max-w-md text-foreground-400">
            Our portfolio of resurrected legends. Each vehicle is a unique masterpiece, tailored to the owner's vision.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <Card className="group relative overflow-hidden rounded-none border-0 bg-transparent">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-background/45 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col items-center justify-center text-center p-6">
                       <span className="text-primary uppercase tracking-widest text-sm mb-2">{project.category}</span>
                       <h3 className="text-3xl font-display font-bold text-foreground uppercase mb-4">{project.title}</h3>
                       <button className="flex items-center gap-2 text-foreground border-b border-primary pb-1 hover:text-primary transition-colors">
                         View Details <Star className="w-4 h-4" />
                       </button>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between items-center border-t border-border/10 pt-4 group-hover:border-primary/50 transition-colors">
                    <h3 className="font-display text-xl font-bold uppercase text-foreground">
                      {project.title}
                    </h3>
                    <span className="text-xs text-foreground-500 uppercase tracking-wider">{project.color}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
