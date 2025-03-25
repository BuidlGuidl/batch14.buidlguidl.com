// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract GraduateNFTMetadata {
    function getName() external pure returns (string memory) {
        return "Osiyomeoh"; // Your name
    }

    function getColor() external pure returns (uint8, uint8, uint8) {
        return (255, 165, 0); // Orange color (RGB)
    }
}