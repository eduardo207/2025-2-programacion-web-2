
export type CuadradoProps = {
  x: string,
  y: string,
  color: string,
  tamanioLado: string
}

export function Cuadrado({x, y, color, tamanioLado}: CuadradoProps) {
  const style= {
    position: "absolute",
    top: x + "px", 
    left: y + "px",
    width: tamanioLado + "px",
    height: tamanioLado + "px",
    background: color
  }

  return (
    <div style={style} />
  )
}
