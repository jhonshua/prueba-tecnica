import './App.css';
import React,{useState} from 'react'

function App() {

  const [cantidad, setCantidad] = useState(0);

const sumar = () => {
  setCantidad((cantidad) => cantidad + 1);
};

const reset = () => {
  setCantidad(0);
};


const onChangeValue = (e) => {
  setCantidad((cantidad) => parseInt(e.target.value));
};





  return (



    <div className="App">
        
              <div className='contenedor1'>
              
              <div className='contenedorcount'>   
              <div className='contenedorcountTest'>Test Text</div>
              <div>{cantidad}</div>
              </div>
              

              <div className='contenedorBloque'></div>  

              

             </div>





     <div className='contenedor2' >

           <div className='contenedor3'>
                <div className='contenedor3input'>
                  <div className='titulo'>Counter Start</div>
                  <div><input className='input'   type="number"
                  onChange={onChangeValue}
                  value={cantidad} /></div>
                </div>
             
           
           </div>

           <div className='contenedor4'> <button className='set' onClick={reset}> set</button></div>

           <div className='contenedor5'> <button className='mas' onClick={sumar}>+</button></div>

     </div>

    </div>

      );
}

export default App;