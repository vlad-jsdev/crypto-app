pragma solidity ^0.8.0;

contract Transaction {
    uint256 transactionCounter;

    event Transfer(address from, address reciever, uint amount, string message, uint256 timestamp, string keyword);
    struct TransferStruct{
        address sender;
        address reciever;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    TransferStruct[] transaction;
    function addBlockchain() public {

    }
    function getAllTransactions() public {

    }
    function addBlockchain() public {

    }
    function Transaction(){

    }
}
