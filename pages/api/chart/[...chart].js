// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { allCoinsData } from "../../../constants/constans";

const options = {
  method: "GET",
};

export default async function chart(req, res) {
  const { chart } = req.query;
  console.log(chart);
  const data = await fetch(
    `https://api.poloniex.com/markets/${chart[1]}_${chart[0]}/trades?interval=MINUTE_15&startTime=${chart[2]}&endTime=${chart[3]}&limit=50`,
    options
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));
  const formatedData = {
    labels: data.map((item) => {
      const dateObject = new Date(item.ts);
      console.log('Time: ', dateObject);
      return dateObject.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
    }),
    datasets: [
      {
        data: data.map((item) => item.price),
        pointStyle: "circle",
        pointBackgroundColor: "green",
        pointRadius: 3,
        pointHoverRadius: 5,
      },
    ],
  };

  res.status(200).json(formatedData);
}
