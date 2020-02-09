import React from 'react';
import Main from './components/Main/Main'
import Idea from './components/Idea/Idea'
import PromiseVision from './components/PromiseVision/PromiseVision'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faArrowDown, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import './App.scss';


library.add(fab, faArrowDown, faBars, faTimes)

function App() {
  return (
    <div className="App">
      <Main />
      <Idea />
      <PromiseVision />
    </div>
  );
}

export default App;
