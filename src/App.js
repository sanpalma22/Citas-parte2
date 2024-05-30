import './App.css';
import Subtitulo from './components/Subtitulo/Subtitulo';
import Titulo from './components/Titulo/Titulo';
import Formulario from './components/Formulario/Formulario';
import Cita from './components/Cita/Cita';
import { useState } from 'react';
function App() {
  const [citas, setCitas] = useState([]);


  return (
    <>
    <Titulo />
    <div className='container'>
        <div className='column'>
          <Subtitulo texto={'CREAR MI CITA'}></Subtitulo>
          <Formulario citas={citas} setCitas={setCitas}></Formulario>
        </div>
        <div className='column'>
          <Subtitulo texto={'ADMINISTRA TUS CITAS'}></Subtitulo>
          {
            citas.map(t => <Cita citas={citas} setCitas={setCitas} id={t.id} mascota={t.nombre} dueño={t.nombreDueño} fecha={t.fecha} hora={t.hora} sintomas={t.sintomas}/>)
          }        
      </div>
    </div>
    </>
  );
}
export default App;
