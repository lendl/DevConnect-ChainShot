
async function main() {
  const calleeContract = await hre.ethers.getContractAt("Callee", "0x0BE703643eBD49eA61b3b2F1858bB8936FC40981");
  const callerContract = await hre.ethers.getContractAt("Caller", "0xFb9AF15E418DDcF1B4653b334090332dE6917E28");


  const transaction = await callerContract.({
    data: calleeContract.setTrueAt(1)
  });
  const result = await transaction.wait();

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
