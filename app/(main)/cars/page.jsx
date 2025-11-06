
import React from 'react'

import { getCarFilters } from "@/actions/car-listing";

import { CarFilters } from './_components/car-filter';
import { CarListings } from './_components/car-listing';
import Link from 'next/link';

export const metadata = {
  title: "Cars | GearUp",
  description: "Browse and search for your dream car",
};

export default async function CarsPage() {
  // Fetch filters data on the server
  const filtersData = await getCarFilters();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-6xl mb-4 highlight-title"><Link href="/cars">Browse Cars</Link></h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Section */}
        <div className="w-full lg:w-80 flex-shrink-0">
          <CarFilters filters={filtersData.data} />
        </div>

        {/* Car Listings */}
        <div className="flex-1">
          <CarListings />
        </div>
      </div>
    </div>
  );
}
