import { useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import Tarea from './components/Tarea'

function App() {
  const tareasIniciales = [
    {title: "Limpiar codigo muerto"}, 
    {title: "Completar Readme"}, 
    {title: "Actualizar Linkedin"}]

  const [tarea, setTarea] = useState({});
  const [list, setList] = useState(tareasIniciales);
  const [mostrarBoton, setMostrarBoton] = useState(false);
  const [mostrarPopUp, setMostrarPopUp] = useState(false)


  const botonAparece = () => {
    setMostrarBoton(true)
  };

  const botonEsconde =() => {
    setMostrarBoton(false)
  }


    



  const handleReset = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
  };


  const handleSubmit = (e)=>{
    e.preventDefault();
    const title = e.target.tarea.value;
    const nuevaTarea = {title};
    if (title.length < 6) {
      alert("La tarea debe contener 6 o mas caracteres.")
    } else {
      const confirmated = confirm(`¿Desea crear la siguiente tarea?:${nuevaTarea.title}`);

      if (confirmated){
        setTarea(nuevaTarea);
        setList([nuevaTarea, ...list]);
        handleReset();
        botonEsconde();
        setMostrarPopUp(true);
        setInterval(() => {setMostrarPopUp(false)}, 2000);
      }

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
      <h1>TO DO LIST</h1>
      {mostrarPopUp && <section id="popup-content-box"><h2>OK! TAREA AÑADIDA</h2></section>}
      <section id='controlContainer'>
        <article id="formContainer">
          <form onSubmit={handleSubmit} id="formTarea">
            <label htmlFor="tarea">Introduce nueva Tarea</label>
            <input type="text" name="tarea" id="tarea" onChange={botonAparece}/>
            {mostrarBoton && <button type="submit" id="sumarTarea">ADD</button>}
          </form>
        </article>
        <article id="buttonContainer">
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
