module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || authHeader !== 'Bearer secrettoken123') {
    return res.status(401).json({ error: 'Não autorizado' });
  }

  next();
};
