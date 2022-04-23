# Capture the blue flag challenge

```solidity
//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

interface Flag {
    function mint(address) external;
}

// 0xFb9AF15E418DDcF1B4653b334090332dE6917E28

contract Caller {
    address constant calleeAddr = 0x0BE703643eBD49eA61b3b2F1858bB8936FC40981;
    address constant flag = 0x3C60519F734E0Bc7dba0e2ad30D372D0a9E8aE03;

    uint256 x;
    bytes32 y;
    bool z;

    fallback() external {
        (bool success, ) = calleeAddr.delegatecall(msg.data);
        require(success);

        require(z, "z is false");
        Flag(flag).mint(msg.sender);
    }
}
```

```solidity
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
```