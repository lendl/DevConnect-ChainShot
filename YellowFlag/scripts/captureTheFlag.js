async function main() {
  const ctfContract = await ethers.getContractFactory("contracts/Contract.sol:CaptureFlagContract");
  let ctfDeployedContract = await ctfContract.deploy();
  await ctfDeployedContract.deployed();

  const transaction = await ctfDeployedContract.capture();
  const result  = await transaction.wait();

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
