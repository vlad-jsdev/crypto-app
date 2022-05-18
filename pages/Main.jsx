import Image from "next/image";
import CryptoImg from "../assets/images/crypto.png";
import MenuButton from "../components/MenuButton";
import { useAppContext } from "../context/TransactionContext";
import FormSendCrypto from "../components/FormSendCrypto";
import MetamaskIcon from "../assets/images/metamask.svg";
import CryptoCard from "../components/CryptoCard";

const Main = () => {
  const { connectWallet, currentAccount, getFunc } = useAppContext();

  return (
    <main className="flex flex-col my-3 max-w-7xl px-4 sm:my-12 sm:px-6 md:my-16 lg:my-20 lg:px-8 xl:my-28">
      <div className="flex justify-center">
        <div className="text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block dark:text-gray-300">Send Crypto</span>{" "}
            <span className="block text-indigo-600 xl:inline">
              across the world
            </span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Buy, sell and exchange crypto around the world with small taxes.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex justify-start">
            {currentAccount ? (
              <MenuButton
                name="Wallet is connected"
                key="Wallet is connected"
                href="#"
                buttonStyles="inline font-medium text-white py-4 px-6 rounded-full bg-indigo-600 opacity-75"
                icon={MetamaskIcon}
              />
            ) : (
              <MenuButton
                name="Connect wallet"
                key="Connect wallet"
                href="#"
                buttonStyles="inline font-medium text-white py-4 px-6 rounded-full bg-indigo-600 hover:bg-indigo-400"
                icon={MetamaskIcon}
                clickFunc={() => connectWallet()}
              />
            )}
          </div>
          {/*<MenuButton*/}
          {/*  name="Connect wallet"*/}
          {/*  key="Connect wallet"*/}
          {/*  href="#"*/}
          {/*  buttonStyles="inline font-medium text-white py-4 px-6 rounded-full bg-indigo-600 hover:bg-indigo-400"*/}
          {/*  icon={MetamaskIcon}*/}
          {/*  clickFunc={() => getFunc()}*/}
          {/*/>*/}
        </div>
        <div className="block flex self-center w-1/2">
          <Image
            className="h-56 pl-1 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src={CryptoImg}
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-center flex-wrap lg:flex-nowrap lg:my-0 my-6">
        <div className="flex-auto p-6 my-auto w-1/2">
          <CryptoCard />
        </div>
        <div className="flex-auto lg:p-6 m-4 w-1/2">
          <FormSendCrypto />
        </div>
      </div>
    </main>
  );
};

export default Main;
