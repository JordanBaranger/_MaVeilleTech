import jwt from "jsonwebtoken";

// Generate a JWT token
export default function generateToken(user) {
  const tokenData = {
    userId: user.userId,
    email: user.email,
    role: user.role,
  };

  return jwt.sign(tokenData, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRATION,
  });
}
