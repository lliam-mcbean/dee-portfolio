import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Project from './components/Project';

function App() {
  const [globalOpen, setGlobalOpen] = useState(false)
  return (
    <div className="prose font-uxumLight w-screen relative h-screen overflow-x-hidden lg:overflow-hidden bg-black p-2">
      <div className='sticky'>
        <Navigation />
      </div>
      <div className='block lg:flex h-[90vh] '>
      <div className='w-full lg:w-1/2 p-1 h-[90vh]  z-40'>
        <Header globalOpen={globalOpen} />
      </div>
      <div className='w-full lg:w-1/2 overflow-x-hidden lg:overflow-y-scroll p-1'>
        <Project setGlobalOpen={setGlobalOpen} />
        <Project setGlobalOpen={setGlobalOpen} />
        <Project setGlobalOpen={setGlobalOpen} />
        <Project setGlobalOpen={setGlobalOpen} />
        <Project setGlobalOpen={setGlobalOpen} />
        <Project setGlobalOpen={setGlobalOpen} />
        <div id='contact' className='px-2'>
          <div className='bg-green-500 h-[89.5vh] border border-green-500 rounded-lg'>

          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
