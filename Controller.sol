// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.19;

import './Safe.sol';

contract VeDrive {

    address private owner;
    address private safeAddress;

    // event for EVM logging
    event OwnerSet(address indexed oldOwner, address indexed newOwner);

    // modifier to check if caller is owner
    modifier isOwner() {
        // If the first argument of 'require' evaluates to 'false', execution terminates and all
        // changes to the state and to Ether balances are reverted.
        // This used to consume all gas in old EVM versions, but not anymore.
        // It is often a good idea to use 'require' to check if functions are called correctly.
        // As a second argument, you can also provide an explanation about what went wrong.
        require(msg.sender == owner, "Caller is not owner");
        _;
    }

    /**
     * @dev Set contract deployer as owner
     */
    constructor() {
        owner = msg.sender; // 'msg.sender' is sender of current call, contract deployer for a constructor
        emit OwnerSet(address(0), owner);
    }

    function changeOwner(address newOwner) public isOwner {
        emit OwnerSet(owner, newOwner);
        owner = newOwner;
    }

    function setSafeAddress(address addr) public isOwner {
        safeAddress = addr;
    }


    function getAmountVetInPool() public pure returns (uint) {
        // Once live, get the balance of the safe address
        // return safeAddress.balance;
        return 1e9;
    }

    function calculateSafetyScore(uint userData) private pure returns (uint) {
        // This will call another smart contract that uses AI & machine learning to calculate a
        //   safety score using location/telemetry data in userData
        // This algorithm could be created by individual insurance companies, incentivising 
        //   constructive competition
        // For now, just hardcode it from the input
        return userData;
    }

    /**
     * @dev Calculate amount of VET user earns
     * @param userData Data saved by the VeDrive app telemetry and trip data
     * @param userWallet Address of user waller
     * @return Amount of VET user earned
    */
    function payEarnedVet(uint userData, address payable userWallet) public isOwner returns (uint) {
        uint safetyScore = calculateSafetyScore(userData);
        uint payout = safetyScore * (getAmountVetInPool() / 1e9);
        // In live, transfer VET from safe to userWallet here
        // Safe.transferVet(userWallet, payout);
        return payout;
    }
}