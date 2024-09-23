import { createContext, useReducer } from "react";
import { nanoid } from "nanoid";

export const ProjectContext = createContext({
    projectList: [],
    selectedProject: {},
    handleCreateProject: () => {},
    handleDeleteProject: () => {},
    handleAddTask: () => {}
});

function projectListReducer(state, action){

    if(action.type === 'ADD_PROJECT'){  

        console.log(state, 'state');
        console.log(action, 'action');

        return {
            ...state,
            projectList: [
                ...state.projectList,
                action.payload
            ]
        }
    }

    if(action.type === 'DELETE_PROJECT'){

        console.log(state, 'state');
        console.log(action, 'action');

        return {
            ...state,
            selectedProject: {},
            projectList: state.projectList.filter(project => project['id'] !== action.payload['id'])
        }
    }
    
    if(action.type === 'SELECT_PROJECT'){

        console.log(state, 'state');
        console.log(action, 'action');

        return {
            ...state,
            selectedProject: action.payload,
        }
    }

    if(action.type === 'ADD_TASK'){

        console.log(state, 'state');
        console.log(action, 'action');

        return {
            ...state,
            projectList: state.projectList.map(project => {
                if(project.id === action.payload){
                    const updatedTasks = [
                        ...project.tasks, 
                        {
                            id: nanoid(),
                            'task-title': action.payload
                        }];

                    return { 
                        ...project,
                        tasks: updatedTasks
                    };
                }
                return project;
            })
        }
    }
}

export default function ProjectContextProvider({children}){

    const [projectListState, projectListDispatch] = useReducer(projectListReducer, {
        projectList: [],
        selectedProject: {},
    })

    function createProject(formInputValues){
        projectListDispatch({
            type: 'ADD_PROJECT',
            payload: formInputValues
        });
    }

    function deleteProject(selectedProject){
        projectListDispatch({
            type: 'DELETE_PROJECT',
            payload: selectedProject
        })
    }

    function selectProject(project){
        projectListDispatch({
            type: "SELECT_PROJECT",
            payload: project
        })
    }

    function addTask(taskInputValue) {
        projectListDispatch ({
            type: "ADD_TASK",
            payload: taskInputValue
        })
    };

    const valueCtx = {
        projectList: projectListState.projectList,
        handleCreateProject: createProject,
        handleDeleteProject: deleteProject,
        handleSelectProject: selectProject,
        handleAddTask: addTask
    }

    console.log(projectListState, 'projectListState')

    return (
        <ProjectContext.Provider value={valueCtx}>
            {children}
        </ProjectContext.Provider>
    )
}