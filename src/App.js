import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Project from './components/Project';

function App() {
  const [globalOpen, setGlobalOpen] = useState(false)
  return (
    <div className="font-uxumLight w-screen h-screen overflow-hidden grid grid-rows-12 grid-cols-4 bg-black p-2">
      <div className='col-span-4 row-span-1'>
        <Navigation />
      </div>
      <div className='col-span-2 row-span-11 p-1'>
        <Header globalOpen={globalOpen} />
      </div>
      <div className='col-span-2 row-span-11 overflow-y-scroll p-1'>
        <Project setGlobalOpen={setGlobalOpen} />
        <Project setGlobalOpen={setGlobalOpen} />
        <Project setGlobalOpen={setGlobalOpen} />
        <Project setGlobalOpen={setGlobalOpen} />

        <Project setGlobalOpen={setGlobalOpen} />
        <Project setGlobalOpen={setGlobalOpen} />
      </div>
    </div>
  );
}

export default App;
