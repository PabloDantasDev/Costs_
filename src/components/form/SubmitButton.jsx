

import Style from './SubmitButton.module.css'

function SubmitButton({text}){

    return(
        <div >
            <button className={Style.buttonStyle}>{text}</button>

        </div>
    )
}


export default SubmitButton