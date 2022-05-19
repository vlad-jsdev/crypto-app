import { useEffect, useState } from "react";
import Image from "next/image";

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
              return (
                <>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-slate-100 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    >
                      <img
                        src={`https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@bea1a9722a8c63169dcc06e86182bf2c55a76bbc/128/color/${img}.png`}
                        alt={crypto.symbol}
                        className="block w-8"
                      />
                      <span>{crypto.name}</span>
                    </th>
                    <td className="px-6 py-4">$ {rounded}</td>
                    <td className="px-6 py-4">{percent24}%</td>
                    <td className="px-6 py-4">$ {marketCup}</td>
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

    // <div className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
    //   <a
    //     href="#"
    //     aria-current="true"
    //     className="block flex flex-row justify-between w-full px-4 py-2 text-white bg-blue-700 border-b border-gray-200 rounded-t-lg cursor-pointer dark:bg-gray-800 dark:border-gray-600"
    //   >
    //     Crypto
    //   </a>
    //   {isLoading ? (
    //     <div>
    //       <Spinner />
    //     </div>
    //   ) : (
    //     data.map((crypto) => (
    //       <a
    //         key={crypto.id}
    //         href="#"
    //         className="block flex flex-row justify-between w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
    //       >
    //         <img src={crypto.image} alt={crypto.name} className="block w-8" />
    //         <span className="block">{crypto.name}</span>
    //         <span className="block">{crypto.current_price} $</span>
    //       </a>
    //     ))
    //   )}
    // </div>
  );
};
// export const getServerSideProps = async () => {
//   const res = await fetch("http://localhost:3000/api/markets");
//   const data = await res.json();
//
//   return {
//     props: {
//       markets: data,
//     },
//   };
// };
export default CryptoCurency;
