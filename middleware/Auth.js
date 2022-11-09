
export const isAutehnticated = (req, res, next) => {
  const { authorization } = req.headers
  if (authorization) {
    console.log('auth token', authorization.startsWith('Bearer'))
    return next()
  }
  res.status(401).end()
}
