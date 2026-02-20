import './App.scss';
import Landing from './script';
import Projects from './components/Projects';
import CustomCursor from './components/CustomCursor';
import AnimatedBackground from './components/AnimatedBackground';
import heroImage from './images/hero1.jpeg';

function App() {
  return (
    <>
      <div
        className="hero-background"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <CustomCursor />
      <AnimatedBackground />
      <Landing />
      <Projects />
    </>
  );
}

export default App;
