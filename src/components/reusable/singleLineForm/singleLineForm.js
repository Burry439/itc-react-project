import React, {useState} from 'react';

const SingleLineForm = ({inputType, submitFunction, placeholder, buttonText}) => {

    const [inputValue, setInputValue] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
        submitFunction(inputValue)
        setInputValue("")
    }

    const handleInputChange = (e) => {    
        setInputValue(e.target.value)
    }

    return ( 
        <form className="input-group mb-1" onSubmit={(e) => handleSubmit(e)}>
            {
            inputType == "textarea" 
            ?
            <textarea value={inputValue} onChange={(e) => handleInputChange(e)} type="text" className="form-control textArea" placeholder={placeholder}/>
            :
            <input value={inputValue} onChange={(e) => handleInputChange(e)} type="text" className="form-control" placeholder={placeholder}/>
            }
        <div className="input-group-append">
            <button type="submit" className="btn btn-outline-secondary" disabled={inputValue.length >= 140 || inputValue.length == 0}>{buttonText}</button>
        </div>
   </form>
     );
}
 
export default SingleLineForm;