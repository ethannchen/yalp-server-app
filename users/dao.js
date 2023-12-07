import model from "./model.js";
export const findUserByUsername = (username) =>
  model.findOne({ username: username });
export const updateUser = (userId, user) =>
  model.updateOne({ _id: userId }, { $set: user });
export const createUser = (user) => model.create(user);
export const findAllUsers = () => model.find();