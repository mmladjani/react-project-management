import { createContext, useReducer } from "react";
import { nanoid } from "nanoid";

export const ProjectContext = createContext({
    projectList: [],
    selectedProject: null,
    handleCreateProjectFormView: () => {},
    handleCreateProject: () => {},
    handleSelectProject: () => {},
    handleDeleteProject: () => {},
    handleAddTask: () => {},
    handleDeleteTask: () => {}
});

function projectListReducer(state, action){

    if(action.type === 'ADD_PROJECT'){  

        return {
            ...state,
            formView: false,
            selectedProject: null,
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
            formView: false,
            projectList: state.projectList.filter(project => project['id'] !== action.payload['id']),
            selectedProject: null
        }
    }
    
    if(action.type === 'SELECT_PROJECT'){

        console.log(state, 'state');
        console.log(action, 'action');

        return {
            ...state,
            formView: false,
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

    if(action.type === 'DELETE_TASK'){
        console.log('delete task');

        return {
            ...state,
            projectList: state.projectList.map(project => { 
                if(project.id === state.selectedProject.id){
                    const filteredArray = project.tasks.filter(task => task['id'] !== action.payload);
                    return { 
                        ...project, 
                        tasks: filteredArray 
                    };
                }
                return project;
            })
        }
    }

    if(action.type === 'VIEW_FORM'){
        return {
            ...state,
            formView: action.payload,
        }
    }
}

export default function ProjectContextProvider({children}){

    const [projectListState, projectListDispatch] = useReducer(projectListReducer, {
        projectList: [],
        selectedProject: null,
        formView: false
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

    function deleteTask(taskId){
        projectListDispatch({
            type: "DELETE_TASK",
            payload: taskId
        })
    }

    function createProjectFormView(view){
        projectListDispatch({
            type: 'VIEW_FORM',
            payload: view
        })
    }

    const valueCtx = {
        projectList: projectListState.projectList,
        formView: projectListState.formView,
        selectedProject: projectListState.selectedProject,
        handleCreateProjectFormView: createProjectFormView,
        handleCreateProject: createProject,
        handleDeleteProject: deleteProject,
        handleSelectProject: selectProject,
        handleAddTask: addTask,
        handleDeleteTask: deleteTask
    }

    console.log(projectListState, 'projectListState')

    return (
        <ProjectContext.Provider value={valueCtx}>
            {children}
        </ProjectContext.Provider>
    )
}