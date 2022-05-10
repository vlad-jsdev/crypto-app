import React, { createContext, useContext, useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../constants/contracts";

// export const TransactionContext = createContext();

let ethereum;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transationContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );

  console.log({
    provider,
    signer,
    transationContract,
  });
};

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [currentAccount, setCurrentAccount] = useState();
  let sharedState = "text";

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert("Please install metamask");
      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        //getAllTransactions();
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

  const sendTransaction = async () => {
    try {
      if (!ethereum) return alert("Please install metamask");
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object.");
    }
  };
  useEffect(() => {
    ethereum = window.ethereum;
    checkIfWalletIsConnected();
    // let metaMask = new Promise((resolve, reject) => {
    //   ethereum = window;
    //   resolve();
    // });
    // metaMask.then(() => {
    //   if (!ethereum) return alert("Please install metamask");
    // });
  }, []);
  return (
    <AppContext.Provider value={{ connectWallet, currentAccount }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
