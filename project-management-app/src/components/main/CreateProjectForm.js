import { useContext, useRef } from 'react';
import Button from '../ui/Button';
import { ProjectContext } from '../../store/ProjectContext';
import { nanoid } from 'nanoid';

const CreateProjectForm = () => {

    const { handleCreateProject, handleCreateProjectFormView } = useContext(ProjectContext);

    const inputTitle = useRef();
    const inputDescription = useRef();
    const inputDate = useRef();

    function submitForm() {
        handleCreateProject({
            id: nanoid(),
            [inputTitle.current.id]: inputTitle.current.value,
            [inputDescription.current.id]: inputDescription.current.value,
            [inputDate.current.id]: inputDate.current.value,
            tasks: []
        });
    }

    return (
        <div className='mx-9 my-9'>
            <form className='flex flex-col max-w-lg' onSubmit={submitForm}>
                <div className="mb-5">
                    <label 
                        className="block mb-2 text-sm font-medium text-slate-900"
                        htmlFor="project-title">Project name
                    </label>
                    <input 
                        className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        ref={inputTitle} id="project-title"
                        type='text'
                        required>
                    </input>
                </div>
                <div className="mb-5">
                    <label 
                        className="block mb-2 text-sm font-medium text-slate-900"
                        htmlFor="project-description">Project description
                    </label>
                    <textarea 
                        className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        ref={inputDescription}
                        id="project-description"
                        required>
                    </textarea>
                </div>
                <div className="mb-5">
                    <label 
                        className="block mb-2 text-sm font-medium text-slate-900"
                        htmlFor="project-description">Project date
                    </label>
                    <input 
                        className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        ref={inputDate}
                        id="project-date"
                        type="date"
                        required>
                    </input>
                </div>
                <Button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Add new project</Button>
            </form>
            <div className='my-3 flex flex-col max-w-lg'>
                <Button onClick={() => handleCreateProjectFormView(false)} className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-1 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Cancel</Button>
            </div>
        </div>
    )
}

export default CreateProjectForm;