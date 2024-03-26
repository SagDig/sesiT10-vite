import './App.css'
import Card from './components/Card'
import img01 from "./assets/img/img01.jpg"
import img02 from "./assets/img/img02.jpg"
import img03 from "./assets/img/img03.jpg"


function App() {
  return(
    <>
      <Card
       title = "Batatinha"
       image = {img01}
       text1 = "descricao da paisagem 01"
       text2 = "Curitiba/PR"/>
       <Card
       title = "Batatinha"
       image = {img02}
       text1 = "descricao da paisagem 02"
       text2 = "Guaratuba/PR"/>
       <Card
       title = "Batatinha"
       image = {img03}
       text1 = "descricao da paisagem 03"
       text2 = "Colombo/PR"/>
    </>
  )
}

export default App
