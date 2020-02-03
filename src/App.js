import React from 'react';
import Main from './components/Main'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import './App.scss';


library.add(fab, faArrowDown)

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
