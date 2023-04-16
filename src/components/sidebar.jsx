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
      <img className="tb-logo" src={logo} />
      <div className="mode-wrapper">
        <button className="btn-mode my-btn">My</button>
        <button className="btn-mode gh-btn">Github</button>
      </div>
      <p className="all-b">All boards (x)</p>
      {boards.map((board) => {
        return (
          <>
            <div key={board.name}>
              <button className={`sidebar-board ${activeBoard===board.name ? `sidebar-board-active` : ``}`} onClick={changeActiveBoard}>
                <img className="kanban-logo" src={kanbanLogo} />
                <p className="marle">{board.name}</p>
              </button>
            </div>
          </>
        );
      })}
      <NewBoard handleAddNewBoard={handleAddNewBoard} boards={boards} />
    </div>
  );
};
