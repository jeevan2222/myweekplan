const Board = require("../schema/board.schema");
const jwt = require("jsonwebtoken");
var moment = require("moment");
const createBoard = async (data) => {
  try {
    const { board_name, user_email, capacity, to_date, from_date } = data;
    const number_of_days = moment("{to_date}", "DD-MM-YYYY").diff(
      moment("{from_date}", "DD-MM-YYYY"),
      "days"
    );
    if (
      !board_name ||
      !user_email ||
      !capacity ||
      !to_date ||
      !from_date ||
      !number_of_days
    ) {
      return {
        error: false,
        status: 400,
        mesaage: "Bad Request",
      };
    }
    const BoardData = await Board.create({
      board_name,
      user_email,
      capacity,
      to_date,
      from_date,
      number_of_days,
    });
    return {
      error: false,
      status: 201,
      mesaage: "Board created successfully",
      data: BoardData,
    };
  } catch (err) {
    return {
      error: true,
      status: 500,
      mesaage: "Internal Server Error",
    };
  }
};
module.exports = {
  createBoard,
};
