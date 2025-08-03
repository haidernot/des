import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, Monitor, Tablet, Download, PlayCircle } from "lucide-react";

const AppSection = () => {
  const devices = [
    { icon: Smartphone, name: "الهاتف المحمول", os: "iOS & Android" },
    { icon: Monitor, name: "التلفاز الذكي", os: "Smart TV & Android TV" },
    { icon: Tablet, name: "الجهاز اللوحي", os: "iPad & Android Tablet" },
    { icon: Monitor, name: "الكمبيوتر", os: "Windows & Mac" }
  ];

  return (
    <section id="app" className="py-20 bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Left Content */}
          <div className="order-2 lg:order-1 space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-foreground">شاهد من</span> <span className="gradient-text">أي مكان</span>
                <br />
                <span className="text-foreground">على</span> <span className="gradient-text">أي جهاز</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                تطبيق سهل الاستخدام متوافق مع جميع الأجهزة لتجربة مشاهدة مثالية
              </p>
            </div>

            {/* Devices Grid */}
            <div className="grid grid-cols-2 gap-4">
              {devices.map((device, index) => (
                <Card key={index} className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <device.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <h4 className="font-semibold text-foreground mb-1">{device.name}</h4>
                    <p className="text-sm text-muted-foreground">{device.os}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Download Buttons */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground mb-4">حمل التطبيق الآن</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="flex items-center gap-3 glow-shadow">
                  <Download className="w-5 h-5" />
                  تحميل APK مباشر
                </Button>
                <Button size="lg" variant="outline" className="flex items-center gap-3 bg-card/50 backdrop-blur-sm border-primary/30">
                  <PlayCircle className="w-5 h-5" />
                  Google Play
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                متاح أيضاً على: App Store, Samsung TV, LG TV, Amazon Fire TV
              </p>
            </div>
          </div>

          {/* Right Content - App Preview */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative max-w-md mx-auto">
              {/* Phone Mockup */}
              <div className="bg-gradient-card rounded-[2.5rem] p-4 border border-border/50 card-shadow">
                <div className="bg-background rounded-[2rem] aspect-[9/19] relative overflow-hidden">
                  {/* Status Bar */}
                  <div className="h-12 bg-gradient-card flex items-center justify-between px-6 text-sm">
                    <span>9:41</span>
                    <span>●●●</span>
                    <span>100%</span>
                  </div>
                  
                  {/* App Interface */}
                  <div className="p-4 space-y-4">
                    <div className="text-center">
                      <h4 className="font-bold text-lg gradient-text">STYLE SAT</h4>
                      <p className="text-sm text-muted-foreground">اختر قناتك المفضلة</p>
                    </div>
                    
                    {/* Channels Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      {[1,2,3,4,5,6].map((item) => (
                        <div key={item} className="bg-gradient-card rounded-lg p-3 text-center">
                          <div className="w-8 h-8 bg-primary/20 rounded-full mx-auto mb-2"></div>
                          <div className="text-xs text-muted-foreground">قناة {item}</div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Featured Channel */}
                    <div className="bg-gradient-card rounded-lg p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-primary/20 rounded-lg"></div>
                        <div>
                          <div className="font-semibold text-sm">القناة الرياضية</div>
                          <div className="text-xs text-muted-foreground">جودة 4K • مباشر</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-cyan-300/10 rounded-full blur-xl animate-pulse" style={{animationDelay: "1s"}}></div>
            </div>
          </div>
        </div>

        {/* Features List */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
            <span>✓ تشغيل فوري</span>
            <span>✓ واجهة سهلة</span>
            <span>✓ قوائم مفضلة</span>
            <span>✓ بحث سريع</span>
            <span>✓ جدول البرامج</span>
            <span>✓ تسجيل العروض</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppSection;