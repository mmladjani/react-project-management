import { useContext } from 'react';
import CreateProjectForm from './CreateProjectForm';
import ProjectDetailsView from './ProjectDetailsView';
import NoProjects from './NoProjects';
import { ProjectContext } from '../../store/ProjectContext';

const MainContent = () => {

    const { viewForm, selectedProject } = useContext(ProjectContext);

    return (
        <div className='w-8/12'>
            {viewForm || selectedProject ? '' : <NoProjects />}
            {viewForm && <CreateProjectForm />}
            {selectedProject && <ProjectDetailsView />}
        </div>
    )
}

export default MainContent;