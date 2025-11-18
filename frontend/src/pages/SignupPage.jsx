import { Link } from "react-router-dom";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      
      <div className="w-full max-w-md bg-white shadow-card rounded-2xl p-8">

        <h1 className="text-2xl font-bold text-center mb-2">
          إنشاء حساب جديد
        </h1>

        <p className="text-gray-600 text-center mb-8">
          سجّل الآن وابدأ باستخدام منصتنا بسهولة
        </p>

        {/* FORM */}
        <form className="space-y-6">

          {/* Full Name */}
          <div className="space-y-1">
            <label className="text-sm font-medium">الاسم الكامل</label>
            <Input type="text" placeholder="اسمك الكامل" />
          </div>

          {/* Email */}
          <div className="space-y-1">
            <label className="text-sm font-medium">البريد الإلكتروني</label>
            <Input type="email" placeholder="example@email.com" />
          </div>

          {/* Phone */}
          <div className="space-y-1">
            <label className="text-sm font-medium">رقم الهاتف</label>
            <Input type="text" placeholder="0770xxxxxxx" />
          </div>

          {/* Password */}
          <div className="space-y-1">
            <label className="text-sm font-medium">كلمة المرور</label>
            <Input type="password" placeholder="••••••••" />
          </div>

          {/* Signup Button */}
          <Button className="w-full py-3 text-lg">
            إنشاء حساب
          </Button>

        </form>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-600 mt-6">
          لديك حساب بالفعل؟{" "}
          <Link to="/login" className="text-primary font-medium hover:underline">
            تسجيل الدخول
          </Link>
        </p>

      </div>

    </div>
  );
}
