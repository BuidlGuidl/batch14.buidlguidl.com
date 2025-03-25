import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

// BatchRegistry address on Arbitrum
const BATCH_REGISTRY_ADDRESS = "0x47FD1Ff08476d7c7196089D4f5BcabbED4f4ddbE";
// Owner address to set explicitly
const OWNER_ADDRESS = "0xA6e8bf8E89Bd2c2BD37e308F275C4f52284a911F";

/**
 * Deploys CheckIn contract to Arbitrum with 0xA6e8bf8E89Bd2c2BD37e308F275C4f52284a911F as owner
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployYourContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  console.log("Deploying with account:", deployer);

  // Deploy CheckIn contract with explicit owner
  await deploy("CheckIn", {
    from: deployer,
    args: [BATCH_REGISTRY_ADDRESS, OWNER_ADDRESS],
    log: true,
    autoMine: true, // Ignored on live networks like Arbitrum
  });

  // Get the deployed CheckIn contract
  const checkIn = await hre.ethers.getContract<Contract>("CheckIn", deployer);
  console.log("\nCheckIn deployed to:", await checkIn.getAddress());
  console.log("Owner set to:", OWNER_ADDRESS);
  console.log("Using BatchRegistry at:", BATCH_REGISTRY_ADDRESS);
  console.log("You can now call checkMeIn() from the CheckIn contract using", OWNER_ADDRESS, "!\n");
};

export default deployYourContract;

deployYourContract.tags = ["CheckIn"];
