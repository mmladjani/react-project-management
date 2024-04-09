import './Sidebar.css';
import Button from '../ui/Button';

const Sidebar = ({projectsList}) => {
    return (
        <section>
            {projectsList.map((project, index) => {
                return (
                    <li key={index}>
                        <h1>{project.title}</h1>
                        <p>{project.description}</p>
                    </li>
                )
            })}
            {projectsList === 0 || null ? <Button>Add a project</Button> : ''}
        </section>

    )
}

export default Sidebar;