"use client";

import { useMemo, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Address } from "~~/components/scaffold-eth";
import { useScaffoldEventHistory } from "~~/hooks/scaffold-eth";

type Builder = {
  address: string;
  hasPersonalPage: boolean;
  profilePath?: string;
  name?: string;
  avatarUrl?: string;
};

// Consolidated builder profiles in a single map
const BUILDER_PROFILES: Record<string, { name: string; avatarUrl: string }> = {
  "0x78F348Dc5De2e9f066FAAa0bfD66d397a9260A43": {
    name: "Tejas Sandwar",
    avatarUrl: "/0x7.jpg",
  },
  "0xA35D2C518710D3f953Ce4F69CDDEAaFc0c6b156c": {
    name: "Joseph Aleonomoh",
    avatarUrl:
      "https://static.vecteezy.com/system/resources/previews/002/469/825/non_2x/black-and-white-line-art-of-the-front-of-the-lion-head-it-is-sign-of-leo-zodiac-good-use-for-symbol-mascot-icon-avatar-tattoo-t-shirt-design-logo-or-any-design-free-vector.jpg",
  },
  "0xC4Aad525854Cc8d21122Bee8CcC1d9c3cEcBb859": {
    name: "Krishna Singh",
    avatarUrl: "/krishna-profile.png",
  },
  "0xcC6eDeB501BbD8AD9E028BDe937B63Cdd64A1D91": {
    name: "Agooni",
    avatarUrl: "/agooniavatar.png",
  },
  "0xd22BFCA3DAb60c1a11b2f1d7C8e2CBa063716A38": {
    name: "Enrique",
    avatarUrl: "/builders/0xd22BFCA3DAb60c1a11b2f1d7C8e2CBa063716A38/avatar.jpg",
  },
  "0xe1DfD545a57721FCC2b7433c5Eb657AB3B851Bf7": {
    name: "Huilén Canullán",
    avatarUrl: "https://avatars.githubusercontent.com/u/31843278?s=400&u=e11dfd17649cf868c737ff5fc526d88a55d5eb1d&v=4",
  },
  "0xA6e8bf8E89Bd2c2BD37e308F275C4f52284a911F": {
    name: "Osiyomeoh Aleonomoh",
    avatarUrl: "https://avatars.githubusercontent.com/u/92280484?v=4",
  },
};

export default function Page() {
  const elementRef = useRef(null);

  const { data: events } = useScaffoldEventHistory({
    contractName: "BatchRegistry",
    eventName: "CheckedIn",
    fromBlock: 0n,
    chainId: 42161,
  });

  const builders = useMemo<Builder[]>(() => {
    if (!events) return [];

    // Filter out duplicate addresses
    const filteredAddresses: string[] = [];
    events.forEach(event => {
      const address = event.args.builder;
      if (!address) return;
      if (!filteredAddresses.find(addr => address === addr)) filteredAddresses.push(address);
    });

    // Transform addresses into builder objects
    const buildersList = filteredAddresses.map(address => ({
      address,
      // Check if the builder has a personal page
      hasPersonalPage: !!Object.keys(BUILDER_PROFILES).find(bp => bp.toLowerCase() === address.toLowerCase()),
      // Store the profile path for navigation
      profilePath: `/builders/${address}`,
      // Used real name if available, otherwise used Builder
      name: BUILDER_PROFILES[address]?.name || "Builder",
      // Use profile image if available, otherwise fallback to generated avatar
      avatarUrl: BUILDER_PROFILES[address]?.avatarUrl || `https://effigy.im/a/${address}.svg`,
    }));

    // Filter out any undefined entries and sort by personal page availability
    return buildersList
      .filter(builder => !!builder)
      .sort((a, b) => +(b.hasPersonalPage === true) - +(a.hasPersonalPage === true));
  }, [events]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-base-200 to-base-300">
      <div className="container mx-auto px-4 py-12" ref={elementRef}>
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 text-transparent bg-clip-text">
            Batch 14 Builders
          </h1>
        </div>

        {/* Builders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {builders.map((builder, id) => (
            <div key={id} className="card bg-base-100 shadow overflow-hidden border border-base-300">
              <div className="card-body p-3">
                <div className="flex items-center gap-3 mb-1">
                  {/* Avatar image */}
                  <div className="avatar">
                    <div className="w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-1 overflow-hidden">
                      {builder.avatarUrl &&
                        (builder.avatarUrl.startsWith("/") ? (
                          <Image
                            src={builder.avatarUrl}
                            alt={`${builder.name}'s avatar`}
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <Image
                            src={builder.avatarUrl}
                            alt={`${builder.name}'s avatar`}
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                          />
                        ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-sm">{builder.name}</h3>
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
                    <button className="btn btn-xs btn-outline" disabled>
                      No Profile
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
