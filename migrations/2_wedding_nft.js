const WeddingNFT = artifacts.require("WeddingNFT");

module.exports = async function (deployer) {
  await deployer.deploy(WeddingNFT, "Ayush weds Mahima", "IMA");
  console.log("Mahima deployment successful", WeddingNFT.address);
  const instance = await WeddingNFT.deployed();
  const id = await instance.mint("https://ipfs.io/ipfs/QmZKHLmiEKgFT7gwTASa7bPYMYm3EoDy1ju5jjtrs7PYuo");
  console.log(`Minted ID is:  ${id}`);
};
