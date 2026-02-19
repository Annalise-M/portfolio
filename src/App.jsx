import './App.scss';
import Landing from './script';
import Projects from './components/Projects';
import CustomCursor from './components/CustomCursor';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  return (
    <>
      <CustomCursor />
      <AnimatedBackground />
      <Landing />
      <Projects />
    </>
  );
}

export default App;
