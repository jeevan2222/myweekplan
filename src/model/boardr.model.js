const Board = require("../schema/board.schema");
const User=require("../schema/user.schema")
const jwt = require("jsonwebtoken");
// var moment = require("moment");
const createBoard = async (data) => {
  try {
    const { board_name, userId, capacity, to_date, from_date ,number_of_days} = data;
    if (
      !board_name ||
      !userId ||
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
      userId,
      capacity,
      to_date,
      from_date,
      number_of_days,
    });
    return {
      error: false,
      status: 201,
      data:BoardData
    };
  } catch (err) {
    return {
      error: true,
      status: 500,
      mesaage: err,
    };
  }
};
const getBoard = async(id)=>{
  try {
    const BoardData = await Board.findAll({
      where:{userId:id},
      include:[{ model: User }],
      raw:true
    });
    return {
      BoardData
    }
    
  } catch (error) {
    return{
      error
    }
    
  }

}
module.exports = {
  createBoard,
  getBoard
};
