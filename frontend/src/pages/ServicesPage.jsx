export default function ServicesPage() {
  return (
    <div className="w-full">

      {/* HERO TITLE */}
      <section className="py-16 bg-white text-center">
        <h1 className="text-4xl font-bold mb-4 text-dark">
          خدمات المنصة
        </h1>
        <p className="text-gray-600 text-lg max-w-xl mx-auto">
          جميع الأدوات التي تحتاجها لإدارة متجرك الإلكتروني بسهولة وباحترافية
        </p>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 bg-canvas">
        <div className="container mx-auto px-6">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

            {/* Service Card */}
            <div className="bg-white shadow-card rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl mx-auto mb-6"></div>
              <h3 className="font-bold text-xl mb-2">إدارة المنتجات</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                أضف المنتجات، حدّث الكميات والأسعار، وتابع المخزون بشكل يومي.
              </p>
            </div>

            {/* Service Card */}
            <div className="bg-white shadow-card rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl mx-auto mb-6"></div>
              <h3 className="font-bold text-xl mb-2">إدارة الطلبات</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                تتبع طلبات العملاء خطوة بخطوة حتى توصيل الطلب.
              </p>
            </div>

            {/* Service Card */}
            <div className="bg-white shadow-card rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl mx-auto mb-6"></div>
              <h3 className="font-bold text-xl mb-2">تحليلات الأداء</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                عرض تقارير تفصيلية عن المبيعات والعملاء والمنتجات الأكثر مبيعاً.
              </p>
            </div>

            {/* Service Card */}
            <div className="bg-white shadow-card rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl mx-auto mb-6"></div>
              <h3 className="font-bold text-xl mb-2">كوبونات وعروض</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                أنشئ كوبونات خصم لزيادة المبيعات وتشجيع العملاء.
              </p>
            </div>

            {/* Service Card */}
            <div className="bg-white shadow-card rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl mx-auto mb-6"></div>
              <h3 className="font-bold text-xl mb-2">إدارة العملاء</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                تصفّح سجل العملاء وتابع مشترياتهم ومعاملاتهم بسهولة.
              </p>
            </div>

            {/* Service Card */}
            <div className="bg-white shadow-card rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl mx-auto mb-6"></div>
              <h3 className="font-bold text-xl mb-2">إعدادات مرنة</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                خصص كل تفاصيل متجرك من اللغة إلى طرق الدفع والشحن.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
