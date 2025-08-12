import User from "../models/user.js";

const createUser = async (data) => {
  return await User.create(data);
};

const getUsers = async () => {
  return await User.find();
};

const updateUsers = async (id, data) => {
  return await User.findByIdAndUpdate(
    id,
    { $set: data },
    {
      new: true,
    }
  );
};

const deleteUser = async (id) => {
  await User.findByIdAndDelete(id);
};

export default {
  createUser,
  getUsers,
  updateUsers,
  deleteUser,
};
