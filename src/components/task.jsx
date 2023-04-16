import React, { useEffect } from "react";

export const Task = (props) => {

  return (
    <div className="taks-card">
      <h2 className="task-title">{props.task.title}</h2>
      <p className="subtask-count">0 of {(props.task.subTasks).length} subtasks</p>
    </div>
  );
};
