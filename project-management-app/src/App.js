import Sidebar from './components/main/Sidebar';
import MainContent from './components/main/MainContent';
import ProjectContextProvider from './store/ProjectContext';

function App() {

  return (
    <ProjectContextProvider>
      <div className="flex my-9 flex-row h-screen">
        <Sidebar />
        <MainContent />
      </div>
    </ProjectContextProvider>
  )
}

export default App;