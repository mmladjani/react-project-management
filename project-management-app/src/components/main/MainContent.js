import { useContext } from 'react';
import CreateProjectForm from './CreateProjectForm';
import ProjectDetailsView from './ProjectDetailsView';
import NoProjects from './NoProjects';
import { ProjectContext } from '../../store/ProjectContext';

const MainContent = () => {

    const { formView, selectedProject } = useContext(ProjectContext);

    console.log(formView, 'formView');
    console.log(selectedProject, 'selectedProject');

    return (
        <div className='w-8/12'>
            {formView || selectedProject ? '' : <NoProjects />}
            {formView && <CreateProjectForm />}
            {selectedProject && <ProjectDetailsView />}
        </div>
    )
}

export default MainContent;