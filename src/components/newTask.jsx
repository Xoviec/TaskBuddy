import { useState } from "react";
import React from "react";


export const NewTask = ({addNewTask}) =>{



    const [formFields, setFormFields] = useState([
        {
            subTask: '',
        }
    ])

    const addField = () =>{


        let object = 
        {
            subTask: '',
        }

        setFormFields([...formFields, object])
    }
    
    const handleFormChange = (event, index) =>{

        let data = [...formFields]


        data[index] = event.target.value
        setFormFields(data)
    }

    const handleAddNewTask = (e) =>{


        const newTask = {
            title: e.target.elements.title.value,
            description: e.target.elements.desc.value,
            status: e.target.elements.status.value,
            subTasks: formFields
        }

        addNewTask(newTask)


        // console.log(e.target.elements.title.value)
        console.log(newTask)
        e.preventDefault()
      }
    

    return(
        <div>
            <form action="" onSubmit={handleAddNewTask}>
                <input type="text" name="title" placeholder="Title" />
                <input type="text" name="desc" placeholder="Description" />
                <input type="text" name="status" placeholder="status" />
                {
                    formFields.map((form, index)=>{
                        return(
                            <input key={index} type="text" name="subTask" onChange={event => handleFormChange(event, index)} />
                        )
                    })
                }
            <button type="submit" className="btn btn-add-task">+Add New Task</button>
          </form>
          <button onClick={addField}>Add New Column</button>

        </div>
    )
}