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

interface IERC20 {
    function transfer(address _to, uint256 _value) external returns (bool);

    // don't need to define other functions, only using `transfer()` in this case
}

contract USDTContract {
    // Do not use in production
    // This function can be executed by anyone
    function sendUSDT(address _to, uint256 _amount) external {
        // This is the mainnet USDT contract address
        // Using on other networks (rinkeby, local, ...) would fail
        //  - there's no contract on this address on other networks
        IERC20 usdt = IERC20(address(0xdAC17F958D2ee523a2206206994597C13D831ec7));

        // transfers USDT that belong to your contract to the specified address
        usdt.transfer(_to, _amount);
    }
}
