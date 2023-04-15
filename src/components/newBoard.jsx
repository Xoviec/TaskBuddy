import { useState } from "react";
import React from "react";
import logokan from "../kanban-blue.svg";

export const NewBoard = ({ handleAddNewBoard, boards }) => {
  // const allColumns = (boards.map((board)=>
  //         board.columns
  // ))
  // console.log(allColumns)

  const [formFields, setFormFields] = useState([
    {
      name: "",
      tasks: [],
    },
  ]);

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index].name = event.target.value;
    setFormFields(data);

    // console.log(data)
  };

  const addField = () => {
    let object = {
      name: "",
      tasks: [],
    };

    setFormFields([...formFields, object]);
  };

  const addNewBoard = (e) => {
    // console.log(e.target.name.value)
    const newBoard = e.target.name.value;

    console.log(formFields);

    handleAddNewBoard(newBoard, formFields);
    setFormFields([
      {
        name: "",
        tasks: [],
      },
    ]);
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={addNewBoard}>
        <input type="text" name="name" placeholder="nazwa borda" />

        {formFields.map((form, index) => {
          return (
            <input
              key={index}
              type="text"
              name="col-name"
              onChange={(event) => handleFormChange(event, index)}
              placeholder="nazwa kol"
            />
          );
        })}
        <button className="btn--add-new" type="submit">
          <img src={logokan} className="kanban-logo" alt="Kanban logo" /> &nbsp;
          + Add New Board
        </button>
      </form>
      <button onClick={addField}>Add New Column</button>
    </div>
  );
};
