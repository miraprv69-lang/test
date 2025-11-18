import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white shadow-card rounded-2xl p-8">

        <h1 className="text-2xl font-bold text-center mb-2">
          تسجيل الدخول
        </h1>

        <p className="text-gray-600 text-center mb-8">
          أهلاً بعودتك!
        </p>

        {/* FORM */}
        <form className="space-y-6">

          <div className="space-y-1">
            <label className="text-sm font-medium">البريد الإلكتروني</label>
            <Input type="email" placeholder="example@email.com" />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium">كلمة المرور</label>
            <Input type="password" placeholder="••••••••" />
          </div>

          <div className="flex justify-between">
            <Link className="text-sm text-primary hover:underline">
              نسيت كلمة المرور؟
            </Link>
          </div>

          <Button className="w-full py-3 text-lg">
            تسجيل الدخول
          </Button>

        </form>

        {/* SIGNUP LINK */}
        <p className="text-center text-sm text-gray-600 mt-6">
          ليس لديك حساب؟{" "}
          <Link className="text-primary font-medium" to="/signup">
            إنشاء حساب جديد
          </Link>
        </p>

      </div>

    </div>
  );
}
