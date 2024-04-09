import Sidebar from './components/main/Sidebar';
import MainContent from './components/main/MainContent';

const DUMMY_CONTENT = [
  {
    title: 'First project',
    description: 'This is a test project'
  }
]

function App() {
  return (
    <>
      <Sidebar projectsList={DUMMY_CONTENT}/>
      <MainContent />
    </>
  );
}

export default App;
