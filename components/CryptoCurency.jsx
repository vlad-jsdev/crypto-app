import { useEffect, useState } from "react";
import CryptoImg from "../assets/images/crypto-curency.png";
import Spinner from "./Spinner";
import CryptoThTitle from "./CryptoThTitle";
import CryptoLine from "./CryptoLine";
import {
  changePercent24Hr,
  hash,
  market,
  marketCapUsd,
  nameProp,
  percent,
  price,
  priceUsd,
  rank,
  titleName,
  volume,
  volumeUsd24Hr,
  vwap,
  vwap24Hr,
} from "../constants/constans";

const CryptoCurency = ({ startData }) => {
  const [data, setData] = useState(startData);
  const [searchTerm, setSearchTerm] = useState("");
  const [isType, setType] = useState("");
  const [searchResults, setSearchResult] = useState(startData);
  const [toggle, setToggle] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const sortCrypto = (type) => {
    setType(type);
    if (type === "name") {
      searchResults.sort((a, b) => {
        if (a[type].toLowerCase() < b[type].toLowerCase()) {
          return toggle ? -1 : 1;
        }
        if (a[type].toLowerCase() > b[type].toLowerCase()) {
          return toggle ? 1 : -1;
        }
        return 0;
      });
    } else {
      searchResults.sort((a, b) =>
        toggle ? b[type] - a[type] : a[type] - b[type]
      );
    }
    setToggle(!toggle);
    setSearchResult(searchResults);
  };

  const handlerChange = (e) => {
    setType("");
    setSearchTerm(e.target.value);
  };
  useEffect(() => {
    const results = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );
    setSearchResult(results);
  }, [searchTerm]);

  return (
    <main className="flex flex-col my-3 max-w-7xl px-4 sm:my-12 sm:px-6 md:my-16 lg:my-20 lg:px-8 xl:my-28">
      <div className="flex justify-center mb-12">
        <div className="text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block dark:text-gray-300">
              Cryptocurrency Prices
            </span>{" "}
            <span className="block text-indigo-600 xl:inline">
              stay up to date
            </span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            check charts of your favorite crypto
          </p>
        </div>
        <div className="block flex justify-start self-center w-1/2">
          <img
            src={CryptoImg.src}
            className="h-56 pl-1 w-full object-cover sm:h-72 md:h-96 lg:w-96 lg:h-full"
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-center my-5 w-full">
        <input
          type="search"
          id="default-search"
          className="block p-3 pl-10 w-full sm:w-72 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Coin"
          onChange={handlerChange}
        />
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        {isLoading ? (
          <div className="flex justify-center">
            <Spinner />
          </div>
        ) : (
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-900 dark:text-gray-400">
              <tr>
                <CryptoThTitle
                  isType={isType}
                  sortCrypto={sortCrypto}
                  type={rank}
                  toggle={toggle}
                  title={hash}
                />
                <CryptoThTitle
                  isType={isType}
                  sortCrypto={sortCrypto}
                  type={nameProp}
                  toggle={toggle}
                  title={titleName}
                />
                <CryptoThTitle
                  isType={isType}
                  sortCrypto={sortCrypto}
                  type={priceUsd}
                  toggle={toggle}
                  title={price}
                />
                <CryptoThTitle
                  isType={isType}
                  sortCrypto={sortCrypto}
                  type={changePercent24Hr}
                  toggle={toggle}
                  title={percent}
                />
                <CryptoThTitle
                  isType={isType}
                  sortCrypto={sortCrypto}
                  type={marketCapUsd}
                  toggle={toggle}
                  title={market}
                />
                <CryptoThTitle
                  isType={isType}
                  sortCrypto={sortCrypto}
                  type={volumeUsd24Hr}
                  toggle={toggle}
                  title={volume}
                />
                <CryptoThTitle
                  isType={isType}
                  sortCrypto={sortCrypto}
                  type={vwap24Hr}
                  toggle={toggle}
                  title={vwap}
                />
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {searchResults.map(
                ({
                  name,
                  symbol,
                  priceUsd,
                  changePercent24Hr,
                  marketCapUsd,
                  volumeUsd24Hr,
                  vwap24Hr,
                  rank,
                }) => (
                  <CryptoLine
                    key={symbol}
                    name={name}
                    symbol={symbol}
                    priceUsd={priceUsd}
                    changePercent24Hr={changePercent24Hr}
                    marketCapUsd={marketCapUsd}
                    volumeUsd24Hr={volumeUsd24Hr}
                    vwap24Hr={vwap24Hr}
                    rank={rank}
                  />
                )
              )}
            </tbody>
          </table>
        )}
      </div>
    </main>
  );
};

export default CryptoCurency;
