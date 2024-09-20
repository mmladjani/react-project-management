import { createContext, useReducer } from "react";

export const ProjectContext = createContext({
    projectList: [],
    selectedProject: null,
    handleCreateProject: () => {},
    handleDeleteProject: () => {}
});

function projectListReducer(state, action){
    console.log(state.projectList, 'state')
    console.log(action.payload, 'action.payload')
    if(action.type === 'ADD_PROJECT'){  
        return {
            ...state,
            projectList: [
                ...state.projectList,
                action.payload
            ]
        }
    }

    if(action.type === 'DELETE_PROJECT'){
        return {
            ...state,
            selectedProject: null,
            projectList: state.projectList.filter(project => project['id'] !== action.payload['id'])
        }
    }
    
    if(action.type === 'SELECT_PROJECT'){
        return {
            ...state,
            selectedProject: action.payload
        }
    }
}

export default function ProjectContextProvider({children}){

    const [projectListState, projectListDispatch] = useReducer(projectListReducer, {
        projectList: [],
        selectedProject: {}
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

    const valueCtx = {
        projectList: projectListState.projectList,
        handleCreateProject: createProject,
        handleDeleteProject: deleteProject,
        handleSelectProject: selectProject
    }

    return (
        <ProjectContext.Provider value={valueCtx}>
            {children}
        </ProjectContext.Provider>
    )
}