import types from "./types";

const INITIAL_STATE = {
    list:[
        {
            name: "Good name",
            columns: [
              {
                name: "Do/doing/done",
                tasks: [
                  {
                    title: "Test title",
                    description: "description",
                    status: "Todo",
                    subTasks: [
                      {
                        subTaskTitle: "Nazwa etapu taska",
                        isCompleted: false,
                      },
                      {
                        subTaskTitle: "Task drugi",
                        isCompleted: false,
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "Tablica 2",
            columns: [
              {
                name: "Todo",
                tasks: [
                  {
                    title: "Test title",
                    description: "description",
                    status: "Todo",
                    subTasks: [
                      {
                        subTaskTitle: "Nazwa etapu taska",
                        isCompleted: false,
                      },
                    ],
                  },
                  {
                    title: "Task nr 2",
                    description: "description",
                    status: "Todo",
                    subTasks: [
                      {
                        subTaskTitle: "Nazwa etapu taska",
                        isCompleted: false,
                      },
                    ],
                  },
      
                  {
                    title: "Task 3",
                    description: "description",
                    status: "Todo",
                    subTasks: [
                      {
                        subTaskTitle: "Nazwa etapu taska",
                        isCompleted: false,
                      },
                    ],
                  },
                ],
              },
              {
                name: "In progress",
                tasks: [
                  {
                    title: "Test title",
                    description: "description",
                    status: "Todo",
                    subTasks: [
                      {
                        subTaskTitle: "Nazwa etapu taska",
                        isCompleted: false,
                      },
                    ],
                  },
                  {
                    title: "Test in progres dwa",
                    description: "description",
                    status: "Todo",
                    subTasks: [
                      {
                        subTaskTitle: "Nazwa etapu taska",
                        isCompleted: false,
                      },
                    ],
                  },
                ],
              },
              {
                name: "Complete",
                tasks: [
                  {
                    title: "Test title",
                    description: "description",
                    status: "Todo",
                    subTasks: [
                      {
                        subTaskTitle: "Nazwa etapu taska",
                        isCompleted: false,
                      },
                    ],
                  },
                ],
              },
            ],
          }
    ]
}

const stateReducer = (state = INITIAL_STATE, action) =>{
    switch (action.type){
        case types.COMPONENT_UPDATE:
            return{
                ...state, list:[...state.list]
            }
        default:
        return state
    }

}

export default stateReducer