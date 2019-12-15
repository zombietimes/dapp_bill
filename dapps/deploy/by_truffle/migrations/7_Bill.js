const sol = artifacts.require("./Bill.sol");
module.exports = function(deployer) {
  deployer.deploy(sol);
};

