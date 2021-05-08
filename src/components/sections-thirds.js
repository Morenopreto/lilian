import { NavLink } from 'react-router-dom';
import '../css/section-thirds.css'


function Tercios({ titulo, data }) {


    return (
        <div>

            <h2 className='title'><span className='titleAdd'>+</span> {titulo}</h2>
            <section className='cards-sect'>

                {
                    data.map(data => (
                        <div className='cards'>
                            <span className='span-img'>
                                <img></img>
                            </span>

                            <ul>
                                <li>{data.first}
                                </li>
                                <li>{data.second}
                                </li>
                                <li>{data.third}
                                </li>
                            </ul>
                            <NavLink to='/profesores/oscarMediavilla' className='link-nav button button-thirds'><button>MAS INFORMACION</button></NavLink>
                        </div>
                    ))
                }
              
            </section>

        </div>
    )
}
export default Tercios