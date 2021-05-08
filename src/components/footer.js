import { NavLink } from 'react-router-dom';
import '../css/footer.css'
import logo from '../assets/LogoPngBlanco.png'
function Footer() {


    return (
        <nav className='footer'>
            <div className='politics-div'>
            <NavLink to='/aviso-legal' className='link-nav '>aviso legal</NavLink>
            <NavLink to='/politica-privacidad' className='link-nav'>politica de privacidad</NavLink>
            </div>
            <div className='div-link'>
            <NavLink to='/quienes-somos' className='link-nav'>QUIENES SOMOS</NavLink>
            <NavLink to='/academico' className='link-nav'>ACADEMICO</NavLink>
            <NavLink to='/inscribite' className='link-nav button'>INSCRIBITE</NavLink>
            </div>
            <div className='div-img'><img src={logo} alt='lily-logo'/></div>
            
        </nav>
    )
}
export default Footer