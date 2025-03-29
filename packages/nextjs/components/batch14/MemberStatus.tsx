import React from "react";
import { useAccount } from "wagmi";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

const icons = {
  not_a_member: "❌",
  member_not_checked_in: "☑️",
  checked_in: "✅",
};

export const MemberStatus = () => {
  const { address } = useAccount();

  const { data: isMember } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "allowList",
    args: [address],
  });

  const { data: yourContractAddress } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "yourContractAddress",
    args: [address],
  });

  const status = !isMember
    ? "not_a_member"
    : yourContractAddress && yourContractAddress !== "0x0000000000000000000000000000000000000000"
      ? "checked_in"
      : "member_not_checked_in";

  return <>{icons[status as keyof typeof icons]}</>;
};
