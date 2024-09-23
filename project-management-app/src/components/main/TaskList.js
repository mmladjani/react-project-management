import Button from "../ui/Button";
import { useRef, useContext } from 'react';

import { ProjectContext } from "../../store/ProjectContext";

const TaskList = () => {

    const { projectList, selectedProject, handleAddTask, handleDeleteTask } = useContext(ProjectContext);

    const taskTitle = useRef();

    const currentProject = projectList.filter(project => project.id === selectedProject.id);

    return ( 
        <div className="flex flex-col my-9">
            <h1 className="text-xl font-bold mb-5">Your tasks</h1>
            <div className="flex flex-row justify-between mb-5">
                <div className="flex flex-col">
                    <label 
                        className="block mb-2 text-sm font-medium text-slate-900"
                        htmlFor="task-title">Add task
                    </label>
                    <input 
                        className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-56 p-2.5"
                        ref={taskTitle} id="task-title"
                        type='text'
                        required>
                    </input>
                </div>
                <div>
                    <Button 
                        onClick={() => handleAddTask(taskTitle.current.value)}
                        className="border-b-2 border-slate-900 font-medium text-sm w-full sm:w-auto text-center"
                    >Add</Button>
                </div>
            </div>
            <ul className="flex flex-col">
                {currentProject[0].tasks.length ? currentProject[0].tasks.map((task) => {
                    return (
                        <div className="flex flex-row justify-between">
                            <li className="my-3" key={task['id']}>{task['task-title']}</li>
                            <Button onClick={() => handleDeleteTask(task['id'])}>Clear</Button>
                        </div>
                        )
                    }
                ) : <p>You don't have any tasks created for this project</p>}
            </ul>
        </div>
    )
}

export default TaskList;