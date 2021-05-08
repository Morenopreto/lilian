
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';


function Quienes() {
  let sum = 0;
  let array = []
 let cart = []
 let cartStorage;
  useEffect(() => {
    //  let cartStorage = localStorage.getItem('cart');
    cartStorage = [{ 'modulo': 'Conciencia y sanacion', 'precio': 1500 }, { 'modulo': 'Espiritualidad', 'precio': 1500 }];
    cart = [{ 'modulo': 'Conciencia y sanacion', 'precio': 1500 }, { 'modulo': 'Espiritualidad', 'precio': 1500 }]
    sum = cartStorage.map(x => { sum += x.precio; console.log(x); setTotal(sum) })
    cartStorage.map(x => { array.push(x.modulo + '%20-%20'); setModulos(array) })


  }, [])

  const [modulos, setModulos] = useState([])
  const [total, setTotal] = useState(0)

  return (
    <>

      <section style={{ height: "10vh", width: '90%', backgroundColor: '#f7931d', display: 'flex', flexFlow: 'row wrap', justifyContent: 'space-between', alignContent: 'center', padding: "0 5%" }} >



        {(modulos.length) ?
          <>
            <ul>
              {console.log(cart)}
              {[{ 'modulo': 'Conciencia y sanacion', 'precio': 1500 }, { 'modulo': 'Espiritualidad', 'precio': 1500 }].map(x => <li><span>{x.modulo}</span><span>{x.precio}$</span>  </li>)}
            </ul>
            
            <button className='link-nav button button-nav btn-nav' onClick={() => window.location.href = `https://wa.me/5491165478821?text=Hola!%20Quiero%20inscribirme%20a%20los%20modulos%20${modulos.toString().replace(/\s+/g, '%20').toString().replace(',', '%20')}%20con%20un%20valor%20total%20de%20${total}%20pesos `}>Comprar</button>
           {/* <button className='link-nav button button-nav btn-nav' onClick={() => { console.log(modulos.toString().replace(/\s+/g, '%20').toString().replace(',', '%20')) }}>Comprar</button> */}
          </> : <h1>Carrito Vacio</h1>}
      </section>



    </>
  )
}
export default Quienes