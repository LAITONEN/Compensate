import React from 'react';
import Main from './components/Main/Main'
import Idea from './components/Idea/Idea'
import PromiseVision from './components/PromiseVision/PromiseVision'
import Steps from './components/Steps/Steps'
import Offer from './components/Offer/Offer'
import Integration from './components/Integration/Integration'
import Community from './components/Community/Community'
import Traction from './components/Traction/Traction'
import Impact from './components/Impact/Impact'
import Quote from './components/Quote/Quote'
import Credits from './components/Credits/Credits'
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
      <Steps />
      <Offer />
      <Integration />
      <Community />
      <Traction />
      <Impact />
      <Quote />
      <Credits />
    </div>
  );
}

export default App;
