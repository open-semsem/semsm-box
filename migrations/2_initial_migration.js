const NFTToken = artifacts.require("NFTToken");

module.exports = function(deployer) {
  const name=process.env['NAME'];
  const symbol=process.env['SYMBOL'];
  console.log({name,symbol});
  
  deployer.deploy(NFTToken,name,symbol);
};
