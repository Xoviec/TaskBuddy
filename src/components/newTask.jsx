import { useState } from "react";
import React from "react";
import close from "../close.svg";

export const NewTask = ({ addNewTask, columns }) => {
  const [formFields, setFormFields] = useState([
    {
      subTaskTitle: "",
      isCompleted: false,
    },
  ]);

  const [showModal, setShowModal] = useState(false);

  const addField = () => {
    let object = {
      subTaskTitle: "",
      isCompleted: false,
    };

    setFormFields([...formFields, object]);

    console.log(formFields)
  };

  const handleFormChange = (event, index) => {
    let data = [...formFields]

    console.log(index)
    console.log(data[index])
    data[index].subTaskTitle = event.target.value


    console.log(data[index])
    
    setFormFields(data)
  };

  const handleAddNewTask = (e) => {
    const newTask = {
      title: e.target.elements.title.value,
      description: e.target.elements.desc.value,
      status: e.target.elements.status.value,
      subTasks: formFields
    };



    addNewTask(newTask);
    e.preventDefault();
    setShowModal(false);
  };

  return (
    <div>
      <button className="btn-add-task" onClick={() => setShowModal(true)}>
        +Add New Task
      </button>
      {showModal && (
        <div className="modalero" onClick={() => setShowModal(!showModal)}>
          <div className="modal-bg">
            <div className="modal" onClick={(event) => event.stopPropagation()}>
              <p>Add New Task</p>
              <div className="modal-content">
                <form
                  className="form-add"
                  action=""
                  onSubmit={handleAddNewTask}
                >
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
                            // onClick={() =>
                            //   handleFormChange(
                            //     { target: { name: "subTask", value: "" } },
                            //     index
                            //   )
                            // }
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
                  // onChange={(event) => handleFormChange(event)}
                >
                  <option value="" disabled hidden>
                    Select Status
                  </option>
                  {
                    columns.map((col)=>{
                      return(
                        <option>{col}</option>
                      )
                    })
                  }
                  {/* <option value="Todo">Todo</option>
                  <option value="doing">Doing</option>
                  <option value="done">Done</option> */}
                    </select>
                  </div>
                  {/* <button type="button" className="btn btn-create-task">
              Create Task
            </button> */}
                  <div className="wrapito">
                    <button type="submit" className="btn btn-create-task">
                      Create Task
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
 