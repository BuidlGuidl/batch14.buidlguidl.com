"use client";

import type { NextPage } from "next";
import { useScaffoldReadContract, useScaffoldEventHistory } from "~~/hooks/scaffold-eth";
import { useState } from "react";
import { BlockieAvatar, isENS } from "~~/components/scaffold-eth";

interface BuildersProps {
    builderAddresses: string[];
  }

const Builders: NextPage = () => {

    const [builderAddresses, setBuilderAddresses] = useState<string[]>([]);
    const { data: checkedInCount } = useScaffoldReadContract({
        contractName: "BatchRegistry",
        functionName: "checkedInCounter",
      });

      const { data: checkInEvents, isLoading } = useScaffoldEventHistory({
        contractName: "BatchRegistry",
        eventName: 'CheckedIn',
        fromBlock: 0n,// Starting block for fetching logs
        watch: true,// Enable watching for new events
        enabled: true, 
      });

      const checkedInMembers = checkInEvents?.map((event) => event?.args?.builder); // Assuming args[0] is the member address
    
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-4xl font-bold">Batch 14's Builders:</span>
          </h1>
        </div>
        <div className="px-5 my-6">
            <ul className="grid grid-cols-3 gap-4">
                {checkedInMembers?.map((address, index) => (
                    
                    // <li key={index}>{address}</li> // Each address in its own <li> tag
                    <li key={index} className="flex items-center mb-2">
                        <a href={`https://batch14.buidlguidl.com/builders/${address}`} className="flex items-center">
                        <BlockieAvatar
                            address={address || ""} 
                            size={50} 
                            // ensImage={address} 
                        />
                        <span className="ml-4 text-lg">
                            {isENS(address) ? address : address?.slice(0, 6) + "..." + address?.slice(-4)}
                        </span>
                        </a>
                    </li>
                ))}
            </ul>
            
            {/* <p>{checkedInMembers?.join(", ")}</p> // Join the addresses with a comma */}
        </div>        
      </div>
    </>
  );
};

export default Builders;
