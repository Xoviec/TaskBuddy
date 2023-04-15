import { useState } from "react";
import React from "react";
import close from "../close.svg";
import { Menu } from "@headlessui/react";

export const NewTask = ({ addNewTask }) => {
  const [formFields, setFormFields] = useState([
    {
      subTask: "",
    },
  ]);

  const [showModal, setShowModal] = useState(false);

  const addField = () => {
    let object = {
      subTask: "",
    };

    setFormFields([...formFields, object]);
  };

  //   const handleFormChange = (event, index) => {
  //     let data = [...formFields];

  //     data[index] = event.target.value;
  //     setFormFields(data);
  //   };
  const handleFormChange = (event, index) => {
    let data = [...formFields];

    if (event.target.name === "subTask" && event.target.value === "") {
      data.splice(index, 1);
    } else {
      data[index] = event.target.value;
    }

    setFormFields(data);
  };

  const handleAddNewTask = (e) => {
    const newTask = {
      title: e.target.elements.title.value,
      description: e.target.elements.desc.value,
      status: e.target.elements.status.value,
      subTasks: formFields,
    };

    addNewTask(newTask);

    // // console.log(e.target.elements.title.value)
    // console.log(newTask);
    e.preventDefault();
    setShowModal(false);
  };

  return (
    <div>
      <button className="btn-add-task" onClick={() => setShowModal(true)}>
        +Add New Task
      </button>
      {showModal && (
        <div className="modal">
          <p>Add new task</p>
          <div className="modal-content">
            <form className="form-add" action="" onSubmit={handleAddNewTask}>
              <div className="wrapper-add">
                <p className="p-add">Title</p>
                <input
                  className="input-add"
                  type="text"
                  name="title"
                  placeholder="e.g. Add pagination feature"
                />
              </div>
              <div className="wrapper-add">
                <p className="p-add">Description</p>

                <input
                  className="input-add"
                  type="text"
                  name="desc"
                  placeholder="e.g. Add pagination feature for improved navigation and easier browsing."
                />
              </div>
              {/* <div className="wrapper-add">
                <p className="p-add">Status</p>
                <input
                  className="input-add"
                  type="text"
                  name="status"
                  placeholder="status"
                />
              </div> */}
              <p className="p-add">Subtasks</p>

              {formFields.map((form, index) => {
                return (
                  <div className="wrapper-add">
                    <div className="wrapper-sub">
                      <input
                        className="input-add"
                        key={index}
                        type="text"
                        name="subTask"
                        placeholder="e.g. Implement the logic to show the correct subset of items based on the current page.
                        "
                        onChange={(event) => handleFormChange(event, index)}
                      />
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

              <button className="st-add" type="button" onClick={addField}>
                + Add New Subtask
              </button>

              <div className="wrapper-add">
                <p className="p-add">Status</p>
                <select
                  className="select-add"
                  name="status"
                  defaultValue=""
                  onChange={(event) => handleFormChange(event)}
                >
                  <option value="" disabled hidden>
                    Select Status
                  </option>
                  <option value="todo">Todo</option>
                  <option value="doing">Doing</option>
                  <option value="done">Done</option>
                </select>
              </div>
              {/* <button type="button" className="btn btn-create-task">
              Create Task
            </button> */}
              <button type="submit" className="btn btn-create-task">
                Create Task
              </button>
              <button
                type="button"
                className="btn-close-add"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
