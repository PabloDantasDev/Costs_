import Style from './Select.module.css'

function Select({  text, name, option, handleOnChange, value }) {
    return (
        <div className={Style.form_control}>
            <label htmlFor={name}>{text}</label>

            <select name={name} id={name} >
            <option>Selecione uma Opção</option>
             </select>
        </div>
    )
}
export default Select