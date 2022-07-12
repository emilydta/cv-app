function GeneralInformationForm({ nameValue, emailValue, numberValue, nameOnChange, emailOnChange, numberOnChange }) {
    return (
        <form className='general-information-form'>
          <h3>General Information</h3>
          <input type="text" value={nameValue} placeholder='Name' onChange={nameOnChange}></input>
          <input type="text" value={emailValue} placeholder='Email' onChange={emailOnChange}></input>
          <input type="text" value={numberValue} placeholder='Phone Number' onChange={numberOnChange}></input>
        </form>    
    )
}

export default GeneralInformationForm