import { useState } from 'react'

type VideojuegoProps = {
  personaje: string,
  ejeXValor: number,
  ejeYValor: number,
}

export default function Videojuego({personaje, ejeXValor, ejeYValor}: VideojuegoProps) {  
  
  const [ejeX, setEjeX] = useState(ejeXValor);
  const [ejeY, setEjeY] = useState(ejeYValor);

  const stylePersonaje = {
    position: "absolute",
    top: ejeY + "px", 
    left: ejeX + "px"
  }

  const styleBotones = {
    border: "1px solid #C0C0C0",
    borderRadius: "10px",
    margin: "10px",
    padding: "5px",
    background: "green"
  }

  const retroceder = () => {
    setEjeX(ejeX-10);
  }

  const saltar = async () => {
    for(let subir = 0; subir<10; subir++){
      setEjeY((y) => y - 5);
      await new Promise((resolve) => setTimeout(resolve, 50));
    }

    for(let bajar = 0; bajar<10; bajar++){
      setEjeY((y) => y + 5);
      await new Promise((resolve) => setTimeout(resolve, 50));
    }
  }
  
  return (
    <>
      <div>
        <img src="/public/escenario.png" alt="fondo de videojuego" width="1300"/>
        <img style={{...stylePersonaje}} src={"/public/" + personaje} alt="personaje de videojuego" height="80"/>
      </div>
      <div style={{display:"flex", flexDirection:"row"}}>
          <div style={styleBotones}
            onClick={retroceder}
          >
            RETROCEDER
          </div>
          <div style={styleBotones}
            onClick={saltar}
          >
            SALTAR
          </div>
          <div style={styleBotones}
            onClick={() => setEjeX((ejeX) => ejeX + 10)}
          >
            AVANZAR
          </div>
      </div>
    </>
  )
}

