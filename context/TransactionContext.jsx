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
  let sharedState = "text";

  const checkIfWalletIsConnected = async () => {
    if (!ethereum) return alert("Please install metamask");
    const accounts = await ethereum.request({ method: "eth_accounts" });

    console.log(accounts);
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
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
