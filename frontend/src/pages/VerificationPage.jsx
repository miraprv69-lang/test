import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { Link } from "react-router-dom";

export default function VerificationPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white shadow-card rounded-2xl p-8">

        <h1 className="text-2xl font-bold text-center mb-2">
          رمز التفعيل
        </h1>

        <p className="text-gray-600 text-center mb-8">
          لقد أرسلنا رمز التحقق إلى بريدك الإلكتروني
        </p>

        {/* OTP Inputs */}
        <div className="flex gap-3 justify-center mb-8">
          <Input maxLength={1} className="w-12 h-14 text-center text-xl" />
          <Input maxLength={1} className="w-12 h-14 text-center text-xl" />
          <Input maxLength={1} className="w-12 h-14 text-center text-xl" />
          <Input maxLength={1} className="w-12 h-14 text-center text-xl" />
        </div>

        <Button className="w-full py-3 text-lg mb-4">
          تأكيد
        </Button>

        <p className="text-center text-gray-600 text-sm">
          لم يصلك الرمز؟
          <button className="text-primary font-medium ml-1 hover:underline">
            إعادة الإرسال
          </button>
        </p>

      </div>

    </div>
  );
}
