const WeddingNFT = artifacts.require("WeddingNFT");

module.exports = async function() {
    let instance = await WeddingNFT.at(process.env.CONTRACT_ADDRESS);
    await instance.mint("https://ipfs.io/ipfs/QmZsLpeqHzBm2MSXWDa8nmCGfK4HwgAaApk7dmHUN3QcdJ");
    console.log(`Minting successful`);

    const id = await instance.mint("https://ipfs.io/ipfs/QmW5ubo4SmPccXGUtWP5dTEGsAstCKe2BKgEaS5LDXYbHv");
    console.log(`Minting successful`);
}