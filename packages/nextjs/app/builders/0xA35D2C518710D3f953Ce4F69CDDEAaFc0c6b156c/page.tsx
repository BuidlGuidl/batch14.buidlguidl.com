import React from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { NextPage } from "next";
import { Address } from "~~/components/scaffold-eth";

const name = "Joseph Aleonomoh";
const nickname = "LEO";
const description =
  "Hello! I am a dedicated blockchain and AI enthusiast with a strong interest in decentralized technologies and their applications. My experience includes working on DeFi projects, developing smart contracts, and exploring AI-driven solutions. I’m passionate about continuous learning and collaboration, and I’m always excited to connect with others who share my interests. If you’d like to discuss ideas, collaborate on projects, or simply exchange knowledge, I’d love to hear from you!";
const walletAddress = "0xA35D2C518710D3f953Ce4F69CDDEAaFc0c6b156c";
const avatarUrl =
  "https://static.vecteezy.com/system/resources/previews/002/469/825/non_2x/black-and-white-line-art-of-the-front-of-the-lion-head-it-is-sign-of-leo-zodiac-good-use-for-symbol-mascot-icon-avatar-tattoo-t-shirt-design-logo-or-any-design-free-vector.jpg";

const socialLinks = [
  {
    platform: "twitter",
    url: "https://x.com/easybrane",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/X_icon_2.svg/1024px-X_icon_2.svg.png",
  },
  {
    platform: "github",
    url: "https://github.com/leojay-net",
    icon: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
  },
  {
    platform: "linkedin",
    url: "https://www.linkedin.com/in/joseph-aleonomoh/",
    icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
  },
  {
    platform: "BuidlGuidl",
    url: "https://app.buidlguidl.com/builders/0xA35D2C518710D3f953Ce4F69CDDEAaFc0c6b156c",
    icon: "https://pbs.twimg.com/profile_images/1742235046038114304/xKk0nNN0_400x400.jpg",
  },
];

const JosephAleonomohWeb3Profile: NextPage = () => {
  return (
    <div
      className={`w-full max-w-4xl mx-auto dark:bg-gray-800 dark:text-gray-100 bg-white text-gray-800 rounded-xl shadow-md overflow-hidden transition-colors duration-200`}
    >
      {/* Avatar and Name Section */}
      <div className="px-6 md:px-10 py-8">
        <div className="flex flex-col items-center md:flex-row md:gap-6">
          {/* Avatar */}
          <div
            className={`w-28 h-28 rounded-full border-4 dark:border-gray-700 border-gray-200 shadow-lg overflow-hidden`}
          >
            <Image src={avatarUrl} width={500} height={500} alt={name} className="w-full h-full object-cover" />
          </div>

          {/* Name and Wallet Address */}
          <div className="mt-4 md:mt-0 text-center md:text-left">
            <h1 className="text-2xl font-bold">
              {name} <span className={"dark:text-gray-400 text-gray-500 text-lg"}>{nickname}</span>
            </h1>
            <div className="flex items-center gap-2 mt-1">
              <div
                className={
                  "px-2 py-1 dark:bg-gray-700 dark:text-blue-400 bg-gray-100 text-blue-600 rounded-full text-xs font-medium flex items-center"
                }
              >
                <Address address={walletAddress} />
              </div>
              <a
                href={`https://etherscan.io/address/${walletAddress}`}
                target="_blank"
                rel="noopener noreferrer"
                className={"dark:text-blue-400 dark:hover:text-blue-300 text-blue-600 hover:text-blue-500"}
              >
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bio Section */}
      <div className="px-6 md:px-10 pb-6">
        <div className={`dark:bg-gray-700 bg-gray-50 rounded-lg p-6 text-center`}>
          <h2 className={`text-lg font-semibold mb-3 dark:text-blue-400 text-blue-600`}>About</h2>
          <p className={`dark:text-gray-300 text-gray-700 leading-relaxed mx-auto max-w-2xl text-justify`}>
            {description}
          </p>
        </div>
      </div>

      {/* Socials Section */}
      <div className="px-6 md:px-10 pb-8">
        <div className={`dark:bg-gray-700 bg-gray-50 rounded-lg p-6`}>
          <h2 className={`text-lg font-semibold mb-4 dark:text-blue-400 text-blue-600 text-center`}>Connect</h2>
          <div className="flex gap-3 mx-auto max-w-xs justify-center gap-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className={`w-10 h-10 dark:bg-gray-600 bg-white rounded-lg flex items-center justify-center dark:text-gray-200 text-gray-700 hover:scale-150 transition-transform duration-300`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${link.platform} profile`}
              >
                <Image
                  src={link.icon}
                  alt={link.platform}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JosephAleonomohWeb3Profile;
