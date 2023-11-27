import React from 'react'

function Tarea({title, quitarTarea}) {
  return (
    <li>
        <h3>{title} </h3>
        <button onClick={quitarTarea}>BORRAR</button>
    </li>
  )
}

export default Tarea