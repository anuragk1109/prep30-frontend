import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'Admin panel for managing the application',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        <aside className="w-64 bg-white shadow-md">
          <div className="p-4">
            <h1 className="text-xl font-bold">Admin Panel</h1>
            <nav className="mt-6">
              <ul className="space-y-2">
                <li><a href="/anuragisadmin/dashboard" className="block px-4 py-2 hover:bg-gray-100 rounded">Dashboard</a></li>
                <li><a href="/anuragisadmin/users" className="block px-4 py-2 hover:bg-gray-100 rounded">Users</a></li>
                <li><a href="/anuragisadmin/courses" className="block px-4 py-2 hover:bg-gray-100 rounded">Courses</a></li>
                <li><a href="/anuragisadmin/settings" className="block px-4 py-2 hover:bg-gray-100 rounded">Settings</a></li>
              </ul>
            </nav>
          </div>
        </aside>
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
