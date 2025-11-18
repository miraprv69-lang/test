import Table from "../components/ui/Table";

export default function Reviews() {
  return (
    <div className="w-full">

      {/* PAGE TITLE */}
      <h1 className="text-2xl font-bold mb-6">التقييمات</h1>

      {/* REVIEWS TABLE */}
      <div className="bg-white shadow-card rounded-xl p-6">

        <Table
          headers={[
            "العميل",
            "المنتج",
            "التقييم",
            "المراجعة",
            "الحالة",
            "الإجراءات",
          ]}

          data={[
            [
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                  أ
                </div>
                <span>أحمد علي</span>
              </div>,

              "هاتف آيفون 14",

              // Stars
              <div className="flex text-yellow-400 text-lg">
                ★★★★☆
              </div>,

              "جودة ممتازة وسرعة في التوصيل!",

              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-xl text-xs">
                معتمد
              </span>,

              <button className="text-primary underline">عرض</button>,
            ],

            [
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                  س
                </div>
                <span>سارة يوسف</span>
              </div>,

              "سماعات سامسونغ",

              <div className="flex text-yellow-400 text-lg">
                ★★★☆☆
              </div>,

              "الصوت جيد لكن البطارية متوسطة",

              <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-xl text-xs">
                قيد المراجعة
              </span>,

              <button className="text-primary underline">عرض</button>,
            ],

            [
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                  م
                </div>
                <span>محمد كريم</span>
              </div>,

              "باور بانك",

              <div className="flex text-yellow-400 text-lg">
                ★★☆☆☆
              </div>,

              "لم يعجبني، الشحن بطيء جداً",

              <span className="px-3 py-1 bg-red-100 text-red-700 rounded-xl text-xs">
                مرفوض
              </span>,

              <button className="text-primary underline">عرض</button>,
            ],
          ]}
        />

      </div>

    </div>
  );
}
