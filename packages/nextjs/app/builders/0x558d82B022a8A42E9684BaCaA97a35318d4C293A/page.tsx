"use client";

import Image from "next/image";
import { Address } from "~~/components/scaffold-eth";

export default function ProfileCard() {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-blue-300 via-white to-gray-400 dark:from-gray-900 dark:via-black dark:to-gray-700 transition-colors duration-500 flex justify-center items-center">
      <div className="relative w-[90%] max-w-[600px] h-auto bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
        {/* Card Header */}
        <div className="flex justify-center mt-4">
          <div className="w-32 h-32 md:w-32 md:h-32 border-4 border-gray-800 dark:border-white rounded-full overflow-hidden">
            <Image
              src="https://avatars.githubusercontent.com/u/15916181?v=4"
              alt="Profile Picture"
              width={128}
              height={128}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        {/* Card Content */}
        <div className="p-4 pt-2 md:p-2 text-center">
          <h1 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-200 m-1">Bagusino</h1>
          <p className="text-sm md:text-md text-gray-600 dark:text-gray-400 m-0">Multiplatform Developer</p>
          <div className="flex justify-center mt-2 space-x-2">
            <Address address="0x558d82B022a8A42E9684BaCaA97a35318d4C293A" format="short" />
          </div>
        </div>
        {/* Footer */}
        <div className="p-6 pt-2">
          <p className="text-md text-gray-600 relative group">
            Born in the 90s in Spain, I{"'"}ve been working as multiplatform developer for 6 years. I am currently
            finishing my final degree project in Computer Engineering and my master{"'"}s thesis in Cybersecurity. I
            work as a Cybersecurity Consultant for EAL6 products for{" "}
            <span className="relative group-hover:underline text-black dark:text-white">
              {" "}
              Common Criteria
              <span className="absolute bottom-full left-1 transform -translate-x-1/2 mb-2 w-72 p-2 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Look for your physical cold wallet Certifications 👀
              </span>
            </span>{" "}
            Certification in international markets. I am passionate about Blockchain and its potential to change the
            world. Now, I{"'"}m focused on improving my skills and looking for new opportunities to grow professionally
            in this field.
          </p>
        </div>
        {/* RRSS */}
        <div className="flex justify-center mt-4 mb-6 space-x-4">
          <a
            href="https://github.com/bagusino"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-gray-200 dark:text-white dark:hover:text-gray-900"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.111.82-.261.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.125-.303-.535-1.527.115-3.176 0 0 1.005-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.045.138 3.003.404 2.28-1.552 3.285-1.23 3.285-1.23.655 1.649.245 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.62-5.475 5.92.43.37.815 1.102.815 2.222 0 1.606-.015 2.896-.015 3.286 0 .32.215.694.825.576C20.565 21.795 24 17.297 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/jose-luis-guerrero-zafra-9a58a020a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-gray-200 dark:text-white dark:hover:text-gray-900"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.58c-1.14 0-2.06-.93-2.06-2.07 0-1.14.92-2.07 2.06-2.07 1.14 0 2.06.93 2.06 2.07 0 1.14-.92 2.07-2.06 2.07zM20.45 20.45h-3.56v-5.6c0-1.34-.03-3.06-1.86-3.06-1.86 0-2.14 1.45-2.14 2.95v5.71h-3.56V9h3.42v1.56h.05c.48-.9 1.66-1.85 3.42-1.85 3.66 0 4.34 2.41 4.34 5.54v6.2z" />
            </svg>
          </a>
          <a
            href="mailto:0xbagusino@gmail.com"
            className="text-black hover:text-gray-200 dark:text-white dark:hover:text-gray-900"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12.713l11.985-7.99A1.5 1.5 0 0022.5 3h-21a1.5 1.5 0 00-1.485 1.723L12 12.713zM12 14.287L.015 6.297A1.5 1.5 0 000 7.5v9a1.5 1.5 0 001.5 1.5h21a1.5 1.5 0 001.5-1.5v-9a1.5 1.5 0 00-.015-.203L12 14.287z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
