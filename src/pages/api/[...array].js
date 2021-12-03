export default function Array(request, response) {
  response.status(200).json({
    array: request.query
  })
}

//[[...array]].js assim torna opcional os vários parametros
