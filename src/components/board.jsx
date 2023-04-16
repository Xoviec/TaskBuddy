import React, { useState } from "react";
import dot from "../dot3.svg";
import { NewTask } from "./newTask";
import Column  from "./column";
import { useEffect } from "react";
import { connect } from "react-redux";
import actions from "./duck/actions";



const Board = (props) => {


  const [boardsList, setBoardsList] = useState(props.boards)

  useEffect(() => {
    setBoardsList(props.boards);
  }, [props]);

  const currentBoard =boardsList?.find(
    (board) => board.name === props.activeBoard
  );


  const columns = []

  currentBoard.columns.map((board)=>{
    columns.push(board.name)
  })

  return (
    <div className="board">
      <div className="top-bar">
        {currentBoard.name}
        <div className="top-right">
        <NewTask addNewTask={props.addNewTask} columns={columns}/>
          <img alt="dot" src={dot} />
        </div>
      </div>
      <div className="columns">
        {currentBoard.columns.map((column) => {
          return <Column column={column} currentBoard={currentBoard} />;
        })}
      </div>
      
    </div>
  );
};
const mapDispatchToProps = dispatch =>({
  update: ()=>dispatch(actions.componentUpdate())
})

const mapStateToProps = state =>({
  items: state.stateItems
})

export default connect(mapStateToProps, mapDispatchToProps)(Board)
