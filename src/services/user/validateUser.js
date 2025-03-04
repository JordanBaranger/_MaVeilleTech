import User from "../../models/user.js";

export const createUserFunction = async ({ pseudo, email, password, role }) => {
  const existingUser = await User.findOne({ where: { email } });
  if (existingUser) {
    throw new Error("Email déjà utilisé");
  }
  const user = await User.create({ pseudo, email, password, role });
  return { user };
};
