import React from 'react'
import { TestDrivesList } from './_components/test-drive-list';

export const metadata = {
  title: "Test Drives | GearUp Admin",
  description: "Manage test drive bookings",
};

export default function TestDrivePage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Test Drive Management</h1>
      <TestDrivesList />
    </div>
  );
}