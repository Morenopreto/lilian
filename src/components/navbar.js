import { NavLink } from 'react-router-dom';
import '../css/navbar.css'
// import logo from '../assets/logoPng.png'
import logo from '../assets/LogoPngBlanco.png'

function Navbar() {


    return (
        <nav className='navbar'>
            <div className='div-img'><img src={logo} alt='lily-logo'/></div>
            <div className='div-link'>
            <NavLink to='/' className='link-nav'>QUIENES SOMOS</NavLink>
            <NavLink to='/academico' className='link-nav'>ACADEMICO</NavLink>
            <NavLink to='/inscribite' className='link-nav button button-nav'><button className='btn-nav'>INSCRIBITE</button></NavLink>
            </div>
            
        </nav>
    )
}
export default Navbar