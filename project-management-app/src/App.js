import Sidebar from './components/main/Sidebar';
import MainContent from './components/main/MainContent';
import { useState } from 'react';

function App() {

  const [formVisible, setFormVisible] = useState(false);
  const [projectList, setProjectList] = useState([{
    'project-title': '',
    'project-description': '',
    'project-date': ''
  }]);

  console.log(projectList)

  return (
    <div className="flex my-9 flex-row h-screen">
      <Sidebar setFormVisible={setFormVisible} projectList={projectList ? projectList : ''}/>
      <MainContent setFormVisible={setFormVisible} formVisible={formVisible} setProjectList={setProjectList}/>
    </div>
  )
}

export default App;
