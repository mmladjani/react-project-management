import { useContext } from 'react';
import Button from '../ui/Button';
import { ProjectContext } from '../../store/ProjectContext';

const Sidebar = ({ openForm }) => {

    const { projectList, handleSelectProject } = useContext(ProjectContext);
    
    return (
        <div className='flex-initial w-80 bg-slate-900 rounded-tr-lg'>
            <div className='ml-9 my-9 text-white'>
                <h1 className='mb-5 text-xl font-bold'>Your projects</h1>
                <div className='flex flex-col'>
                {projectList.map((project) => {
                    return (
                        <div className="my-3 mx-3 text-md" key={project['id']} onClick={() => handleSelectProject(project)}>
                            <div className='flex flex-col'>
                                <h3 className='text-base font-thin'>{project['project-title']}</h3>
                            </div>
                        </div>
                        )
                    })}
                </div>
                <Button
                    className="border border-white hover:bg-white hover:text-slate-800 focus:ring-1 focus:outline-none focus:ring-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center my-3 mx-3"
                    type="button" 
                    onClick={openForm}
                ><span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"><i className="fas fa-heart"
                aria-hidden="true"></i></span>Add new project
                </Button>
            </div>
        </div>

    )
}

export default Sidebar;