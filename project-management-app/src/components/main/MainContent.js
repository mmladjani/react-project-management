import CreateProjectForm from './CreateProjectForm';

const MainContent = ({formVisible, setFormVisible, setProjectList}) => {

    const createProject = (inputValue) => {
        setProjectList((previousValue) => {
            return [
                previousValue,
                inputValue
            ]
        })
    }

    return (
        <div className='flex-initial justify-start w-8/12'>
            {formVisible && <CreateProjectForm onAddProject={createProject} setFormVisible={setFormVisible}/>}
        </div>
    )
}

export default MainContent;