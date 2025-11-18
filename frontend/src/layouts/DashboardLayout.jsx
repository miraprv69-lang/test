import Sidebar from "../components/Sidebar";
import StoreHeader from "../components/StoreHeader";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-canvas">

      <Sidebar />

      <main className="flex-1 p-6">
        <StoreHeader />
        <Outlet />
      </main>

    </div>
  );
}
