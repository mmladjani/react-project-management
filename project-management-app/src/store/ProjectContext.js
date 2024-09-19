import { createContext, useReducer } from "react";

export const ProjectContext = createContext({
    projectList: []
});

function projectListReducer(state, action){
    console.log('test');
}

export default function ProjectContextProvider({children}){

    const [projectListState, projectListDispatch] = useReducer(projectListReducer, {
        projectList: []
    })

    return (
        <ProjectContext.Provider value={''}>
            {children}
        </ProjectContext.Provider>
    )
}