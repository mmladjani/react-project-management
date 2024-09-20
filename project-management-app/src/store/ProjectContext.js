import { createContext, useReducer } from "react";

export const ProjectContext = createContext({
    projectList: [],
    handleCreateProject: () => {},
    handleDeleteProject: () => {}
});

function projectListReducer(state, action){
    console.log(state, 'state')
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
            projectList: state.projectList.filter(project => project['id'] !== action.payload['id'])
        }
    }   
}

export default function ProjectContextProvider({children}){

    const [projectListState, projectListDispatch] = useReducer(projectListReducer, {
        projectList: []
    })

    function createProject(inputValue){
        projectListDispatch({
            type: 'ADD_PROJECT',
            payload: inputValue
        });
    }

    function deleteProject(selectedProject){
        projectListDispatch({
            type: 'DELETE_PROJECT',
            payload: selectedProject
        })
    }

    const valueCtx = {
        projectList: projectListState,
        handleCreateProject: createProject,
        handleDeleteProject: deleteProject
    }

    console.log(projectListState, 'projectListState');

    return (
        <ProjectContext.Provider value={valueCtx}>
            {children}
        </ProjectContext.Provider>
    )
}