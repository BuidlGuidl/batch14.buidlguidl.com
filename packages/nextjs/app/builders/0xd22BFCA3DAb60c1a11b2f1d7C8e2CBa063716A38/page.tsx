"use client";

// Required for Address component's client-side features
import Image from "next/image";
import { Address } from "../../../components/scaffold-eth/Address/Address";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function EnriqueProfile() {
  const address = "0xd22BFCA3DAb60c1a11b2f1d7C8e2CBa063716A38";
  const githubUrl = "https://github.com/0xSl0th";

  return (
    <div className="max-w-[600px] mx-auto p-5 font-sans text-white text-center">
      <h1 className="mb-5 text-white text-3xl">My BuidlGuidl Profile: 0xsl0th</h1>

      <div className="flex justify-center mb-5">
        <Image
          src="/builders/0xd22BFCA3DAb60c1a11b2f1d7C8e2CBa063716A38/avatar.jpg"
          alt="Profile Avatar"
          width={100}
          height={100}
          className="rounded-full border-2 border-white"
        />
      </div>

      <div className="mb-5 flex justify-center">
        <Address address={address} size="base" />
      </div>

      <div className="mb-14">
        <br />
        <h2 className="text-2xl mb-4 text-gray-300">About Me</h2>
        <div className="whitespace-pre-wrap break-words leading-7 text-base text-white text-center">
          <div>
            I come from a business background in tech and currently doing a masters in finance. My main interests
            revolve around DeFi protocols and exploring self-sovereignty concepts.
          </div>
          <br></br>
          <div>
            I have some foundational knowledge in IT security (around OSCP level) and algorithmic trading experience and
            am currently working through the Cyfrin Updraft courses and taking my first steps into security auditing on
            CodeHawks.
          </div>
          <br></br>
          <div>
            My ultimate goal is to establish myself as a security auditor in the blockchain space. Looking forward to
            building and learning alongside all of you!
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-5">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 no-underline flex items-center hover:underline"
        >
          <FontAwesomeIcon icon={faGithub} className="mr-2 text-3xl w-auto h-auto" />
        </a>
      </div>
    </div>
  );
}
