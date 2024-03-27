import { Tilt } from 'react-tilt'


import Card from './components/Card.jsx'
import Menu from './Menu.jsx'
import img01 from "./assets/img/img01.jpg"
import img02 from "./assets/img/img02.jpg"
import img03 from "./assets/img/img03.jpg"

import style from './App.module.css'


function App() {

  const defaultOptions = {
    reverse:        true,  // reverse the tilt direction
    max:            15,     // max tilt rotation (degrees)
    perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
    speed:          1000,   // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,    // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  }
  

  return (
    <>

    <Menu />
    <div className={style.section01}>
      <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
      <div><Card
      title="Paisagem 1"
      image={img01}
      text01="a"
      text02="Falencia"
      /></div>
    </Tilt>
    <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
      <div><Card
      title="Paisagem 2"
      image={img02}
      text01="b"
      text02="Dos"
      /></div>
    </Tilt>
    <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
      <div><Card
      title="Paisagem 3"
      image={img03}
      text01="c"
      text02="Rins"
      /></div>
    </Tilt> 
    </div>

    </>
  )
}

export default App