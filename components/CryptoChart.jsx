import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";
// #a5b4fc
const data = {
  labels: [],
  datasets: [
    {
      data: [],
    },
  ],
};
const options = {
  responsive: true,
  interaction: {
    intersect: false,
    mode: "index",
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  elements: {
    line: {
      tension: 0,
      borderWidth: 2,
      borderColor: "rgba(134,239,172,1)",
      fill: "start",
      backgroundColor: "rgba(134,239,172,0.3)",
    },
    point: {
      radius: 0,
      hitRadius: 0,
    },
  },
  scales: {
    xAxis: {
      display: true,
    },
    yAxis: {
      display: true,
    },
  },
};
const secondCrypto = ["USDT", "USDC"];

const CryptoChart = ({ symbol }) => {
  const [time, setTime] = useState(Date.now());
  const [dataChart, setData] = useState(data);
  const round = (a, b) => (a - (a % b)) / b;
  useEffect(() => {
    const start = round(time - 86400, 1000);
    fetch(
      `/api/chart/${
        symbol === "USDT" ? secondCrypto[1] : secondCrypto[0]
      }/${symbol}/${start - 86400}/${time}`
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return <Line data={dataChart} width={100} height={40} options={options} />;
};

export default CryptoChart;
