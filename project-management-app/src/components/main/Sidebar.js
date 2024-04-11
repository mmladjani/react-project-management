import Button from '../ui/Button';

const Sidebar = ({projectList, setFormVisible}) => {

    const openForm = () => {
        setFormVisible(true);
    }
    
    return (
        <div className='flex-initial w-80 bg-slate-900 rounded-tr-lg'>
            <div className='ml-9 my-9 text-white'>
                <h1 className='text-xl font-bold'>Your projects</h1>
                <ul className='list-none'>
                {projectList.map((project, index) => {
                    return (
                        <li className="my-5 text-sm" key={index}>
                            <h3 className='text-base font-thin'>{project.title}</h3>
                            <p className='font-thin'>{project.description}</p>
                        </li>
                        )
                    })}
                </ul>
                <Button
                    className="border border-white hover:bg-white hover:text-slate-800 focus:ring-1 focus:outline-none focus:ring-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                    type="button" 
                    onClick={openForm}
                >Add new project</Button>
            </div>
        </div>

    )
}

export default Sidebar;