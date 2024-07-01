const User = require("../schema/user.schema");
const jwt = require("jsonwebtoken");
const createUser = async (data) => {
  try {
    const { name, email, password } = data;
    if (!name || !email || !password) {
      return {
        error: false,
        status: 400,
        mesaage: "Bad Request",
      };
    }
    const isExists = await User.findOne({ where: { email } });
    if (isExists == null) {
      const UserData = await User.create({
        name,
        email,
        password,
      });
      console.log(UserData);
      return {
        error: false,
        status: 201,
        mesaage: "User created successfully",
      };
    } else {
      return {
        error: false,
        status: 409,
        mesaage: "email Already Exists",
      };
    }
  } catch (err) {
    return {
      error: true,
      status: 500,
      mesaage: "Internal Server Error",
    };
  }
};
const loginUser = async (data) => {
  try {
    const { email, password } = data;
    if (!email || !password) {
      return {
        error: false,
        status: 400,
        mesaage: "Bad Request",
      };
    }
    const isExists = await User.findOne({
      where: { email, password },
      raw: true,
    });

    if (isExists) {
      const token = jwt.sign({ userId: isExists.id }, "secret-key", {
        expiresIn: "1h",
      });
      return {
        error: false,
        status: 200,
        mesaage: "User login successfully",
        token: token,
      };
    } else {
      return {
        error: false,
        status: 404,
        mesaage: "User Not Exists",
      };
    }
  } catch (error) {
    return {
      error: true,
      status: 500,
      mesaage: "Internal Server Error",
    };
  }
};
module.exports = {
  createUser,
  loginUser,
};
