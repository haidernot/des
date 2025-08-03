import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "أحمد محمد",
      location: "الرياض، السعودية",
      rating: 5,
      text: "أفضل خدمة IPTV جربتها على الإطلاق! الجودة ممتازة والدعم الفني سريع ومفيد. لا يوجد أي تقطيع في البث.",
      avatar: "AM"
    },
    {
      name: "فاطمة العلي",
      location: "دبي، الإمارات",
      rating: 5,
      text: "اشتركت منذ 6 شهور ولم أواجه أي مشكلة. التطبيق سهل الاستخدام وعدد القنوات أكثر مما كنت أتوقع.",
      avatar: "FA"
    },
    {
      name: "عمر الخطيب",
      location: "عمان، الأردن",
      rating: 5,
      text: "ممتاز جداً! سعر معقول وخدمة رائعة. الآن أستطيع مشاهدة جميع المباريات والبرامج المفضلة بأعلى جودة.",
      avatar: "OK"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-background/80 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">ماذا يقول</span> <span className="gradient-text">عملاؤنا</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            آراء حقيقية من عملائنا الذين يثقون في خدماتنا يومياً
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 group card-shadow hover:scale-105 relative"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-primary/50 mb-4" />
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-foreground leading-relaxed mb-6 group-hover:text-foreground/90 transition-colors duration-300">
                  "{testimonial.text}"
                </p>

                {/* User Info */}
                <div className="flex items-center gap-4">
                  <Avatar className="border-2 border-primary/20">
                    <AvatarImage src={`/placeholder-avatar-${index + 1}.jpg`} />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>

              {/* Decorative element */}
              <div className="absolute top-4 left-4 w-2 h-2 bg-primary rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 bg-card/50 backdrop-blur-sm rounded-2xl px-8 py-6 border border-border/50">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">50,000+</div>
              <div className="text-sm text-muted-foreground">عميل راضي</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">4.9</div>
              <div className="text-sm text-muted-foreground">تقييم المستخدمين</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">99.9%</div>
              <div className="text-sm text-muted-foreground">وقت التشغيل</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;