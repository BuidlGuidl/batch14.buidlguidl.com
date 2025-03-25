// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

interface IBatchRegistry {
    function checkIn() external;
}

contract CheckIn {
    address public immutable batchRegistry;
    address public immutable owner;

    constructor(address _batchRegistry, address _owner) {
        batchRegistry = _batchRegistry;
        owner = _owner; // Explicitly set owner to provided address
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }

    function checkMeIn() external onlyOwner {
        IBatchRegistry(batchRegistry).checkIn();
    }
}