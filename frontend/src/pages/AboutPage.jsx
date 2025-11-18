export default function AboutPage() {
  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section className="py-16 bg-white text-center">
        <h1 className="text-4xl font-bold mb-4 text-dark">
          من نحن؟
        </h1>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          منصتنا توفر لك كل الأدوات التي تحتاجها لبدء متجرك الإلكتروني بسهولة 
          وإدارته بشكل احترافي دون تعقيد.
        </p>
      </section>

      {/* ABOUT TEXT SECTION */}
      <section className="py-20 bg-canvas">
        <div className="container mx-auto px-6 max-w-4xl text-center">

          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            نهدف إلى تقديم تجربة مستخدم بسيطة وسهلة تساعد أصحاب المتاجر 
            على التركيز على نمو أعمالهم بدلاً من التعقيدات التقنية.  
            نحن نؤمن بأن التجارة الإلكترونية يجب أن تكون متاحة للجميع، 
            لذلك قمنا بتصميم نظام متكامل يلبي جميع احتياجاتك سواء كنت 
            مبتدئاً أو لديك متجر كبير.
          </p>

        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            لماذا تختار منصتنا؟
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

            {/* CARD 1 */}
            <div className="bg-canvas shadow-card rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl mx-auto mb-6"></div>
              <h3 className="font-bold text-xl mb-2">سهولة الاستخدام</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                واجهة بسيطة وسلسة لتمكينك من إدارة كل شيء بسرعة.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-canvas shadow-card rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl mx-auto mb-6"></div>
              <h3 className="font-bold text-xl mb-2">دعم فني مستمر</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                فريق متخصص جاهز لمساعدتك في أي وقت.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-canvas shadow-card rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl mx-auto mb-6"></div>
              <h3 className="font-bold text-xl mb-2">ميزات متقدمة</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                الكثير من الأدوات الاحترافية لإدارة متجرك بشكل أفضل.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
