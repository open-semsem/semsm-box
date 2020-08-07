pragma solidity ^0.5.0;
 import '../node_modules/@openzeppelin/contracts/token/ERC721/ERC721Full.sol';
contract NFTToken is ERC721Full {
    constructor(string memory name, string memory symbol) public
    ERC721Full ( name, symbol){}
}