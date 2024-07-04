
const Board = require("../schema/board.schema");
const Task=require("../schema/task.schema");
const User = require("../schema/user.schema");

const createTask = async (data) => {
    try {
      const { status, userId, remaining_hours, capacity_hours, task_priority ,spend_hours,boardId,task_name} = data;
      if (
        !status ||
        !userId ||
        !remaining_hours ||
        !capacity_hours ||
        !task_priority ||
        !task_name ||
        ! boardId ||
        !spend_hours
      ) {
        return {
          error: false,
          status: 400,
          mesaage: "Bad Request",
        };
      }
      const BoardData = await Task.create({
        status, userId, remaining_hours, capacity_hours, task_priority ,boardId,task_name,spend_hours
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
  const getAllTask = async(id)=>{
    try {
      const BoardData = await Task.findAll({
        where:{boardId:id},
        include:[{ model: Board, include:[{
            model: User,
        }]} ],
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
    module.exports={
        createTask,
        getAllTask
    }