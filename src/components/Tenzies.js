import React from "react"
import Confetti from "react-confetti"
const Tenzies = (props)=>{

   
    return(
        <div className="tenzies">
            <h1>Tenzies</h1>
            <p>Roll untill all dice are the same. Click each die to freeze its 
            current value between rolls.</p>
            <div className="dice">
           {props.dice.map((die)=>{
           return <div className="die" key={die.id} id={die.id}
           style={die.isHeld?{backgroundColor:"#5035ff", color:"#fff"}:{backgroundColor:"#fff", color:'#5035ff'}}
           onClick={()=>props.select(die.id)}>
                <h1>{die.value}</h1>
            </div>
           })}
           </div>
           <button onClick={props.tenzies?props.resetGame:props.roll}>{props.tenzies?'New Game':'Roll'}</button>
           <h3 className="rolls">Rolls: {props.rolls}</h3>
           {props.tenzies && 
           <div className="game-won">
            <h1>You Win!🎉</h1>
            <Confetti/>
           </div>}
        </div>
    )
}
export default Tenzies