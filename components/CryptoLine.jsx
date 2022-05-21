import { replaceNum } from "../constants/constans";

const CryptoLine = ({
  name,
  symbol,
  priceUsd,
  changePercent24Hr,
  marketCapUsd,
  volumeUsd24Hr,
  vwap24Hr,
  rank,
}) => {
  const rounded = parseFloat(priceUsd)
    .toFixed(2)
    .toString()
    .replace(replaceNum, " ");
  const img = symbol.toLocaleLowerCase();
  const percent24 = parseFloat(changePercent24Hr).toFixed(2);
  const marketCup = parseFloat(marketCapUsd)
    .toFixed(2)
    .replace(replaceNum, " ");
  const volume = parseFloat(volumeUsd24Hr).toFixed(2).replace(replaceNum, " ");
  const vwap = parseFloat(vwap24Hr).toFixed(2).replace(replaceNum, " ");

  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-slate-100 hover:bg-indigo-300 dark:hover:bg-indigo-600 dark:odd:bg-gray-800 dark:even:bg-gray-700">
        <td className="px-6 py-4"># {rank}</td>
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
        >
          <div className="flex flex-row">
            <img
              src={`https://assets.coincap.io/assets/icons/${img}@2x.png`}
              alt={symbol}
              className="flex w-8"
            />
            <span className="ml-2 flex items-center">{name}</span>
          </div>
        </th>
        <td className="px-6 py-4">$ {rounded}</td>
        <td
          className={`px-6 py-4 ${
            percent24 < 0 ? "text-red-500" : "text-green-500"
          }`}
        >
          {percent24}%
        </td>
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
};
export default CryptoLine;
