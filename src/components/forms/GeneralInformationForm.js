function GeneralInformationForm({ nameOnChange, emailOnChange, numberOnChange }) {
    return (
        <form className='general-information-form'>
          <h3>General Information</h3>
          <input type="text" placeholder='Name' onChange={nameOnChange}></input>
          <input type="text" placeholder='Email' onChange={emailOnChange}></input>
          <input type="text" placeholder='Phone Number' onChange={numberOnChange}></input>
        </form>    
    )
}

export default GeneralInformationForm