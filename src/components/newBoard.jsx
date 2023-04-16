import { useState } from "react";
import React from "react";
import logokan from "../kanban-blue.svg";
import close from "../close.svg";

export const NewBoard = ({ handleAddNewBoard, boards }) => {
  const [formFields, setFormFields] = useState([
    {
      name: "",
      tasks: [],
    },
  ]);
  const [showModal, setShowModal] = useState(false);

  // const handleFormChange = (event, index) => {
  //   let data = [...formFields];
  //   data[index].name = event.target.value;
  //   setFormFields(data);
  // };
  // const handleFormChange = (event, index) => {
  //   let data = [...formFields];

  //   if (event.target.name === "subTask" && event.target.value === "") {
  //     data.splice(index, 1);
  //   } else {
  //     data[index] = event.target.value;
  //   }

  //   setFormFields(data);
  // };
  const handleFormChange = (event, index) => {
    let data = [...formFields];

    if (event.target.name === "subTask" && event.target.value === "") {
      // remove the subtask if its value is empty
      data[index].tasks.pop();
    } else if (event.target.name === "col-name") {
      // update the column name
      data[index].name = event.target.value;
    } else if (event.target.name === "subTask") {
      // add a new subtask to the current column
      data[index].tasks.push(event.target.value);
    }

    setFormFields(data);
  };

  const addField = () => {
    let object = {
      name: "",
      tasks: [],
    };

    setFormFields([...formFields, object]);
  };

  const addNewBoard = (e) => {
    const newBoard = e.target.name.value;

    console.log(formFields);

    handleAddNewBoard(newBoard, formFields);
    setFormFields([
      {
        name: "",
        tasks: [],
      },
    ]);
    setShowModal(false); // set showModal to false
    e.preventDefault();
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <button className="btn--add-new" onClick={toggleModal}>
        <img src={logokan} className="kanban-logo" alt="Kanban logo" /> &nbsp; +
        Create New Board
      </button>

      {showModal && (
        <div className="modalero" onClick={() => setShowModal(!showModal)}>
          <div className="modal-bg">
            <div className="modal" onClick={(event) => event.stopPropagation()}>
              <p className="modal-heading">Add New Board</p>

              <form onSubmit={addNewBoard}>
                <p className="p-add">Name</p>
                <input
                  type="text"
                  name="name"
                  className="input-add"
                  placeholder="e.g. Web Design"
                />
                <p className="p-add">Columns</p>

                {formFields.map((form, index) => {
                  return (
                    <div className="wrapper-add">
                      <div className="wrapper-sub">
                        <input
                          className="input-add"
                          key={index}
                          type="text"
                          name="col-name"
                          onChange={(event) => handleFormChange(event, index)}
                          placeholder="e.g. Todo"
                        />{" "}
                        <img
                          className="close-btn"
                          src={close}
                          alt="Close button"
                          onClick={() =>
                            handleFormChange(
                              { target: { name: "subTask", value: "" } },
                              index
                            )
                          }
                        />
                      </div>
                    </div>
                  );
                })}

                <button className="column-add" type="button" onClick={addField}>
                  Add New Column
                </button>
                <button className="board-add" type="submit">
                  {" "}
                  Add Board
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
