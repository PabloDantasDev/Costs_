import Input from "../../form/Input"
import Select from "../../form/Select"
import SubmitButton from "../../form/SubmitButton"
import  Style  from "./ProjectForm.module.css"

function ProjectForm({btnTxt}) {
    return (
        <div>

            <form className={Style.form} >
              <Input type='text' text='Nome Do Projeto' name='name' placeholder='Insira o Nome do Projeto' ></Input>

              <Input type='number' text='Orçamento' name='Budget' placeholder='Insira o Orçamento Total R$' ></Input>

                <Select  name='category_id' text='Selecione a Categoria' ></Select>
                
                <SubmitButton text={btnTxt}></SubmitButton>
            </form>

        </div>

    )
}
export default ProjectForm