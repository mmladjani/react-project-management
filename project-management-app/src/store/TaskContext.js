import { createContext, useReducer } from 'react';

export const TaskContext = createContext({
    handleAddTask: () => {},
    handleDeleteTask: () => {}
})

function taskListReducer(){
    //... some code here ... //
}

export default function TaskContextProvider({ children }){

    const [taskListState, taskListDispatch] = useReducer(taskListReducer, {
        tasks: []
    })

    return (
        <TaskContext.Provider>
            {children}
        </TaskContext.Provider>
    )
}