export default function PricingPage() {
  return (
    <div className="w-full">

      {/* HERO TITLE */}
      <section className="py-16 bg-white text-center">
        <h1 className="text-4xl font-bold mb-4 text-dark">
          خطط الأسعار
        </h1>

        <p className="text-gray-600 text-lg max-w-xl mx-auto">
          اختر الخطة المناسبة لاحتياجات متجرك وابدأ رحلتك الآن
        </p>
      </section>

      {/* PRICING CARDS */}
      <section className="py-20 bg-canvas">
        <div className="container mx-auto px-6">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* BASIC PLAN */}
            <div className="bg-white shadow-card rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold mb-2">الباقة الأساسية</h3>
              <p className="text-gray-600 text-sm mb-6">مناسبة للبداية</p>

              <p className="text-5xl font-bold mb-4">
                10,000 <span className="text-lg">د.ع</span>
              </p>

              <ul className="text-gray-600 text-sm space-y-3 mb-8">
                <li>إدارة المنتجات</li>
                <li>متابعة الطلبات</li>
                <li>لوحة تحكم سهلة</li>
              </ul>

              <button className="px-6 py-3 bg-primary text-white rounded-xl w-full">
                اختر الخطة
              </button>
            </div>

            {/* ADVANCED PLAN (HIGHLIGHTED) */}
            <div className="bg-white shadow-card border-2 border-primary rounded-2xl p-8 scale-105 text-center">
              <h3 className="text-xl font-bold mb-2">الباقة المتقدمة</h3>
              <p className="text-gray-600 text-sm mb-6">الأكثر استخداماً</p>

              <p className="text-5xl font-bold mb-4">
                20,000 <span className="text-lg">د.ع</span>
              </p>

              <ul className="text-gray-600 text-sm space-y-3 mb-8">
                <li>جميع مزايا الأساسية</li>
                <li>تقارير وتحليلات</li>
                <li>إدارة كوبونات</li>
                <li>دعم فني أسرع</li>
              </ul>

              <button className="px-6 py-3 bg-primary text-white rounded-xl w-full font-bold">
                اختر الخطة
              </button>
            </div>

            {/* PRO PLAN */}
            <div className="bg-white shadow-card rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold mb-2">الباقة الاحترافية</h3>
              <p className="text-gray-600 text-sm mb-6">للشركات والمتاجر الكبيرة</p>

              <p className="text-5xl font-bold mb-4">
                40,000 <span className="text-lg">د.ع</span>
              </p>

              <ul className="text-gray-600 text-sm space-y-3 mb-8">
                <li>كل مزايا المتقدمة</li>
                <li>مزايا إضافية للشركات</li>
                <li>دعم VIP</li>
              </ul>

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
