import Web3 from "web3";

import TokenErc20 from "./contracts/TokenErc20.json";

const options = {
  web3: {
    block: false,
    customProvider: new Web3("ws://localhost:8545"),
  },
  contracts: [  TokenErc20],
  // events: {
  //   TokenErc20: ["TokenErc20"],
  // },
};

export default options;
