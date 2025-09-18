import { useState } from 'react'
import type { CuadradoProps } from './Cuadrado'
import { Cuadrado } from './Cuadrado'

type VideojuegoProps = {
  ejeXValor: number,
  ejeYValor: number,
}

export default function Videojuego({ ejeXValor, ejeYValor }: VideojuegoProps) {
  const [ejeX, setEjeX] = useState(ejeXValor);
  const [ejeY, setEjeY] = useState(ejeYValor);
  const [personaje, setPersonaje] = useState("personaje1.png");
  const [escenario, setEscenario] = useState("escenario1.png");
  const [cuadrados, setCuadrados] = useState<CuadradoProps[]>([]);
  // states para inputs
  const [x, setX] = useState("500");
  const [y, setY] = useState("500");
  const [tamanioLado, setTamanioLado] = useState("100");
  const [color, setColor] = useState("blue");

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
    setEjeX(ejeX - 10);
  }

  const saltar = async () => {
    for (let subir = 0; subir < 10; subir++) {
      setEjeY((y) => y - 5);
      await new Promise((resolve) => setTimeout(resolve, 50));
    }

    for (let bajar = 0; bajar < 10; bajar++) {
      setEjeY((y) => y + 5);
      await new Promise((resolve) => setTimeout(resolve, 50));
    }
  }

  const agregarCuadrado = () => {
    const nuevoCuadrado: CuadradoProps = {
      x: x,
      y: y,
      color: color,
      tamanioLado: tamanioLado
    }

    setCuadrados([...cuadrados, nuevoCuadrado]);
  }

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ margin: "10px" }} onClick={() => setPersonaje("personaje1.png")}>
          <img src="/public/personaje1.png" height="80" />
        </div>

        <div style={{ margin: "10px" }} onClick={() => setPersonaje("personaje2.png")}>
          <img src="/public/personaje2.png" height="80" />
        </div>

        <div style={{ margin: "10px" }} onClick={() => setPersonaje("personaje3.png")}>
          <img src="/public/personaje3.png" height="80" />
        </div>

        <div style={{ margin: "10px", marginLeft:"50px" }} onClick={() => setEscenario("escenario1.png")}>
          <img src="/public/escenario1.png" height="200" />
        </div>

        <div style={{ margin: "10px" }} onClick={() => setEscenario("escenario2.png")}>
          <img src="/public/escenario2.png" height="200" />
        </div>

        <div style={{background: "#FFFFFF" , border: "1px solid #C0C0C0", borderRadius: "10px", padding: "10px", marginLeft:"50px" }}>
          <input id="X" type="string" value={x} onChange={(e) => setX(e.target.value)}/>
          <input id="Y" type="string" value={y} onChange={(e) => setY(e.target.value)}/>
          <input id="tamanio" type="string" value={tamanioLado} onChange={(e) => setTamanioLado(e.target.value)}/>
          <input id="color" type="color" value={color} onChange={(e) => setColor(e.target.value)}/>
          <button style={{...styleBotones, background: "#008CBA"}} onClick={() => agregarCuadrado()}>AGREGAR CUADRADO</button>
        </div>
      </div>

      {cuadrados.map((cuadrado) => (
        <Cuadrado x={cuadrado.x} y={cuadrado.y} color={cuadrado.color} tamanioLado={cuadrado.tamanioLado} />
      ))}

      <div>
        <img src={"/public/" + escenario} alt="fondo de videojuego" width="1000" />
        <img style={{ ...stylePersonaje }} src={"/public/" + personaje} alt="personaje de videojuego" height="80" />
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={styleBotones} onClick={retroceder}>
          RETROCEDER
        </div>
        <div style={styleBotones} onClick={saltar}>
          SALTAR
        </div>
        <div style={styleBotones} onClick={() => setEjeX((ejeX) => ejeX + 10)}>
          AVANZAR
        </div>
      </div>
    </>
  )
}
