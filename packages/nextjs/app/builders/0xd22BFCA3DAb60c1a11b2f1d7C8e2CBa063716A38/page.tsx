"use client";

import Image from "next/image";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function BuilderProfile({ params }: { params: { address: string } }) {
  const address = params.address || "0xd22BFCA3DAb60c1a11b2f1d7C8e2CBa063716A38";

  const githubUrl = "https://github.com/0xsl0th";

  return (
    <div className="profile-container">
      <h1>My BuidlGuidl Profile</h1>

      <div className="avatar-section">
        <Image
          src="/builders/0xd22BFCA3DAb60c1a11b2f1d7C8e2CBa063716A38/avatar.jpg"
          alt="Profile Avatar"
          width={100}
          height={100}
          className="avatar"
        />
      </div>

      <div className="address-section">
        <p className="address">{address}</p>
      </div>

      <div className="bio-section">
        <h2>About Me</h2>
        <p className="bio-text">
          I come from a business background in tech and currently doing a masters in finance. My main interests revolve
          around DeFi protocols and exploring self-sovereignty concepts.
          <br />
          <br />
          I have some foundational knowledge in IT security (around OSCP level) and algorithmic trading experience and
          am currently working through the Cyfrin Updraft courses and taking my first steps into security auditing on
          CodeHawks.
          <br />
          <br />
          My ultimate goal is to establish myself as a security auditor in the blockchain space. Looking forward to
          building and learning alongside all of you!
          <br />
        </p>
      </div>

      <div className="social-links">
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="social-icon" size="2x" /> {/* Added size prop */}
        </a>
      </div>

      <style jsx>{`
        .profile-container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          font-family:
            system-ui,
            -apple-system,
            sans-serif;
          color: #fff;
          text-align: center;
        }

        h1 {
          margin-bottom: 20px;
          color: #fff;
          font-size: 2rem;
        }

        h2 {
          font-size: 1.5rem;
          margin-bottom: 15px;
          color: #ddd;
        }

        .avatar-section {
          display: flex;
          justify-content: center;
          margin-bottom: 20px;
        }

        .avatar {
          border-radius: 50%;
          border: 2px solid #fff;
        }

        .address-section {
          margin-bottom: 20px;
        }

        .address {
          font-family: monospace;
          background-color: #333;
          color: #fff;
          padding: 8px 12px;
          border-radius: 4px;
          display: inline-block;
          word-break: break-all;
        }

        .bio-section {
          margin-bottom: 30px;
        }

        .bio-text {
          white-space: pre-wrap;
          overflow-wrap: break-word;
          line-height: 1.8;
          font-size: 1rem;
          color: #fff;
          text-align: center;
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 20px;
        }

        .social-links a {
          color: #1da1f2;
          text-decoration: none;
          display: flex;
          align-items: center;
        }

        .social-links a:hover {
          text-decoration: underline;
        }

        .social-icon {
          margin-right: 8px;
          font-size: 2rem !important;
          width: auto !important;
          height: auto !important;
        }
      `}</style>
    </div>
  );
}
