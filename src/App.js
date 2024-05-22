import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Project from './components/Project';

function App() {
  const [globalOpen, setGlobalOpen] = useState(false)
  return (
    <div className="font-uxumLight w-screen relative h-screen overflow-hidden relative bg-black p-2">
      <div className=''>
        <Navigation />
      </div>
      <div className='flex h-[90vh]'>
      <div className='w-1/2 p-1 sticky z-40'>
        <Header globalOpen={globalOpen} />
      </div>
      <div className='w-1/2 overflow-x-hidden overflow-y-scroll p-1'>
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
