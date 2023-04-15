import { Task } from "./task";
import React, { useEffect, useState } from "react";
import actions from "./duck/actions";
import { connect } from "react-redux";

const Column = (props) => {

  
  const [columnTasks, setColumn] = useState(props.column.tasks)

  useEffect(()=>{

    console.log('ssraka')

  }, props)
  console.log(columnTasks)
  console.log('gownoo')
 
  console.log(props.column.tasks)
  return (
    <div className="column">
      <h2 className="heading-secondary">{props.column.name} (x)</h2>
      <div>
        {props.column.tasks.map((task) => {
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
