//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

interface Flag {
    function mint(address) external;
}

interface IContract {
    function capture() external;
}

contract Contract {
    address constant flag = 0x16aAA5361F3E29F8e3BbCA64472d39399E303d1F;

    function capture() external {
        require(msg.sender != tx.origin, "msg.sender is equal to tx.origin");
        Flag(flag).mint(tx.origin);
    }
}

contract CaptureFlagContract {
    address constant contractAddress = 0x93A520FDb31704837Da757235A60CbD18b381b8E;

    function capture() external {
        IContract(contractAddress).capture();
    }
}