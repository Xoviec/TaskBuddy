import { useState } from "react";
import React from "react";

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

  const handleFormChange = (event, index) => {
    let data = [...formFields];

    data[index] = event.target.value;
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

    // console.log(e.target.elements.title.value)
    console.log(newTask);
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
                  placeholder="Title"
                />
              </div>
              <div className="wrapper-add">
                <p className="p-add">Description</p>

                <input
                  className="input-add"
                  type="text"
                  name="desc"
                  placeholder="Description"
                />
              </div>
              <div className="wrapper-add">
                <p className="p-add">Status</p>
                <input
                  className="input-add"
                  type="text"
                  name="status"
                  placeholder="status"
                />
              </div>
              {formFields.map((form, index) => {
                return (
                  <div className="wrapper-add">
                    <input
                      className="input-add"
                      key={index}
                      type="text"
                      name="subTask"
                      onChange={(event) => handleFormChange(event, index)}
                    />
                  </div>
                );
              })}
              <button type="submit" className="btn btn-create-task">
                Create Task
              </button>
            </form>
            <button className="st-add" onClick={addField}>
              + Add New Subtask
            </button>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};
