import { useState, useEffect } from 'react'
import './App.css'

type LapTime = {
  id: number,
  time: string
}

function App() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [lapTime, setLapTime] = useState<LapTime[]>([]);
  const [onStop, setOnStop] = useState(false);

  useEffect(() => {

    if (onStop) return;

    const interval = setInterval(() =>{
      if (seconds === 59){
        setSeconds(-1);
        setMinutes(prev => prev + 1);
      }
      setSeconds(prev => prev +1);
    },1000);
    
    return () => clearInterval(interval);
  },[seconds, onStop]);

  const setLap = () =>{
    const time = minutes.toString().padStart(2,'0') + ":" + seconds.toString().padStart(2,'0');
    const id = lapTime.length + 1;
    const lapTimeObject = {
      id: id,
      time: time
    }
    setLapTime([...lapTime, lapTimeObject]);
  }

  const stopTimer = () =>{
    setSeconds(0);
    setMinutes(0);
    setOnStop(true);
  }

  return (
    <>
      <div className="card w-96 shadow-sm">
        <div className="flex justify-center items-center p-4">
          <h1>{minutes.toString().padStart(2,'0')}:{seconds.toString().padStart(2,'0')}</h1>
        </div>
        <div className="card-body">
          <div className="flex flex-row justify-between">
            <button className="btn bg-green-500"
              onClick={() => setLap()}>LAP</button>
            <button className="btn bg-red-500"
              onClick={() => stopTimer()}>STOP</button>
          </div>
        </div>
        <div className="gap-2">
          {lapTime.map((lap) => 
            <div className="mt-2 bg-gray-300 rounded-lg flex justify-between p-4">
              <p>{lap.id}</p>
              <p>{lap.time}</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default App
