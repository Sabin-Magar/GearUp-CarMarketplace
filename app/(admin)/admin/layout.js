import { getAdmin } from '@/actions/admin';
import Header from '@/components/header';
import { notFound } from 'next/navigation';
import React from 'react'
import Sidebar from './_components/sidebar';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const AdminLayout = async ({ children }) => {

  const admin = await getAdmin();

  // If user not found in our db or not an admin, redirect to 404
  if (!admin.authorized) {
    return notFound();
  }

  return (
     <div className="h-full">
      <Header isAdminPage={true} />
      <div className="flex h-full w-56 flex-col top-20 fixed inset-y-0 z-50">
        <aside className="flex w-56 flex-col border-r bg-white shadow-sm">
          <Sidebar />
        </aside>
      </div>
      <main className="md:pl-56 pt-[80px] h-full">{children}</main>
    </div>
  );
}

export default AdminLayout