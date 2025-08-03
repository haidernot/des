import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "هل التطبيق يعمل على جميع الأجهزة؟",
      answer: "نعم، تطبيقنا متوافق مع جميع الأجهزة بما في ذلك الهواتف الذكية (iOS وAndroid)، التلفاز الذكي، الكمبيوتر، والأجهزة اللوحية. كما يدعم معظم أنواع أجهزة التلفاز الذكية مثل Samsung TV وLG TV وAndroid TV."
    },
    {
      question: "كيف أقوم بالتجديد؟",
      answer: "يمكنك التجديد بسهولة من خلال التطبيق أو موقعنا الإلكتروني. نرسل لك تذكيرات قبل انتهاء اشتراكك بأسبوع، ويمكنك الدفع عبر عدة طرق منها الفيزا، ماستركارد، أو التحويل البنكي. التجديد فوري ولا ينقطع البث."
    },
    {
      question: "هل هناك فترة تجريبية؟",
      answer: "نعم، نقدم تجربة مجانية لمدة 24 ساعة لجميع العملاء الجدد. خلال هذه الفترة يمكنك اختبار جميع القنوات والمميزات. إذا لم تكن راضياً، يمكنك إلغاء الاشتراك دون أي رسوم."
    },
    {
      question: "ما هي سرعة الإنترنت المطلوبة؟",
      answer: "للحصول على أفضل تجربة مشاهدة، ننصح بسرعة إنترنت لا تقل عن 10 ميجابت للجودة العادية، و25 ميجابت لجودة HD، و50 ميجابت لجودة 4K. التطبيق يتكيف تلقائياً مع سرعة الإنترنت لديك."
    },
    {
      question: "هل يمكنني مشاهدة القنوات على أكثر من جهاز؟",
      answer: "نعم، حسب الباقة التي تختارها. الباقة الشهرية تدعم جهاز واحد، باقة 3 شهور تدعم جهازين، والباقة السنوية تدعم 3 أجهزة متزامنة. يمكنك تسجيل الدخول على أجهزة متعددة والتبديل بينها."
    },
    {
      question: "ماذا لو واجهت مشكلة تقنية؟",
      answer: "فريق الدعم الفني متاح 24/7 عبر WhatsApp ومن خلال التطبيق. نقدم دعم سريع باللغة العربية لحل جميع المشاكل التقنية. معظم المشاكل يتم حلها خلال دقائق معدودة."
    },
    {
      question: "هل البث محمي وآمن؟",
      answer: "نعم، نستخدم أحدث تقنيات التشفير لحماية البث وبياناتك الشخصية. خوادمنا محمية ومراقبة 24/7. كما أننا نلتزم بسياسة خصوصية صارمة ولا نشارك بياناتك مع أي طرف ثالث."
    },
    {
      question: "هل يمكنني إلغاء الاشتراك في أي وقت؟",
      answer: "نعم، يمكنك إلغاء اشتراكك في أي وقت دون أي رسوم إضافية. ستستمر في الاستفادة من الخدمة حتى نهاية الفترة المدفوعة. نقدم أيضاً ضمان استرداد المال خلال أول 7 أيام."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">الأسئلة</span> <span className="gradient-text">الشائعة</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            إجابات على أكثر الأسئلة شيوعاً من عملائنا
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gradient-card border border-border/50 rounded-xl px-6 hover:border-primary/30 transition-all duration-300"
              >
                <AccordionTrigger className="text-right hover:no-underline hover:text-primary transition-colors duration-300 py-6 text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 space-y-4">
          <h3 className="text-2xl font-semibold text-foreground">
            لم تجد إجابة على سؤالك؟
          </h3>
          <p className="text-muted-foreground mb-6">
            تواصل معنا عبر WhatsApp وسنرد عليك خلال دقائق
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://wa.me/9647887833838" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 glow-shadow"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.886 3.488"/>
              </svg>
              تواصل عبر WhatsApp
            </a>
            <a 
              href="mailto:support@iptv-pro.com"
              className="inline-flex items-center gap-3 bg-card/50 backdrop-blur-sm border border-primary/30 hover:border-primary text-foreground px-8 py-4 rounded-xl font-semibold transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              أرسل بريد إلكتروني
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;