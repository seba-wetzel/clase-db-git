
export const isAutehnticated = (req, res, next) => {
  if (req.headers.authorization) {
    console.log('auth token', req.headers.authorization)
    return next()
  }
  res.status(401).end()
}
