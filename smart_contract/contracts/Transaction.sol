// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Transaction {
    uint256 transactionCounter;

    event Transfer(address from, address receiver, uint amount, uint256 timestamp);
    struct TransferStruct{
        address sender;
        address receiver;
        uint amount;
        uint256 timestamp;
    }

    TransferStruct[] transaction;

    function addToBlockchain(address payable receiver, uint amount) public {
        transactionCounter += 1;

        transaction.push(TransferStruct(msg.sender, receiver, amount, block.timestamp));

        emit Transfer(msg.sender, receiver, amount, block.timestamp);
    }
    function getAllTransactions() public view returns (TransferStruct[] memory) {
        return transaction;
    }
    function getTransactionCount() public view returns (uint256) {
        return transactionCounter;
    }
}

