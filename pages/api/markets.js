// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const options = {
  method: "GET",
};

export default async function markets(req, res) {
  const data = await fetch("https://api.coincap.io/v2/assets")
    .then((response) => response.json())
    .catch((err) => console.error(err));
  res.status(200).json(data.data);
}
