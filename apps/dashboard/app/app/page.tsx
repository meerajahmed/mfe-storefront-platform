export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg border">
          <h2 className="text-gray-500 text-sm mb-1">Total Projects</h2>
          <p className="text-3xl font-bold">12</p>
        </div>
        <div className="bg-white p-6 rounded-lg border">
          <h2 className="text-gray-500 text-sm mb-1">Active Deployments</h2>
          <p className="text-3xl font-bold">8</p>
        </div>
      </div>
    </div>
  );
}