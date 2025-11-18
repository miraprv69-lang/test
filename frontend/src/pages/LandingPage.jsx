export default function LandingPage() {
  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section className="w-full bg-white py-16">
        <div className="container mx-auto px-6">
          
          <h1 className="text-4xl font-bold text-dark leading-snug mb-4">
            كل ما تحتاجه لتبدأ تجارتك الإلكترونية بسهولة
          </h1>

          <p className="text-gray-600 text-lg mb-6">
            أنشئ متجرك، أضف منتجاتك، وتتبع طلباتك بسهولة من خلال لوحة تحكم بسيطة وسهلة الاستخدام
          </p>

          <button className="px-8 py-3 text-white bg-primary rounded-xl text-lg hover:bg-primaryLight transition">
            ابدأ الآن
          </button>

        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="bg-canvas py-20">
        <div className="container mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-10">
            حلول متكاملة للتجارة الإلكترونية
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Card */}
            <div className="bg-white shadow-card p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4"></div>
              <h3 className="font-bold text-xl mb-2">إدارة المنتجات</h3>
              <p className="text-gray-600 text-sm">
                أضف المنتجات، عدّل الأسعار، وتابع المخزون بسهولة
              </p>
            </div>

            {/* Card */}
            <div className="bg-white shadow-card p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4"></div>
              <h3 className="font-bold text-xl mb-2">تتبع الطلبات</h3>
              <p className="text-gray-600 text-sm">
                تابع الطلبات من لحظة الشراء حتى الاستلام
              </p>
            </div>

            {/* Card */}
            <div className="bg-white shadow-card p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4"></div>
              <h3 className="font-bold text-xl mb-2">إعدادات مرنة</h3>
              <p className="text-gray-600 text-sm">
                تخصيص كامل لمتجرك وخيارات الدفع والشحن
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* PRICING PREVIEW SECTION */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-6">أسعار بسيطة وواضحة</h2>

          <p className="text-gray-600 mb-12">
            اختر الخطة المناسبة لبدء متجرك الآن
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-white shadow-card p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-2">الباقة الأساسية</h3>
              <p className="text-gray-600 mb-4 text-sm">مناسبة للبداية</p>
              <p className="text-4xl font-bold mb-4">10,000<span className="text-lg">د.ع</span></p>
              <button className="px-6 py-3 bg-primary text-white rounded-xl w-full">
                اختر الخطة
              </button>
            </div>

            <div className="bg-white shadow-card p-8 rounded-xl border-2 border-primary">
              <h3 className="text-xl font-bold mb-2">الباقة المتقدمة</h3>
              <p className="text-gray-600 mb-4 text-sm">الأكثر طلباً</p>
              <p className="text-4xl font-bold mb-4">20,000<span className="text-lg">د.ع</span></p>
              <button className="px-6 py-3 bg-primary text-white rounded-xl w-full">
                اختر الخطة
              </button>
            </div>

            <div className="bg-white shadow-card p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-2">الباقة الاحترافية</h3>
              <p className="text-gray-600 mb-4 text-sm">للشركات والمتاجر الكبيرة</p>
              <p className="text-4xl font-bold mb-4">40,000<span className="text-lg">د.ع</span></p>
              <button className="px-6 py-3 bg-primary text-white rounded-xl w-full">
                اختر الخطة
              </button>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
