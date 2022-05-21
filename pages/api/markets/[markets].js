// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { allCoinsData } from "../../../constants/constans";

const options = {
  method: "GET",
  redirect: "follow",
};

export default async function markets(req, res) {
  const { markets } = req.query;
  const data = await fetch(
    `https://api.coincap.io/v2/assets?limit=${markets}`,
    options
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));
  res.status(200).json(data.data);
}
