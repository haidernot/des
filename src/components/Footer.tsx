import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MessageCircle, Instagram, Send } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "الرئيسية", href: "#home" },
    { name: "القنوات", href: "#channels" },
    { name: "الباقات", href: "#pricing" },
    { name: "التطبيق", href: "#app" },
  ];

  const supportLinks = [
    { name: "الدعم الفني", href: "#support" },
    { name: "الأسئلة الشائعة", href: "#faq" },
    { name: "طريقة التثبيت", href: "#installation" },
    { name: "استكشاف الأخطاء", href: "#troubleshooting" },
  ];

  const legalLinks = [
    { name: "سياسة الخصوصية", href: "#privacy" },
    { name: "شروط الاستخدام", href: "#terms" },
    { name: "سياسة الاسترداد", href: "#refund" },
    { name: "اتفاقية الخدمة", href: "#service-agreement" },
  ];

  return (
    <footer className="bg-gradient-to-b from-background/80 to-black border-t border-border/50">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <img 
                  src="/images/logo.png" 
                  alt="Logo" 
                    style={{ width: '62px', height: '62px', objectFit: 'contain' }}
/>
                <span className="mr-3 text-2xl font-bold text-primary">STYLE SAT</span>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                أقوى خدمة بث في الوطن العربي مع أكثر من 10,000 قناة بجودة عالية وبث مستقر بدون انقطاع.
              </p>
              <div className="flex items-center gap-4">
                <a 
                  href="https://wa.me/9647887833838" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-green-600/20 hover:bg-green-600 rounded-lg flex items-center justify-center transition-all duration-300 group"
                >
                  <MessageCircle className="w-5 h-5 text-green-400 group-hover:text-white" />
                </a>
                <a 
                  href="https://t.me/iptv_pro" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-600/20 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 group"
                >
                  <Send className="w-5 h-5 text-blue-400 group-hover:text-white" />
                </a>
                <a 
                  href="https://instagram.com/iptv_pro" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-pink-600/20 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-all duration-300 group"
                >
                  <Instagram className="w-5 h-5 text-pink-400 group-hover:text-white" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-6">روابط سريعة</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center group"
                    >
                      <span className="w-1 h-1 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-6">الدعم والمساعدة</h3>
              <ul className="space-y-3">
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center group"
                    >
                      <span className="w-1 h-1 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-6">الشروط والأحكام</h3>
              <ul className="space-y-3 mb-6">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center group"
                    >
                      <span className="w-1 h-1 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              
              {/* Newsletter */}
              <div className="bg-gradient-card rounded-lg p-4 border border-border/50">
                <h4 className="font-semibold text-foreground mb-2">النشرة الإخبارية</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  اشترك للحصول على آخر العروض والتحديثات
                </p>
                <Button
                  size="sm"
                  className="w-full"
                  onClick={() => window.open("https://wa.me/9647887833838", "_blank")}
                >
                  اشترك الآن
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-border/50" />

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-right">
              <p className="text-muted-foreground text-sm">
                © 2025 جميع الحقوق محفوظة لـ{" "}
                <span className="text-primary font-semibold">STYLE SAT</span>
              </p>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                الخوادم متاحة 24/7
              </span>
              <span>|</span>
              <span>دعم فني فوري</span>
              <span>|</span>
              <span>ضمان الجودة</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating CTA */}
      <div className="fixed bottom-6 left-6 z-50">
        <a 
          href="https://wa.me/9647887833838" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 animate-pulse"
        >
          <MessageCircle className="w-7 h-7 text-white" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
