import { useState } from 'react'
import './App.css'
import { v4 as uuidv4 } from 'uuid';
import Tarea from './components/Tarea'

function App() {
  const tareasIniciales = [
    {title: "Limpiar codigo muerto"}, 
    {title: "Completar Readme"}, 
    {title: "actualizar Linkedin"}]

  const [tarea, setTarea] = useState({});
  const [list, setList] = useState(tareasIniciales);


  const handleSubmit = (e)=>{
    e.preventDefault();
    const title = e.target.tarea.value;

    const nuevaTarea = {title}
    const confirmated = confirm(`¿Desea crear la siguiente tarea?:${nuevaTarea}`);

    if (confirmated){
      setTarea(nuevaTarea);
      setList([...list, nuevaTarea]);
      alert("Tarea creada");
    }

    
  };

  const pintarTareas = () => {
    return list.map((tarea, i) =>
      <Tarea
        key={uuidv4()}
        title={tarea.title}
        quitarTarea={()=>quitarTarea(i)}
      />)

  }

  const limpiarTareas = () =>{
    setList ([]);
  }

  const resetTareas = () =>{
    setList (tareasIniciales);
  }


  const quitarTarea= (i) =>{
    const tareasRestantes = list.filter((tareas, j) => i!==j);
    setList(tareasRestantes);
  }





  return (
    <>
      <section>
        <article>
          <form onSubmit={handleSubmit}>
            <label htmlFor="tarea">Introduce nueva Tarea</label>
            <input type="text" name="tarea"/>
            <button type="submit">ADD</button>
          </form>
        </article>
        <article>
          <button onClick={resetTareas}>RESET</button>
          <button onClick={limpiarTareas}>BORRAR TODO</button>
        </article>
      </section>
      <section>
        <ul>
          {pintarTareas()}
        </ul>
      </section>

    </>
  )
}

export default App
