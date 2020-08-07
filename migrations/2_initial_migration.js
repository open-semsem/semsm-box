const TokenErc20 = artifacts.require("TokenErc20");

module.exports = function(deployer) {
  const name=process.env['NAME'];
  const symbol=process.env['SYMBOL'];
  const decimals=process.env['DECIMALS'];
  console.log({name,symbol});
  
  deployer.deploy(TokenErc20,name,symbol,decimals);
};
