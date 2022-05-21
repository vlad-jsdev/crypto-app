import React, { createContext, useContext, useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../constants/contracts";

const AppContext = createContext();

let ethereum;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );

  return transactionContract;
};

export function AppWrapper({ children }) {
  const [currentAccount, setCurrentAccount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    addressTo: "",
    amount: "",
  });
  const [transactionCount, setTransactionCount] = useState("");

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert("Please install metamask");
      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length) {
        setCurrentAccount(accounts[0]);

        // getAllTransactions();
      } else {
        console.log("No Accounts");
      }
      setCurrentAccount(accounts[0]);
      console.log(accounts);
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object.");
    }
  };
  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install metamask");
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object.");
    }
  };
  const getFunc = async () => {
    try {
      const contract = getEthereumContract();
      const transaction = await contract.getTransactionCount();
      console.log("All transactions: ", transaction);
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object.");
    }
  };
  const sendTransaction = async () => {
    try {
      setIsLoading(true);
      if (!ethereum) return alert("Please install metamask");

      const { addressTo, amount } = formData;
      const transactionContract = getEthereumContract();

      const parsedAmount = ethers.utils.parseEther(amount);

      await ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: currentAccount,
            to: addressTo,
            gas: "0x5208", // 21000
            value: parsedAmount._hex,
          },
        ],
      });
      const transactionHash = await transactionContract.addToBlockchain(
        addressTo,
        parsedAmount
      );
      console.log("Loading: ", transactionHash.hash);
      await transactionHash.wait();
      console.log("Success: ", transactionHash.hash);

      const transactionCount = await transactionContract.getTransactionCount();
      setTransactionCount(transactionCount.toNumber());
      setIsLoading(false);
      setFormData({
        addressTo: "",
        amount: "",
      });
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object.");
    }
  };
  useEffect(() => {
    setTransactionCount(localStorage.getItem("transactionCount"));
    ethereum = window.ethereum;
    checkIfWalletIsConnected();
  }, []);
  return (
    <AppContext.Provider
      value={{
        connectWallet,
        currentAccount,
        handleChange,
        setFormData,
        formData,
        sendTransaction,
        isLoading,
        getFunc,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
