const hre = require("hardhat");

async function main() {
  const callerContract = await hre.ethers.getContractAt("Contract", "0x7D03aA94CE98ec297bCDD9c5b23424A35167bA66");

  const [signer] =  await ethers.getSigners();
  
  for(let i=0; i < 50; i++){
    const flip = await callerContract.flip(i);
    await flip.wait();
    console.log("switched flip " + i);
  }
  
  const tx = await signer.sendTransaction({
    to: callerContract.address,
    value: ethers.utils.parseUnits("10", "gwei")
  });
  await tx.wait();
  
  const capture = await callerContract.capture();
  const result = await capture.wait();

  console.log(signer.address);
  console.log(result);
}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
