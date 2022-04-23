//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Callee {
    uint x;
    address y;
    bool z;
    function setTrueAt(uint storageLoc) external {
        assembly {
            sstore(storageLoc, true)
        }
    }
}