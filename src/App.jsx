import { useState } from 'react'
import { CurrentDish } from './components/CurrentDish'
import {Container} from "react-bootstrap"
import "./assets/css/style.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import { SelectDish } from './components/SelectDish'
import { Rating } from './components/Rating'
import { dishes } from './Dishes'
function App() {
  const [dish, setDish] = useState(dishes[0])
  const selectedDish = (dish)=>{
    setDish(dish)
  }
  return (
    <div className="App" style={{height:window.innerHeight}}>
    <Container className='row mx-auto'>
        <CurrentDish dishes = {dishes} Current = {dish}/>
        <Rating dishes = {dishes} Current = {dish}/>
        <SelectDish dishes= {dishes} selectedDish = {selectedDish}/>
    </Container>

    </div>
  )
}

export default App
