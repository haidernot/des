import { Card, CardContent } from "@/components/ui/card";
import { Zap, Smartphone, Headphones, Clock, Shield, Download } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: "جودة 4K/HD بث ثابت",
      description: "استمتع بمشاهدة القنوات والأفلام بأعلى جودة ممكنة بدون تقطيع أو تشويش"
    },
    {
      icon: Smartphone,
      title: "تطبيق لجميع الأجهزة",
      description: "متوافق مع جميع الأجهزة الذكية، التلفاز، الكمبيوتر، والهواتف المحمولة"
    },
    {
      icon: Headphones,
      title: "دعم فني 24/7",
      description: "فريق دعم متخصص متاح طوال اليوم عبر WhatsApp لحل جميع استفساراتك"
    },
    {
      icon: Clock,
      title: "تجديد مرن وسريع",
      description: "خيارات دفع متعددة وتجديد سريع بدون تعقيدات أو انقطاع في الخدمة"
    },
    {
      icon: Shield,
      title: "حماية وأمان عالي",
      description: "خوادم محمية وتشفير عالي لضمان أمان بياناتك وخصوصية مشاهدتك"
    },
    {
      icon: Download,
      title: "تحديثات مستمرة",
      description: "إضافة قنوات ومحتوى جديد باستمرار مع تحديثات منتظمة للتطبيق"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">مميزات</span> <span className="text-foreground">لا تُضاهى</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            نقدم لك أفضل تجربة مشاهدة مع مميزات احترافية وخدمة عملاء استثنائية
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 group card-shadow hover:scale-105"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-4">
            جرب جميع هذه المميزات الآن
          </p>
          <div className="inline-flex items-center gap-2 text-primary">
            <span>↓</span>
            <span>شاهد باقاتنا أدناه</span>
            <span>↓</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;