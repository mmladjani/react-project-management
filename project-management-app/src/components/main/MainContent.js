import { useContext } from 'react';
import CreateProjectForm from './CreateProjectForm';
import ProjectDetailsView from './ProjectDetailsView';
import NoProjects from './NoProjects';
import { ProjectContext } from '../../store/ProjectContext';

const MainContent = ({formVisible, setFormVisible, setProjectList, setSelectedProject, openForm}) => {

    const { selectedProject } = useContext(ProjectContext);

    return (
        <div className='w-8/12'>
            {formVisible || selectedProject ? '' : <NoProjects openForm={openForm}/>}
            {formVisible && <CreateProjectForm setFormVisible={setFormVisible}/>}
            {selectedProject && <ProjectDetailsView />}
        </div>
    )
}

export default MainContent;