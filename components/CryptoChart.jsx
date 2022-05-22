import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";

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

  plugins: {
    legend: {
      position: "top",
    },
  },
  elements: {
    line: {
      tension: 0,
      borderWidth: 2,
      borderColor: "rgba(47,49,68,1)",
      fill: "start",
      backgroundColor: "rgba(47,97,68,0.3)",
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

const CryptoChart = () => {
  const [time, setTime] = useState(Date.now());
  const [dataChart, setData] = useState(data);
  const round = (a, b) => (a - (a % b)) / b;
  useEffect(() => {
    const start = round(time - 86400, 1000);
    fetch(`/api/chart/USDT/BTC/${start - 86400}/${time}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return <Line data={dataChart} width={100} height={40} options={options} />;
};

export default CryptoChart;
