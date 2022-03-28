import { Link } from "react-router-dom"

import home from '../../../img/savings.svg'

import style from './Home.module.css'

function Home() {
    return (
        <main className={style.home}>

            <Link to='/'><img className={style.logo} src={home} alt="Costs Logo" /></Link>
            <div className={style.titleSub}>
                <h1>COSTS - PLANEJAMENTO E FINANÇAS</h1>
                <h3>Costs foi pensado para todos aqueles que busca um lugar onde possa organizar sua vidafinanceira em poucos cliques!</h3>     
                 <div className={style.btn}>
                 < Link className={style.btnHome} to='/project'> COMECE POR AQUI! </Link>
                 </div>
            </div>


        </main>




    )
}
export default Home