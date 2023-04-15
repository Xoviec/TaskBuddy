import React from "react";
import dot from "../dot3.svg";
import { NewTask } from "./newTask";
import { Column } from "./column";





export const Board = (props) => {
  // console.log(props.boards)


  const currentBoard = props.boards.find(
    (board) => board.name === props.activeBoard
  );


  // console.log(currentBoard.columns)

  return (
    <div className="board">
      <div className="top-bar">
        {currentBoard.name}
        <div className="top-right">
        <NewTask addNewTask={props.addNewTask}/>
          <img alt="dot" src={dot} />
        </div>
      </div>
      <div className="columns">
        {currentBoard.columns.map((column) => {
          return <Column column={column} />;
        })}
      </div>
    </div>
  );
};
