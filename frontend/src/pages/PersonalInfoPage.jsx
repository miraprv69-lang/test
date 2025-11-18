// src/pages/PersonalInfoPage.jsx
import React from 'react';

const PersonalInfoPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: update profile
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-black text-text-primary">
          المعلومات الشخصية
        </h1>
        <p className="text-sm text-text-secondary mt-1">
          حدث بيانات حسابك الشخصي المرتبطة بلوحة التحكم.
        </p>
      </div>

      <div className="bg-surface rounded-2xl border border-gray-100 shadow-md shadow-gray-100 p-6 sm:p-8">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="block text-sm font-bold text-text-primary">
                الاسم الكامل
              </label>
              <input
                type="text"
                className="app-input"
                placeholder="محمد علي حسن"
                defaultValue=""
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-bold text-text-primary">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                className="app-input"
                placeholder="example@boxsmart.iq"
              />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="block text-sm font-bold text-text-primary">
                رقم الهاتف
              </label>
              <input
                type="tel"
                className="app-input"
                placeholder="07xx xxx xxxx"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-bold text-text-primary">
                المدينة
              </label>
              <input
                type="text"
                className="app-input"
                placeholder="بغداد"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-bold text-text-primary">
              العنوان الكامل
            </label>
            <input
              type="text"
              className="app-input"
              placeholder="المنطقة / الشارع / رقم الدار"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3 justify-end pt-2">
            <button
              type="button"
              className="px-4 py-2.5 rounded-2xl border border-gray-200 text-xs font-bold text-text-secondary hover:bg-gray-50"
            >
              إلغاء
            </button>
            <button type="submit" className="app-button-primary w-auto px-6">
              حفظ التغييرات
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalInfoPage;
