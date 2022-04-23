# Capture the red flag challenge

```solidity
//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface IMintable is IERC20 {
    function mint(address, uint) external;
}

interface Flag {
    function mint(address) external;
}

contract Consumer {
    address other = address(1);

    address constant flag = 0xDA336bE0705AC201C19Be7c68E0601564bF5364a;

    function capture(address tokenAddress) external {
        IMintable token = IMintable(tokenAddress);
        token.mint(address(this), 9000);

        require(token.balanceOf(address(this)) == 9000);

        token.transfer(other, 4400);

        require(token.balanceOf(address(this)) == 4600);
        require(token.balanceOf(other) == 4400);

        Flag(flag).mint(msg.sender);
    }
}
```
