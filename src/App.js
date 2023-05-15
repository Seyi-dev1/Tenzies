import './App.css';
import Tenzies from './components/Tenzies';
import Timer from './components/Timer';
import React from 'react';
import { nanoid } from 'nanoid';



const App = ()=>{
  const generateDice = ()=>{
    const diceArray = []
    for (let i = 0; i < 10; i++) {
        const random = Math.ceil(Math.random()*6)
        diceArray.push(
          {
            value:random,
            isHeld:false,
            id:nanoid()
          }
        )
    }
    return diceArray
  }
  const [dice, setDice] = React.useState(generateDice())
  const[tenzies, setTenzies] = React.useState(false)
  const[rolls, setRolls]= React.useState(1)
   React.useEffect(
    ()=>{
      const allHeld = dice.every((die)=>{
        return die.isHeld===true
      })
      const sameValues = dice.every((die)=>{
        return die.value === dice[0].value
      })
      const changeTenzies = ()=>{
        setTenzies(true)
        console.log('YOU WON')
      }
      allHeld && sameValues && changeTenzies()
    }, [dice]
  )
  const rollDice=()=>{
    setDice((prev)=>{
      return prev.map((die)=>{
        return die.isHeld===true?die:{...die, value: Math.ceil(Math.random()*6)}
      })
    })
    setRolls((prev)=>{
      return prev + 1
    })
  }
 const selectDie = (id)=>{
  setDice((prev)=>{
    return prev.map((die)=>{
      return id===die.id?{...die, isHeld:!die.isHeld}:die
    })
  })
 }
 const resetGame = ()=>{
  setDice(generateDice())
  setTenzies(false)
  setRolls(1)
 }
  return(
    <div className="container">
      <Tenzies 
        dice= {dice}
        resetGame={resetGame}
        roll={rollDice}
        select={selectDie}
        tenzies={tenzies}
        rolls={rolls}
      />
      <Timer tenzies= {tenzies}/>
    </div>
  )
}
export default App;
