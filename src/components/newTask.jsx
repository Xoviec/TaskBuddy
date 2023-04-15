import { useState } from "react";
import React from "react";


export const NewTask = ({addNewTask}) =>{

    console.log(addNewTask)


    const [formFields, setFormFields] = useState([
        {
            subTasks: []
        }
    ])
    

    const handleAddNewTask = (e) =>{

        const newTask = {
            title: e.target.elements.title.value,
            description: e.target.elements.desc.value,
            status: e.target.elements.status.value
        }
        console.log(e.target.elements.title.value)
        e.preventDefault()
      }
    

    return(
        <div>
            <form action="" onSubmit={handleAddNewTask}>
                <input type="text" name="title" placeholder="Title" />
                <input type="text" name="desc" placeholder="Description" />
                <input type="text" name="status" placeholder="status" />
            <button type="submit" className="btn btn-add-task">+Add New Task</button>
          </form>
        </div>
    )
}