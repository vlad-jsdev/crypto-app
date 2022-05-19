import { useEffect, useState } from "react";

import Image from "next/image";
import CryptoImg from "../assets/images/crypto-curency.png";
import log from "tailwindcss/lib/util/log";
import Spinner from "../components/Spinner";

const CryptoCurency = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("api/markets")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);
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
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                24h %
              </th>
              <th scope="col" className="px-6 py-3">
                Market Cap
              </th>
              <th scope="col" className="px-6 py-3">
                Volume (24h)
              </th>
              <th scope="col" className="px-6 py-3">
                VWAP (24h)
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <div>
                <Spinner />
              </div>
            ) : (
              data.map((crypto) => {
                let rounded = parseFloat(crypto.priceUsd)
                  .toFixed(2)
                  .toString()
                  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, " ");
                let img = crypto.symbol.toLocaleLowerCase();
                let percent24 = parseFloat(crypto.changePercent24Hr).toFixed(2);
                let marketCup = parseFloat(crypto.marketCapUsd)
                  .toFixed(2)
                  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, " ");
                let volume = parseFloat(crypto.volumeUsd24Hr)
                  .toFixed(2)
                  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, " ");
                let vwap = parseFloat(crypto.vwap24Hr)
                  .toFixed(2)
                  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, " ");

                return (
                  <>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-slate-100 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                      >
                        <div className="flex flex-row">
                          <img
                            src={`https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@bea1a9722a8c63169dcc06e86182bf2c55a76bbc/128/color/${img}.png`}
                            alt={crypto.symbol}
                            className="flex w-8"
                          />
                          <span className="ml-2 flex items-center">
                            {crypto.name}
                          </span>
                        </div>
                      </th>
                      <td className="px-6 py-4">$ {rounded}</td>
                      <td className="px-6 py-4">{percent24}%</td>
                      <td className="px-6 py-4">$ {marketCup}</td>
                      <td className="px-6 py-4">$ {volume}</td>
                      <td className="px-6 py-4">$ {vwap}</td>
                      <td className="px-6 py-4 text-right">
                        <a
                          href="#"
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          More...
                        </a>
                      </td>
                    </tr>
                  </>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
};
export default CryptoCurency;
