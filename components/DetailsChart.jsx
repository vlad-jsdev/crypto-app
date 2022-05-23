import CryptoChart from "./CryptoChart";

const DetailsChart = ({ symbol }) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-slate-100 dark:odd:bg-gray-800 dark:even:bg-gray-700">
      <td colSpan="8">
        <CryptoChart symbol={symbol} />
      </td>
    </tr>
  );
};
export default DetailsChart;
