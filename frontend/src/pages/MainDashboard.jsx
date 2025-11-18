// src/pages/MainDashboard.jsx
import React from 'react';
import {
  RiShoppingBag3Line,
  RiMoneyDollarCircleLine,
  RiUser3Line,
  RiPieChart2Line,
} from 'react-icons/ri';

const stats = [
  {
    id: 1,
    label: 'إجمالي الطلبات اليوم',
    value: '32 طلب',
    change: '+12% عن أمس',
    icon: RiShoppingBag3Line,
    chip: 'اليوم',
  },
  {
    id: 2,
    label: 'إجمالي المبيعات',
    value: '1,250,000 د.ع',
    change: '+8% هذا الأسبوع',
    icon: RiMoneyDollarCircleLine,
    chip: 'هذا الأسبوع',
  },
  {
    id: 3,
    label: 'العملاء النشطين',
    value: '214',
    change: '+24 عميل جديد',
    icon: RiUser3Line,
    chip: 'هذا الشهر',
  },
  {
    id: 4,
    label: 'نسبة إتمام الطلبات',
    value: '92%',
    change: 'مستقر',
    icon: RiPieChart2Line,
    chip: 'جميع الأوقات',
  },
];

const recentOrders = [
  { id: '#1023', name: 'محمد علي حسن', total: '27,000 د.ع', status: 'واصل', date: '2023-10-02' },
  { id: '#1022', name: 'سارة عليها', total: '227,000 د.ع', status: 'قيد المعالجة', date: '2023-10-02' },
  { id: '#1021', name: 'محمد خالد', total: '247,000 د.ع', status: 'راجع', date: '2023-10-01' },
];

const statusClasses = {
  'واصل': 'bg-green-50 text-green-700 border-green-100',
  'راجع': 'bg-red-50 text-red-700 border-red-100',
  'قيد المعالجة': 'bg-yellow-50 text-yellow-700 border-yellow-100',
};

const MainDashboard = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-text-primary">
            لوحة التحكم الرئيسية
          </h1>
          <p className="text-text-secondary mt-1 font-medium">
            نظرة عامة سريعة على أداء متجرك وطلباتك الأخيرة.
          </p>
        </div>

        <div className="flex gap-2">
          <button className="app-button-secondary w-auto px-5 py-2.5 text-sm">
            تحميل تقرير
          </button>
          <button className="app-button-primary w-auto px-5 py-2.5 text-sm">
            أضف منتج جديد
          </button>
        </div>
      </div>

      {/* Stats cards */}
      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map(({ id, label, value, change, icon: Icon, chip }) => (
          <div
            key={id}
            className="bg-surface rounded-2xl border border-gray-100 shadow-md shadow-gray-100 p-5 flex flex-col gap-4"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <Icon className="text-xl" />
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold uppercase text-text-secondary">
                    {label}
                  </p>
                  <p className="mt-1 text-2xl font-black text-text-primary">
                    {value}
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-50 text-[11px] font-bold text-text-secondary border border-gray-100">
                {chip}
              </span>
            </div>
            <p className="text-xs font-medium text-emerald-600">
              {change}
            </p>
          </div>
        ))}
      </section>

      {/* Content grid */}
      <section className="grid gap-6 lg:grid-cols-3">
        {/* Recent orders table */}
        <div className="lg:col-span-2 bg-surface rounded-2xl border border-gray-100 shadow-md shadow-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-black text-text-primary">الطلبات الأخيرة</h2>
              <p className="text-xs text-text-secondary mt-1">
                آخر الطلبات التي تم تسجيلها في متجرك.
              </p>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-right">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  <th className="px-6 py-3 text-xs font-extrabold text-gray-500 uppercase tracking-wider">رقم الطلب</th>
                  <th className="px-6 py-3 text-xs font-extrabold text-gray-500 uppercase tracking-wider">العميل</th>
                  <th className="px-6 py-3 text-xs font-extrabold text-gray-500 uppercase tracking-wider">المجموع</th>
                  <th className="px-6 py-3 text-xs font-extrabold text-gray-500 uppercase tracking-wider">الحالة</th>
                  <th className="px-6 py-3 text-xs font-extrabold text-gray-500 uppercase tracking-wider">التاريخ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {recentOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-mono text-text-secondary">{order.id}</td>
                    <td className="px-6 py-4 text-sm font-bold text-text-primary">{order.name}</td>
                    <td className="px-6 py-4 text-sm text-text-secondary">{order.total}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-3 py-1 text-xs font-bold rounded-full border ${statusClasses[order.status] || ''}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-text-secondary">{order.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Sales summary / fake chart */}
        <div className="bg-surface rounded-2xl border border-gray-100 shadow-md shadow-gray-100 p-6 flex flex-col gap-5">
          <div>
            <h2 className="text-lg font-black text-text-primary">ملخص المبيعات</h2>
            <p className="text-xs text-text-secondary mt-1">
              أداء المبيعات في آخر ٧ أيام.
            </p>
          </div>

          {/* Simple bar chart placeholder */}
          <div className="flex items-end gap-3 h-40">
            {[45, 60, 35, 80, 55, 70, 50].map((value, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className="w-8 rounded-xl bg-primary/20 overflow-hidden flex items-end justify-center"
                  style={{ height: '100%' }}
                >
                  <div
                    className="w-full bg-primary rounded-t-xl"
                    style={{ height: `${value}%` }}
                  />
                </div>
                <span className="text-[11px] text-text-secondary font-medium">
                  {['س', 'ح', 'ن', 'ث', 'ر', 'ج', 'س'][idx]}
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between text-xs text-text-secondary mt-1">
            <span>متوسط يومي: <span className="font-bold text-text-primary">175,000 د.ع</span></span>
            <span>أفضل يوم: <span className="font-bold text-emerald-600">+22%</span></span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainDashboard;
