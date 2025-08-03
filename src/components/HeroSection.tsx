import { Button } from "@/components/ui/button";
import { Play, Users, Globe } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(194,65,12,0.1),transparent_70%)]"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in">
            <span className="gradient-text">أقوى خدمة TV</span>
            <br />
            <span className="text-foreground">لمشاهدة كل ما تحب</span>
            <br />
            <span className="text-primary">بجودة فائقة</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto fade-in" style={{animationDelay: "0.2s"}}>
            أكثر من <span className="text-primary font-semibold">10,000 قناة</span> و <span className="text-primary font-semibold">آلاف الأفلام والمسلسلات</span> بدون تقطيع
          </p>

          {/* Stats */}
          <div className="flex justify-center items-center gap-8 mb-10 fade-in" style={{animationDelay: "0.4s"}}>
            <div className="flex items-center gap-2 text-sm md:text-base">
              <Users className="w-5 h-5 text-primary" />
              <span>+50,000 مشترك</span>
            </div>
            <div className="flex items-center gap-2 text-sm md:text-base">
              <Play className="w-5 h-5 text-primary" />
              <span>جودة 4K/HD</span>
            </div>
            <div className="flex items-center gap-2 text-sm md:text-base">
              <Globe className="w-5 h-5 text-primary" />
              <span>جميع البلدان</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in" style={{animationDelay: "0.6s"}}>
            <Button size="lg" className="text-lg px-8 py-6 glow-shadow animate-glow">
              ابدأ تجربتك الآن
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-card/50 backdrop-blur-sm border-primary/30 hover:border-primary">
              مشاهدة الباقات
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex justify-center items-center gap-6 text-sm text-muted-foreground fade-in" style={{animationDelay: "0.8s"}}>
            <span>✓ دعم فني 24/7</span>
            <span>✓ بدون التزام</span>
            <span>✓ ضمان الجودة</span>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-cyan-300/10 rounded-full blur-xl animate-pulse" style={{animationDelay: "1s"}}></div>
    </section>
  );
};

export default HeroSection;