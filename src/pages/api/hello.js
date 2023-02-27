// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const BASE_URL = process.env.BASE_URL

export default async function handler (req, res) {
  const { value } = req.body

  const response = await fetch(`${BASE_URL}/${value}`)
    .then(res => res.json())
    .then(res => {
      return res
    })
  res.status(200).json(response)
}
