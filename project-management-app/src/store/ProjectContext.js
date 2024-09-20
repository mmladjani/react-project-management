import { createContext, useReducer } from "react";

export const ProjectContext = createContext({
    projectList: [],
    handleCreateProject: () => {},
    handleDeleteProject: () => {}
});

function projectListReducer(state, action){
    console.log(state, 'state')
    const newProjectList = [...state.projectList];

    if(action.type === 'ADD_PROJECT'){  
        return [
            ...newProjectList,
            action.payload
        ]
    }

    if(action.type === 'DELETE_PROJECT'){
        if(newProjectList.langth){
            return newProjectList.filter(el => el['id'] !== action.payload['id']);
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

    function deleteProject(project){
        projectListDispatch({
            type: 'DELETE_PROJECT',
            payload: project
        })
    }

    const valueCtx = {
        projectList: projectListState,
        handleCreateProject: createProject,
        handleDeleteProject: deleteProject
    }

    console.log(valueCtx, 'valueCtx');

    return (
        <ProjectContext.Provider value={valueCtx}>
            {children}
        </ProjectContext.Provider>
    )
}