function EducationForm(props) {
    return (
        <form className='education-form' onSubmit={props.submit}>
            <h3>Education</h3>
            <input type="text" value={props.titleOfStudyValue} placeholder='Title of Study' onChange={props.titleOfStudyOnChange}></input>
            <input type="text" value={props.institutionValue} placeholder='Institution Name' onChange={props.institutionOnChange}></input>
            <input type="text" value={props.dateOfStudyValue} placeholder='Date of Study' onChange={props.dateOfStudyOnChange}></input>
            <div className="form-buttons">
                <button type='submit' className="submit-button">Submit</button>
                <button type="button" className="clear-button" onClick={props.clearEducationFields}>Clear</button>
            </div>
        </form>    
    )
}

export default EducationForm

