import Sidebar from './components/main/Sidebar';
import MainContent from './components/main/MainContent';
import { useState, useContext } from 'react';
import { ProjectContext } from './store/ProjectContext';
import ProjectContextProvider from './store/ProjectContext';

function App() {

  const { items } = useContext(ProjectContext);

  const [formVisible, setFormVisible] = useState(false);
  const [projectList, setProjectList] = useState('');
  const [selectedProject, setSelectedProject] = useState();

  const openForm = () => {
    setFormVisible(true);
    setSelectedProject(null);
  }

  return (
    <ProjectContextProvider>
      <div className="flex my-9 flex-row h-screen">
        <Sidebar
            setFormVisible={setFormVisible}
            setSelectedProject={setSelectedProject}
            projectList={projectList || []}
            openForm={openForm} 
          />
        <MainContent 
            setFormVisible={setFormVisible}
            formVisible={formVisible}
            setProjectList={setProjectList}
            projectList={projectList}
            setSelectedProject={setSelectedProject}
            selectedProject={selectedProject}
            openForm={openForm}
          />
      </div>
    </ProjectContextProvider>
  )
}

export default App;