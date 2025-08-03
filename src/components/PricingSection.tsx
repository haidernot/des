import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "الباقة الشهرية",
      price: "15",
      period: "شهر",
      originalPrice: "25",
      badge: null,
      features: [
        "جميع القنوات العربية والعالمية",
        "جودة HD",
        "دعم فني",
        "تطبيق للهاتف",
        "حساب واحد"
      ],
      popular: false
    },
    {
      name: "باقة 3 شهور",
      price: "35",
      period: "3 شهور",
      originalPrice: "75",
      badge: "الأكثر شعبية",
      features: [
        "جميع القنوات العربية والعالمية",
        "جودة 4K/HD",
        "دعم فني أولوية",
        "تطبيق لجميع الأجهزة",
        "حسابين متزامنين",
        "VOD (أفلام ومسلسلات)"
      ],
      popular: true
    },
    {
      name: "الباقة السنوية",
      price: "120",
      period: "سنة كاملة",
      originalPrice: "300",
      badge: "أفضل قيمة",
      features: [
        "جميع القنوات العربية والعالمية",
        "جودة 4K/UHD",
        "دعم فني VIP",
        "تطبيق لجميع الأجهزة",
        "3 حسابات متزامنة",
        "VOD (أفلام ومسلسلات)",
        "محتوى حصري",
        "تحديثات مجانية"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-background/80 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">اختر</span> <span className="gradient-text">باقتك المثالية</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            باقات مرنة تناسب جميع الاحتياجات مع أفضل الأسعار في السوق
          </p>
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm">ضمان استرداد المال خلال 7 أيام</span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 card-shadow ${
                plan.popular ? 'border-primary scale-105 ring-2 ring-primary/20' : 'hover:scale-105'
              }`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {plan.badge && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-6 py-1">
                  {plan.badge}
                </Badge>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-foreground mb-4">
                  {plan.name}
                </CardTitle>
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-4xl font-bold gradient-text">${plan.price}</span>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground line-through">${plan.originalPrice}</div>
                      <div className="text-sm text-muted-foreground">/ {plan.period}</div>
                    </div>
                  </div>
                  <div className="text-sm text-green-400">
                    وفر {Math.round(((parseFloat(plan.originalPrice) - parseFloat(plan.price)) / parseFloat(plan.originalPrice)) * 100)}%
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
  className={`w-full py-6 text-lg ${
    plan.popular 
      ? 'glow-shadow animate-glow' 
      : 'bg-secondary hover:bg-primary hover:text-primary-foreground'
  }`}
  onClick={() => window.open('https://wa.me/9647887833838', '_blank')}
>
  اشترك الآن
</Button>


                <div className="text-center text-xs text-muted-foreground">
                  {plan.popular ? 'الأكثر اختياراً من عملائنا' : 'يمكنك الترقية في أي وقت'}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12 space-y-4">
          <p className="text-muted-foreground">
            جميع الباقات تشمل تجربة مجانية لمدة 24 ساعة
          </p>
          <div className="flex justify-center items-center gap-6 text-sm text-muted-foreground">
            <span>✓ بدون رسوم خفية</span>
            <span>✓ إلغاء في أي وقت</span>
            <span>✓ دفع آمن 100%</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;