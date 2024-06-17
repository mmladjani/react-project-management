import Button from '../ui/Button';
import TaskList from './TaskList';

const ProjectDetailsView = ({setProjectList, projectList, selectedProject, deleteProject}) => {

    const currentDate = new Date(selectedProject['project-date']);
    const dateTimeFormatter = new Intl.DateTimeFormat("en-US", {dateStyle: 'long'});
    const formattedDate = dateTimeFormatter.format(currentDate);

    return (
        <div className="mx-9 my-9">
            <div className="flex flex-row align-middle justify-between">
                <h1 className="block text-xl font-bold justify-start">{selectedProject['project-title']}</h1>
                <Button
                    onClick={() => deleteProject(selectedProject)}
                    className="border-b-2 border-slate-900 font-medium text-sm w-full sm:w-auto text-center"    
                >Delete</Button>
            </div>
            <div className='block'>
                <p className="text-sm text-gray-400 mb-5">{formattedDate}</p>
                <p className="text-md font-thin mb-9">{selectedProject['project-description']}</p>
                <hr />
                <TaskList selectedProject={selectedProject} setProjectList={setProjectList} projectList={projectList} />
            </div>
        </div>
    )
}

export default ProjectDetailsView;