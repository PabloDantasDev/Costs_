import ProjectForm from '../Project/ProjectForm'
import Style  from './NewProject.module.css'

function NewProject(){
    return (
        <div className={Style.newproject_project}>
            <h1>CRIAR PROJETO</h1>
            <p>Crie Seu Projeto Para Depois Adicionar Os Serviços</p>
            <ProjectForm btnTxt='Criair Projeto'/>
        </div>
    )
}
export default NewProject