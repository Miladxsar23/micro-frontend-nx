import { NextFunction, Request, Response } from 'express';

// Authentication middleware
export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Basic ')) {
    res.setHeader('WWW-Authenticate', 'Basic');
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const encodedCredentials = authHeader.split(' ')[1];
  const decodedCredentials = Buffer.from(
    encodedCredentials,
    'base64'
  ).toString();
  const [username, password] = decodedCredentials.split(':');

  const isValidCredentials = username === 'admin' && password === 'admin';

  if (!isValidCredentials) {
    res.setHeader('WWW-Authenticate', 'Basic');
    return res.status(401).json({ message: 'Unauthorized' });
  }

  next();
}
