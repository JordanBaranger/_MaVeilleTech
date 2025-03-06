import User from "../../models/user.js";

export const createUserFunction = async ({
  username,
  email,
  password,
  role,
}) => {
  const existingUser = await User.findOne({ where: { username } });
  if (existingUser) {
    throw new Error("Email déjà utilisé");
  }
  const user = await User.create({ username, email, password, role });
  return { user };
};
