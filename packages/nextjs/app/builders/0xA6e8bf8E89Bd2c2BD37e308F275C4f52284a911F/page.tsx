import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import { EnvelopeIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";

type SocialLink = {
  title: string;
  href: string;
  displayText: string;
  icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>;
  isExternal?: boolean;
};

const socialLinks: SocialLink[] = [
  {
    title: "Email",
    href: "mailto:samuelaleonomoh5@gmail.com",
    displayText: "samuelaleonomoh5@gmail.com",
    icon: EnvelopeIcon,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/samuel-aleonomoh-047495162/",
    displayText: "linkedin.com/in/samuel-aleonomoh",
    icon: GlobeAltIcon,
    isExternal: true,
  },
  {
    title: "GitHub",
    href: "https://github.com/Osiyomeoh",
    displayText: "github.com/Osiyomeoh",
    icon: GlobeAltIcon,
    isExternal: true,
  },
];

const SocialLinkCard: React.FC<SocialLink> = ({ title, href, displayText, icon: Icon, isExternal }) => (
  <div className="bg-base-100 shadow-md rounded-xl p-6 border border-base-300 hover:shadow-lg transition-shadow duration-200">
    <div className="flex items-center gap-4">
      <Icon className="h-8 w-8 text-secondary flex-shrink-0" />
      <div className="min-w-0">
        <h3 className="text-lg font-medium text-base-content">{title}</h3>
        <Link
          href={href}
          className="link link-hover text-base-content/80 text-sm truncate block"
          {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {displayText}
        </Link>
      </div>
    </div>
  </div>
);

const OsiyomeohPage: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-b from-base-100 to-base-200 min-h-screen">
      <div className="max-w-3xl w-full px-6 py-8">
        {/* Header Card */}
        <div className="bg-base-100 shadow-lg rounded-xl p-6 mb-6 border border-base-300 transform hover:scale-[1.02] transition-transform duration-200">
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full overflow-hidden mb-4 shadow-md">
              <Image
                src="https://avatars.githubusercontent.com/u/92280484?v=4"
                alt="Osiyomeoh Aleonomoh Profile Picture"
                width={80}
                height={80}
                className="object-cover"
              />
            </div>
            <h1 className="text-3xl font-bold text-base-content mb-2">Osiyomeoh Aleonomoh</h1>
            <Address address="0xA6e8bf8E89Bd2c2BD37e308F275C4f52284a911F" />
          </div>
        </div>

        {/* Bio Section */}
        <div className="bg-base-100 shadow-md rounded-xl p-6 mb-6 border border-base-300">
          <h2 className="text-xl font-semibold text-base-content mb-3 flex items-center gap-2">
            <span className="h-2 w-2 bg-secondary rounded-full"></span>About Me
          </h2>
          <p className="text-base-content/80 text-sm leading-relaxed">
            Passionate about problem-solving and innovation, I am Osiyomeoh Aleonomoh, a full-stack web developer,
            Solidity engineer, and Zero-Knowledge (ZK) expert. With expertise across PHP, Yii2 & Laravel frameworks,
            HTML5, CSS3, Vanilla JavaScript, Node.js, React, TypeScript, and Solidity, I excel in object-oriented
            programming (OOP) and have successfully deployed live projects on cloud platforms. My journey reflects a
            commitment to leadership, continuous learning, and staying at the forefront of Web3, blockchain, backend
            development, and fintech innovation. Driven to make a lasting impact, I am excited to continue bridging
            technology and business to solve real-world challenges globally.
          </p>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {socialLinks.map((link, index) => (
            <SocialLinkCard key={index} {...link} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OsiyomeohPage;
