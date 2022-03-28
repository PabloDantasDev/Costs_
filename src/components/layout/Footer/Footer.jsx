
import { Link } from "react-router-dom"

import Container from '../Container';

import style from '../Footer/Footer.module.css'

import logo from '../../../img/costs_logo.png'
import {FaFacebook,FaLinkedin,FaInstagram} from'react-icons/fa'

function Footer() {
    return (

        <nav className={style.footer} >
            <Container>
                
                <Link  to='/'><img className={style.logo} src={logo} alt="Costs Logo" /></Link>
                
                <div className={style.midias}>
                <p >Nossas Redes Sociais</p>
                <div className={style.logoMidias}> 
                <FaFacebook></FaFacebook>
                <FaLinkedin></FaLinkedin>
                 <FaInstagram></FaInstagram>
                 </div>
                </div>
              

                <ul className={style.list}>
                    <p>Links Rapidos</p>
                    <li>
                        <Link className={style.links} to='/'>HOME</Link>
                    </li>
                    <li>
                        <Link className={style.links} to='/project'>PROJETOS</Link>
                    </li>

                    <li>
                        <Link className={style.links} to='/contato'>CONTATO</Link>
                    </li>

                    <li>
                        <Link className={style.links} to='/sobre'>SOBRE</Link>
                    </li>
                </ul>
               




            </Container>
        </nav>

    )
}
export default Footer