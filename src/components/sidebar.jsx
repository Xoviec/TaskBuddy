import React from "react";

import "../index.css";
import logo from "../logo.svg";
import kanbanLogo from "../kanban-3.svg";
import { NewBoard } from "./newBoard";

export const Sidebar = ({
  boards,
  activeBoard,
  handleChangeActiveBoard,
  handleAddNewBoard,
}) => {
  // console.log(props.boards)

  const changeActiveBoard = (e) => {
    const newName = e.target.innerText;
    handleChangeActiveBoard(newName);
    e.preventDefault();
  };

  const addNewBoard = (e) => {
    const newBoard = "Dupa";
    handleAddNewBoard(newBoard);
    e.preventDefault();
  };

  return (
    <div className="sidebar">
      <img src={logo} />
      {boards.map((board) => {
        return (
          <div key={board.name}>
            <button className="board--active" onClick={changeActiveBoard}>
              <img className="kanban-logo" src={kanbanLogo} />
              <p className="marle">{board.name}</p>
            </button>
          </div>
        );
      })}
      <NewBoard handleAddNewBoard={handleAddNewBoard} boards={boards} />
    </div>
  );
};
