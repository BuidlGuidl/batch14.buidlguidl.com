"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { EnvelopeIcon, GlobeAltIcon } from "@heroicons/react/24/outline";

const BuilderPage: NextPage = () => {
  return (
    <div className="flex items-center flex-col flex-grow pt-10">
      <div className="max-w-2xl w-full px-5">
        {/* Avatar and Name */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-32 h-32 rounded-full bg-base-300 flex items-center justify-center mb-4">
            <span className="text-4xl">🧑‍💻</span> {/* Simple emoji avatar */}
          </div>
          <h1 className="text-3xl font-bold">Osiyomeoh</h1>
          <p className="text-base-content/70">0xA6e8bf8E89Bd2c2BD37e308F275C4f52284a911F</p>
        </div>

        {/* Bio */}
        <div className="bg-base-100 rounded-xl p-6 mb-6">
          <h2 className="text-xl font-semibold mb-2">About Me</h2>
          <p className="text-base-content/80">
            I&apos;m Osiyomeoh, a builder passionate about decentralized technology. I enjoy creating innovative
            solutions and contributing to the Web3 ecosystem. Always excited to learn and collaborate!
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-base-100 rounded-xl p-6 flex items-center gap-3">
            <EnvelopeIcon className="h-6 w-6 text-secondary" />
            <div>
              <p className="font-medium">Contact</p>
              <Link href="mailto:samuelaleonomoh5@gmail.com" className="link">
                samuelaleonomoh5@gmail.com
              </Link>
            </div>
          </div>
          <div className="bg-base-100 rounded-xl p-6 flex items-center gap-3">
            <GlobeAltIcon className="h-6 w-6 text-secondary" />
            <div>
              <p className="font-medium">LinkedIn</p>
              <Link href="https://www.linkedin.com/in/samuel-aleonomoh-047495162/" target="_blank" className="link">
                linkedin.com/in/samuel-aleonomoh
              </Link>
            </div>
          </div>
          <div className="bg-base-100 rounded-xl p-6 flex items-center gap-3">
            <GlobeAltIcon className="h-6 w-6 text-secondary" />
            <div>
              <p className="font-medium">GitHub</p>
              <Link href="https://github.com/Osiyomeoh" target="_blank" className="link">
                github.com/Osiyomeoh
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuilderPage;
