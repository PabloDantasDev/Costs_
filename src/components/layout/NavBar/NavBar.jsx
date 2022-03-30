
import { Link } from "react-router-dom"

import Container from '../Container';

import style from '../NavBar/NavBar.module.css'

import logo from '../../../img/costs_logo.png'

function NavBar() {
    return (

        <nav className={style.navbar} >
            <Container>
                
                <Link  to='/'><img className={style.logo} src={logo} alt="Costs Logo" /></Link>
               
                <ul className={style.list}>
                    <li>
                        <Link className={style.links} to='/'>HOME</Link>
                    </li>
                    <li>
                        <Link className={style.links} to='/novoprojeto'>CRIAR PROJETO</Link>
                    </li>
                    <li>
                        <Link className={style.links} to='/projetos'>PROJETOS</Link>
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
export default NavBar