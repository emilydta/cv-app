function EducationForm(props) {
    return (
        <form className='education-form' onSubmit={props.submit}>
          <input type="text" value={props.institutionValue} placeholder='Institution Name' onChange={props.institutionOnChange}></input>
          <input type="text" value={props.titleOfStudyValue} placeholder='Title of Study' onChange={props.titleOfStudyOnChange}></input>
          <input type="text" value={props.dateOfStudyValue} placeholder='Date of Study' onChange={props.dateOfStudyOnChange}></input>
          <button type='submit'>Submit</button>
        </form>    
    )
}

export default EducationForm

