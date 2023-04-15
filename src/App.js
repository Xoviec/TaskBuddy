import React, { useEffect, useState } from "react";
import  Board  from "./components/board";
import { Sidebar } from "./components/sidebar";

function App() {



  const [boards, setBoards] = useState([
    {
      name: "Good name",
      columns: [
        {
          name: "Do/doing/done",
          tasks: [
            {
              title: "Test title",
              description: "description",
              status: "Todo",
              subTasks: [
                {
                  subTaskTitle: "Nazwa etapu taska",
                  isCompleted: false,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Tablica 2",
      columns: [
        {
          name: "Todo",
          tasks: [
            {
              title: "Test title",
              description: "description",
              status: "Todo",
              subTasks: [
                {
                  subTaskTitle: "Nazwa etapu taska",
                  isCompleted: false,
                },
              ],
            },
            {
              title: "Task nr 2",
              description: "description",
              status: "Todo",
              subTasks: [
                {
                  subTaskTitle: "Nazwa etapu taska",
                  isCompleted: false,
                },
              ],
            },

            {
              title: "Task 3",
              description: "description",
              status: "Todo",
              subTasks: [
                {
                  subTaskTitle: "Nazwa etapu taska",
                  isCompleted: false,
                },
              ],
            },
          ],
        },
        {
          name: "In progress",
          tasks: [
            {
              title: "Test title",
              description: "description",
              status: "Todo",
              subTasks: [
                {
                  subTaskTitle: "Nazwa etapu taska",
                  isCompleted: false,
                },
              ],
            },
            {
              title: "Test in progres dwa",
              description: "description",
              status: "Todo",
              subTasks: [
                {
                  subTaskTitle: "Nazwa etapu taska",
                  isCompleted: false,
                },
              ],
            },
          ],
        },
        {
          name: "Complete",
          tasks: [
            {
              title: "Test title",
              description: "description",
              status: "Todo",
              subTasks: [
                {
                  subTaskTitle: "Nazwa etapu taska",
                  isCompleted: false,
                },
              ],
            },
          ],
        },
      ],
    },
  ]);

  const [activeBoard, setActiveBoard] = useState(boards[0].name);


  const addNewBoard = (boardName, columns) => {
    const newBoard = {
      name: boardName,
      columns: columns,
    };

  const newBoardList = [...boards, newBoard];
    setBoards(newBoardList);
  };

  const addNewTask = (taskProperties) =>{
    const newTask = {
      title: taskProperties.title,
      description: taskProperties.description,
      status: taskProperties.status,
      subTasks: [taskProperties.subTasks]
    }

    const newBoard = boards
    // const currentColumn = currentBoard.find((board)=> board.columns === "Todo")
    // console.log(currentBoard)
    const currentBoard = (newBoard.find((board)=>board.name===activeBoard))
    const currentColumn = currentBoard.columns.find((column)=> (column.name === taskProperties.status ))
    currentColumn?.tasks.push(newTask)

    // console.log(newBoard)
    // console.log(boards)
    // const chuj = [newBoard]
    // setBoards(newBoard)
    console.log(boards)
    setBoards(newBoard)
    console.log(boards)


    console.log(boards)
    // console.log(newBoard)
  }

  const changeActiveBoard = (boardName) => {
    setActiveBoard(boardName);
  };

  console.log(boards);

  let dupa = boards


  return (
    <div className="App">
      <header className="App-header">
        <Sidebar
          boards={boards}
          activeBoard={activeBoard}
          handleChangeActiveBoard={changeActiveBoard}
          handleAddNewBoard={addNewBoard}
        ></Sidebar>
      </header>
      <Board boards={dupa} activeBoard={activeBoard} addNewTask={addNewTask}></Board>
    </div>
  );
}

export default App;
