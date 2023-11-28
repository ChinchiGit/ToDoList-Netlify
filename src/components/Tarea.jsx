import React from 'react'

function Tarea({title, quitarTarea}) {
  return (
    <li>
        <h4>{title} </h4>
        <button onClick={quitarTarea}>BORRAR</button>
    </li>
  )
}

export default Tarea