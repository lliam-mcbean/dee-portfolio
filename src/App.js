import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Project from './components/Project';

function App() {
  return (
    <div className="font-uxumLight w-screen h-screen overflow-hidden grid grid-rows-12 grid-cols-4 bg-black">
      <div className='col-span-4 row-span-1'>
        <Navigation />
      </div>
      <div className='col-span-2 row-span-11 p-1'>
        <Header />
      </div>
      <div className='col-span-2 row-span-11 overflow-y-scroll p-1'>
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
}

export default App;
