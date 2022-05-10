import NavBar from "../components/NavBar";
import Image from "next/image";
import CryptoImg from "../assets/images/crypto.png";
import MenuButton from "../components/MenuButton";
import { walletButton } from "../constants/styles";
import { useAppContext } from "../context/TransactionContext";
import FormSendCrypto from "../components/FormSendCrypto";

const MainPage = () => {
  const { currentAccount, connectWallet } = useAppContext();
  console.log(useAppContext());

  return (
    <main className="flex flex-col  my-auto max-w-7xl px-4 sm:my-12 sm:px-6 md:my-16 lg:my-20 lg:px-8 xl:my-28">
      <div className="flex">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline dark:text-gray-300">
              Send Crypto
            </span>{" "}
            <br />
            <span className="block text-indigo-600 xl:inline">
              across the world
            </span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Buy, sell and exchange crypto around the world with small taxes.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <MenuButton
              name="Connect wallet"
              key="Connect wallet"
              href="#"
              buttonStyles="font-medium text-white py-4 px-6 rounded-full bg-indigo-600 hover:bg-indigo-400"
              clickFunc={() => connectWallet()}
            />
          </div>
        </div>
        <div className="hidden lg:block flex self-center w-1/2">
          <Image
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src={CryptoImg}
            alt=""
          />
        </div>
      </div>
      <div className="flex">
        <div className="flex-1"></div>
        <div className="flex-1 p-6 m-4">
          <FormSendCrypto />
        </div>
      </div>
    </main>
  );
};

export default MainPage;
