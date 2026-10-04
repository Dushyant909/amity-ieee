import { Calendar, Clock, MapPin } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import sparkImage from "@/assets/spark-2026-poster.png";

const activities = [
  "Inspiring Workshop (Guest Session)",
  "Technical Quiz (Kahoot)",
  "Techno Game Battle",
  "Talent Stage",
];

const Spark2026 = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8 animate-bounce-in">
                <img
                  src={sparkImage}
                  alt="Spark IEEE Day event"
                  className="w-full max-w-3xl max-h-[420px] object-contain mx-auto rounded-2xl shadow-2xl border-4 border-primary/30"
                />
              </div>

              <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-fade-in">
                <Calendar size={16} />
                6 October 2026
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-slide-up stagger-2">
                SPARK 2026 <span className="text-primary">× IEEE DAY</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed mb-3 animate-fade-in stagger-3">
                IEEE Student Branch, AUR celebrates SPARK 2026 @ IEEE DAY
              </p>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 animate-fade-in stagger-3">
                Ideas. Tech. Games. Talent. Good vibes.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 animate-fade-in stagger-4">
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <Clock className="text-primary" size={20} />
                  <span>10:00 AM – 1:30 PM (start sharp at 10:00 AM)</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <MapPin className="text-accent flex-shrink-0" size={20} />
                  <span>Amity Innovation Incubator, 3rd Floor, E-Block, Amity University Rajasthan</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-background rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300">
                <h2 className="font-heading text-lg font-semibold text-foreground mb-2">
                  Session Speaker
                </h2>
                <p className="text-muted-foreground">
                  Prof. Lava Bhargava, ECE, MNIT Jaipur, Chairperson, IEEE Rajasthan Subsection
                </p>
              </div>
              <div className="bg-background rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300">
                <h2 className="font-heading text-lg font-semibold text-foreground mb-2">
                  Host
                </h2>
                <p className="text-muted-foreground">
                  Prof. Dr. Manju Kaushik, IEEE Student Branch Counsellor, AUR
                </p>
              </div>
              <div className="bg-background rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300">
                <h2 className="font-heading text-lg font-semibold text-foreground mb-2">
                  Student Coordinator
                </h2>
                <p className="text-muted-foreground">
                  Madhusmita, General Secretary, IEEE SB AUR
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground animate-slide-up">
                Activities
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {activities.map((activity, index) => (
                <div
                  key={activity}
                  className={`bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover-lift animate-scale-in stagger-${index + 1}`}
                >
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {activity}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-card">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Registration
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              NOT required. Open for everyone. No formalities. Walk in to the venue on time.
            </p>
          </div>
        </section>

        <section className="py-20 bg-gradient-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-foreground">
              Be there. We're starting on time.
            </h2>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Spark2026;