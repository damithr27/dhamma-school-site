"use client";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-[#f8f5f0] px-6 py-10">

      {/* Title */}
      <h1 className="text-3xl font-bold text-amber-900 mb-2">
        Admin Dashboard
      </h1>
      <p className="text-slate-600 mb-8">Welcome back, Administrator!</p>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Students Card */}
        <div className="bg-white rounded-xl shadow p-6 border border-amber-200">
          <h3 className="text-lg font-semibold text-amber-900">Total Students</h3>
          <p className="text-4xl font-bold text-amber-600 mt-3">120</p>
          <p className="text-sm text-slate-500 mt-1">Demo data</p>
        </div>

        {/* Prefect Applications Card */}
        <div className="bg-white rounded-xl shadow p-6 border border-amber-200">
          <h3 className="text-lg font-semibold text-amber-900">
            Prefect Applications
          </h3>
          <p className="text-4xl font-bold text-amber-600 mt-3">18</p>
          <p className="text-sm text-slate-500 mt-1">Demo data</p>
        </div>

        {/* Pending Approval Card */}
        <div className="bg-white rounded-xl shadow p-6 border border-amber-200">
          <h3 className="text-lg font-semibold text-amber-900">Pending Approvals</h3>
          <p className="text-4xl font-bold text-amber-600 mt-3">5</p>
          <p className="text-sm text-slate-500 mt-1">Demo data</p>
        </div>
      </div>

      {/* Section: Quick Links */}
      <div className="mt-10 bg-white rounded-xl shadow p-6 border border-amber-200">
        <h2 className="text-xl font-semibold text-amber-900 mb-4">Quick Actions</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a
            href="/admin/students"
            className="block bg-[#C06014] hover:bg-[#a85312] text-white px-6 py-3 rounded-lg font-medium text-center shadow transition"
          >
            View Student List
          </a>

          <a
            href="/admin/prefects"
            className="block bg-[#C06014] hover:bg-[#a85312] text-white px-6 py-3 rounded-lg font-medium text-center shadow transition"
          >
            View Prefect Applications
          </a>
        </div>
      </div>

      {/* Footer */}
      <p className="text-center mt-10 text-sm text-slate-500">
        © {new Date().getFullYear()} Sri Bodhirajaraama Dhamma School – Admin Panel
      </p>
    </div>
  );
}
