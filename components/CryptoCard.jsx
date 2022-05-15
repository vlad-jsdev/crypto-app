import { useAppContext } from "../context/TransactionContext";
import EthIcon from "../assets/images/ethereum.svg";
import MetamaskIcon from "../assets/images/metamask.svg";
import CardBg from "../assets/images/card-bg.png";

const CryptoCard = () => {
  const { currentAccount } = useAppContext();

  return (
    <div className="lg:w-96 lg:h-56 m-auto bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110">
      <img
        className="relative object-cover w-full h-full rounded-xl"
        src={CardBg.src}
      />

      <div className="w-full px-8 absolute top-3 sm:top-8">
        <div className="flex justify-between">
          <div className="">
            <p className="font-light">Crypto</p>
            <p className="font-medium tracking-widest">Ethereum</p>
          </div>

          <img className="w-14 h-14" src={EthIcon.src} />
        </div>
        <div className="sm:pt-1">
          <p className="font-light">Wallet Number</p>
          <p className="font-medium text-xs tracking-more-wider">
            {currentAccount ? currentAccount : "Not connected"}
          </p>
        </div>
        <div className="pt-2 sm:pt-6 pr-6">
          <div className="flex justify-start">
            <img className="h-6" src={MetamaskIcon.src} />
            <p className="font-light text-xl mx-2">Metamask</p>

            {/*<div className="">*/}
            {/*  <p className="font-light text-xs">Valid</p>*/}
            {/*  <p className="font-medium tracking-wider text-sm">11/15</p>*/}
            {/*</div>*/}
            {/*<div className="">*/}
            {/*  <p className="font-light text-xs text-xs">Expiry</p>*/}
            {/*  <p className="font-medium tracking-wider text-sm">03/25</p>*/}
            {/*</div>*/}

            {/*<div className="">*/}
            {/*  <p className="font-light text-xs">CVV</p>*/}
            {/*  <p className="font-bold tracking-more-wider text-sm">···</p>*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoCard;
