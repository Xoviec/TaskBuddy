import { Task } from "./task";
import React from "react";



export const Column = (props) => {
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
