import { useContext } from 'react';
import CreateProjectForm from './CreateProjectForm';
import ProjectDetailsView from './ProjectDetailsView';
import NoProjects from './NoProjects';
import { ProjectContext } from '../../store/ProjectContext';

const MainContent = () => {

    const { formView, selectedProject } = useContext(ProjectContext);

    return (
        <div className='w-8/12'>
            {formView || Boolean(selectedProject) ? '' : <NoProjects />}
            {formView && <CreateProjectForm />}
            {Boolean(selectedProject) && <ProjectDetailsView />}
        </div>
    )
}

export default MainContent;