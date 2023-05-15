import React from "react";
const Timer = (props)=>{
    const[seconds, setSeconds] = React.useState(1)
    const[minutes, setMinutes] = React.useState(0)
    

    React.useEffect(
        ()=>{
            let interval
            interval=setInterval(()=>{
                setSeconds((prev)=>prev < 60? prev+1:1)
            },1000)
            const stop=()=>{
                setSeconds(1)
                setMinutes(0)
            }
            props.tenzies?clearInterval(interval):stop()
            return ()=>{
                clearInterval(interval)
            }
        },[props.tenzies]
    )
    React.useEffect(
        ()=>{
            seconds === 60 && setMinutes((prev)=>prev + 1)
        },[seconds]
    )
    

     return(
        <div className="timer">
        <h3>Time: {minutes}m : {seconds}s</h3>
        </div>
     )
}
export default Timer