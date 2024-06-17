import noProjectImg from '../../assets/no-projects.png';
import Button from '../ui/Button';

const NoProjects = ({openForm}) => {
    return (
        <div className="flex justify-center">
            <div className="flex flex-col justify-center align-middle">
                <img src={noProjectImg} alt="no projects" className='w-20 self-center' />
                <h1 className="text-xl font-bold mb-5 self-center">No projects selected</h1>
                <p className='self-center'>Select a project or get started with a new one</p>
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

export default NoProjects;