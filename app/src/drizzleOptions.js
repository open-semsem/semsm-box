import Web3 from "web3";

import NFTToken from "./contracts/NFTToken.json";

const options = {
  web3: {
    block: false,
    customProvider: new Web3("ws://localhost:8545"),
  },
  contracts: [  NFTToken],
  // events: {
  //   NFTToken: ["NFTToken"],
  // },
};

export default options;
