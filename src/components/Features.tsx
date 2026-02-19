
import { ShieldCheck, Star, Trophy, Users } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Gauge,
    title: "Performance Tuning",
    desc: "We don't just restore; we enhance. Modern horsepower meets vintage soul."
  },
  {
    icon: ShieldCheck,
    title: "Lifetime Warranty",
    desc: "We stand behind our metal. Every frame-off restoration comes with our Iron-Clad guarantee."
  },
  {
    icon: Users,
    title: "Collaborative Build",
    desc: "You are part of the team. Weekly updates, video logs, and shop visits ensure your vision is realized."
  },
  {
    icon: Trophy,
    title: "Concours Quality",
    desc: "Our vehicles regularly take home gold at national shows. Perfection is our baseline."
  }
];

export default function Features() {
  return (
    <section id="services" className="bg-card py-24 text-foreground">
      <div className="container mx-auto px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => (
            <Card key={idx} className="bg-background/50 border-border/5 hover:bg-background hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-8 flex flex-col items-start">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded bg-primary/10 text-primary">
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 font-display text-xl font-bold uppercase">{feature.title}</h3>
                <p className="text-foreground-400 text-sm leading-relaxed">{feature.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
