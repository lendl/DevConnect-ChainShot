# Capture the <span style="color:green">green</span> flag challenge

```solidity
//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

interface Flag {
    function mint(address) external;
}

contract Contract {
    address constant flag = 0x300aC8C396936B28777ecC2c9c51234c67188220;

    struct User {
        bool[50] switches;
        uint paid;
    }

    mapping(address => User) users;

    function flip(uint position) external {
        users[msg.sender].switches[position] = true;
    }

    receive() external payable {
        users[msg.sender].paid += msg.value;
    }

    function capture() external {
        require(users[msg.sender].paid >= 10 wei);
        for(uint i = 0; i < 50; i++) {
            require(users[msg.sender].switches[i]);
        }
        Flag(flag).mint(msg.sender);
    }
}
```
