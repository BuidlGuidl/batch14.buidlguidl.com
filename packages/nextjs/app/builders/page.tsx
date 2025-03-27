"use client";

import { useEffect, useRef, useState } from "react";
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
  // Map of builder addresses to their profile image paths
  profileImageMap?: Record<string, string>;
};

const KNOWN_PROFILES = [
  "0x78F348Dc5De2e9f066FAAa0bfD66d397a9260A43",
  "0xA35D2C518710D3f953Ce4F69CDDEAaFc0c6b156c",
  "0xC4Aad525854Cc8d21122Bee8CcC1d9c3cEcBb859",
  "0xcC6eDeB501BbD8AD9E028BDe937B63Cdd64A1D91",
  "0xd22BFCA3DAb60c1a11b2f1d7C8e2CBa063716A38",
  "0xe1DfD545a57721FCC2b7433c5Eb657AB3B851Bf7",
];

// Map of builder addresses to their profile images
const PROFILE_IMAGE_MAP: Record<string, string> = {
  "0x78F348Dc5De2e9f066FAAa0bfD66d397a9260A43": "/0x7.jpg",
  "0xA35D2C518710D3f953Ce4F69CDDEAaFc0c6b156c":
    "https://static.vecteezy.com/system/resources/previews/002/469/825/non_2x/black-and-white-line-art-of-the-front-of-the-lion-head-it-is-sign-of-leo-zodiac-good-use-for-symbol-mascot-icon-avatar-tattoo-t-shirt-design-logo-or-any-design-free-vector.jpg",
  "0xC4Aad525854Cc8d21122Bee8CcC1d9c3cEcBb859": "/krishna-profile.png",
  "0xcC6eDeB501BbD8AD9E028BDe937B63Cdd64A1D91": "/agooniavatar.png",
  "0xd22BFCA3DAb60c1a11b2f1d7C8e2CBa063716A38": "/builders/0xd22BFCA3DAb60c1a11b2f1d7C8e2CBa063716A38/avatar.jpg",
  "0xe1DfD545a57721FCC2b7433c5Eb657AB3B851Bf7":
    "https://avatars.githubusercontent.com/u/31843278?s=400&u=e11dfd17649cf868c737ff5fc526d88a55d5eb1d&v=4",
  // For other builders, i have used the generated avatars
};

// Map of builder addresses to their real names
const BUILDER_NAMES_MAP: Record<string, string> = {
  "0x78F348Dc5De2e9f066FAAa0bfD66d397a9260A43": "Tejas Sandwar",
  "0xA35D2C518710D3f953Ce4F69CDDEAaFc0c6b156c": "Joseph Aleonomoh",
  "0xC4Aad525854Cc8d21122Bee8CcC1d9c3cEcBb859": "Krishna Singh",
  "0xcC6eDeB501BbD8AD9E028BDe937B63Cdd64A1D91": "Agooni",
  "0xd22BFCA3DAb60c1a11b2f1d7C8e2CBa063716A38": "Enrique",
  "0xe1DfD545a57721FCC2b7433c5Eb657AB3B851Bf7": "Huilén Canullán",
  // For other builders, i have referred them as "Builder"
};

export default function Page() {
  const [builders, setBuilders] = useState([] as Builder[]);
  const [isLoading, setIsLoading] = useState(true);
  const [builderProfiles, setBuilderProfiles] = useState<string[]>([]);
  const [profileImageMap, setProfileImageMap] = useState<Record<string, string>>({});
  const [builderNamesMap, setBuilderNamesMap] = useState<Record<string, string>>({});
  const elementRef = useRef(null);

  const { data: events } = useScaffoldEventHistory({
    contractName: "BatchRegistry",
    eventName: "CheckedIn",
    fromBlock: 0n,
    chainId: 42161,
  });

  useEffect(() => {
    const checkBuilderProfiles = async () => {
      try {
        setBuilderProfiles(KNOWN_PROFILES);
        setProfileImageMap(PROFILE_IMAGE_MAP);
        setBuilderNamesMap(BUILDER_NAMES_MAP);
        console.log("Found builder profiles:", KNOWN_PROFILES);
      } catch (error) {
        console.error("Error checking builder profiles:", error);
      }
    };

    checkBuilderProfiles();
  }, []);

  useEffect(() => {
    if (elementRef.current) {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const fetchBuilders = async () => {
      if (!events) return;

      // Filter out duplicate addresses
      const filteredAddresses: string[] = [];
      events.forEach(event => {
        const address = event.args.builder;
        if (!address) return;
        if (!filteredAddresses.find(addr => address === addr)) filteredAddresses.push(address);
      });

      const builders = await Promise.all(
        filteredAddresses.map(async address => {
          if (address)
            return {
              address,
              // Check if the builder has a personal page
              hasPersonalPage: !!builderProfiles.find(bp => bp.toLowerCase() === address.toLowerCase()),
              // Store the profile path for navigation
              profilePath: `/builders/${address}`,
              // Used real name if available, otherwise used Builder
              name: builderNamesMap[address] || "Builder",
              // Use profile image if available, otherwise fallback to generated avatar
              avatarUrl: profileImageMap[address] || `https://effigy.im/a/${address}.svg`,
            };
        }),
      );
      setBuilders(
        builders
          .filter(builder => !!builder)
          // Sort by personal page availability
          .sort((a, b) => +(b.hasPersonalPage === true) - +(a.hasPersonalPage === true)),
      );
    };

    fetchBuilders().catch(console.error);
  }, [events, builderProfiles, builderNamesMap, profileImageMap]);

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
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mb-4"></div>
            <p className="text-xl font-medium">Loading builders...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {builders.map((builder, id) => (
              <div
                key={id}
                className="card bg-base-100 shadow hover:shadow-md transition-all duration-300 overflow-hidden border border-transparent hover:border-primary"
              >
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
        )}

        {/* Empty State */}
        {!isLoading && builders.length === 0 && (
          <div className="text-center py-16">
            <h1 className="text-5xl font-extrabold mb-4 animate-text bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              Meet the Builders of Batch 14
            </h1>

            <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
              The brightest minds building the future of web3. Explore their profiles and see what they&apos;re
              creating!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
