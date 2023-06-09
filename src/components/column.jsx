import { Task } from "./task";
import React, { useEffect, useState } from "react";
import actions from "./duck/actions";
import { connect } from "react-redux";

const Column = (props) => {


  const reduxBoard = props.items.list

  const columnName = props.column.name
  const currentBoard = props.currentBoard


  const column = currentBoard?.columns.find((x)=>x.name===columnName)



  const currentBoardRedux = reduxBoard.find((x)=>(x.name===currentBoard.name))

  const currentColumnRedux = currentBoardRedux?.columns.find((column)=>column.name===columnName)
  let taskCounter = 0;
  {currentColumnRedux?.tasks?.map((task) => {
    taskCounter++
  })}
  
  return (
    <div className="column">
      <h2 className="heading-secondary">{props.column.name} ({taskCounter})</h2>
      <div>
        {currentColumnRedux?.tasks?.map((task) => {
          return <Task task={task} />;
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

export default connect(mapStateToProps, mapDispatchToProps)(Column)
