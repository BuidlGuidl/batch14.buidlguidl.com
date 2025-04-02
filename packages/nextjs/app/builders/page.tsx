"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Address } from "~~/components/scaffold-eth";
import { useScaffoldEventHistory } from "~~/hooks/scaffold-eth";

type Builder = {
  address: string;
  hasPersonalPage: boolean;
  profilePath?: string;
};

// Separate component for builder card
function BuilderCard({ builder }: { builder: Builder }) {
  return (
    <div className="card bg-base-100 shadow overflow-hidden border border-base-300">
      <div className="card-body p-3">
        <div className="flex items-center gap-3 mb-1">
          <div>
            <div className="text-xs truncate">
              <Address address={builder.address} />
            </div>
          </div>
        </div>

        <div className="card-actions justify-end mt-1">
          {builder.hasPersonalPage ? (
            <Link href={builder.profilePath || `#`} className="btn btn-xs btn-primary">
              View
            </Link>
          ) : (
            <span className="text-xs text-base-content/60">No Profile</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  const { data: events } = useScaffoldEventHistory({
    contractName: "BatchRegistry",
    eventName: "CheckedIn",
    fromBlock: 314186263n, // 10 blocks before contract deployment (block 314186273)
    chainId: 42161,
  });

  const [profilePages, setProfilePages] = useState<Set<string>>(new Set());

  // Check which profile pages exist
  useEffect(() => {
    const checkProfilePages = async () => {
      if (!events) return;

      const uniqueAddresses: string[] = [];
      events.forEach(event => {
        const address = event.args.builder;
        if (!address) return;
        if (!uniqueAddresses.find(addr => address === addr)) uniqueAddresses.push(address);
      });

      const existingPages = new Set<string>();

      // Check each address for a profile page
      for (const address of uniqueAddresses) {
        try {
          const response = await fetch(`/builders/${address}`);
          if (response.ok) {
            existingPages.add(address);
          }
        } catch (error) {
          console.error(`Error checking profile for ${address}:`, error);
        }
      }

      setProfilePages(existingPages);
    };

    checkProfilePages();
  }, [events]);

  const builders = useMemo<Builder[]>(() => {
    if (!events) return [];

    // Filter out duplicate addresses to get unique ones
    const uniqueAddresses: string[] = [];
    events.forEach(event => {
      const address = event.args.builder;
      if (!address) return;
      if (!uniqueAddresses.find(addr => address === addr)) uniqueAddresses.push(address);
    });

    // Transform addresses into builder objects
    const buildersList = uniqueAddresses.map(address => ({
      address,
      // Check if the builder has a personal page by checking if their profile exists
      hasPersonalPage: profilePages.has(address),
      // Store the profile path for navigation
      profilePath: `/builders/${address}`,
    }));

    // Filter out any undefined entries
    return buildersList.filter(builder => !!builder);
  }, [events, profilePages]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-base-200 to-base-300">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 text-transparent bg-clip-text">
            Batch 14 Builders
          </h1>
        </div>

        {/* Builders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {builders.map((builder, id) => (
            <BuilderCard key={id} builder={builder} />
          ))}
        </div>
      </div>
    </div>
  );
}
