import React, {useState} from 'react';

const SingleLineForm = ({inputType, submitFunction, placeholder, buttonText}) => {

    //create a new state to hold our input value
    const [inputValue, setInputValue] = useState("")

    //handle form submit
    const handleSubmit = (e) =>{

        //prevent the form from refreshing the page
        e.preventDefault()

        //run the submit function prop
        submitFunction(inputValue)

        //reset the input
        setInputValue("")
    }


    const handleInputChange = (e) => {    
        //set the input state value after typing in the input element
        setInputValue(e.target.value)
    }

    return ( 
        <form className="input-group mb-1" onSubmit={(e) => handleSubmit(e)}>
            {
            //is this a text area form
            inputType == "textarea" 
            ?
            //return a textarea element
            <textarea value={inputValue} onChange={(e) => handleInputChange(e)} type="text" className="form-control textArea" placeholder={placeholder}/>
            :
            //return a input element
            <input value={inputValue} onChange={(e) => handleInputChange(e)} type="text" className="form-control" placeholder={placeholder}/>
            }
        <div className="input-group-append">
            {/* if the input/textarea is empty or equal to or greater then 140 characters disable the form and button */}
            <button type="submit" className="btn btn-outline-secondary" disabled={inputValue.length >= 140 || inputValue.length == 0}>{buttonText}</button>
        </div>
   </form>
     );
}
 
export default SingleLineForm;