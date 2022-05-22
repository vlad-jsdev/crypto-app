// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { allCoinsData } from "../../../constants/constans";

const options = {
  method: "GET",
  redirect: "follow",
};

export default async function chart(req, res) {
  const { chart } = req.query;
  console.log(chart);
  const data = await fetch(
    `https://poloniex.com/public?command=returnChartData&currencyPair=${chart[0]}_${chart[1]}&start=${chart[2]}&end=${chart[3]}&period=900`,
    options
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));
  const formatedData = {
    labels: data.map((item) => {
      const dateObject = new Date(item.date * 1000);
      return dateObject.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
    }),
    datasets: [
      {
        data: data.map((item) => item.close),
        pointStyle: "circle",
        pointRadius: 4,
        pointHoverRadius: 10,
      },
    ],
  };

  res.status(200).json(formatedData);
}
