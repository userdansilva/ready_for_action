export default function Params(request, response) {
  response.status(200).json({
    params: request.query
  })
}
