import React from 'react'
import {Leftcard} from './components/Leftcard'
import CanvasDiv from './components/CanvasDiv'
import './asserts/styles.css';
import './asserts/flowy.min.css';
class App extends React.Component {
  render() {
    return (
        <div style={{height: 560}}>
        <Leftcard />
        <CanvasDiv />
      </div>  
    )
  }
}

export default App;