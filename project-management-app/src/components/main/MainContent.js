import CreateProjectForm from './CreateProjectForm';
import ProjectDetailsView from './ProjectDetailsView';
import NoProjects from './NoProjects';

const MainContent = ({formVisible, setFormVisible, setProjectList, projectList, setSelectedProject, selectedProject, openForm}) => {

    function createProject(inputValue){
        setProjectList(previousValue => {
            return [
                ...previousValue,
                inputValue
            ]
        })
    }

    function deleteProject(project){
        setProjectList(previousValue => {
            if(previousValue){
                return previousValue.filter(el => el['id'] !== project['id']);
            }
        })
        setSelectedProject('');
    }

    return (
        <div className='w-8/12'>
            {formVisible || selectedProject ? '' : <NoProjects openForm={openForm}/>}
            {formVisible && <CreateProjectForm onAddProject={createProject} setFormVisible={setFormVisible}/>}
            {selectedProject && <ProjectDetailsView setProjectList={setProjectList} projectList={projectList} selectedProject={selectedProject} deleteProject={deleteProject} />}
        </div>
    )
}

export default MainContent;