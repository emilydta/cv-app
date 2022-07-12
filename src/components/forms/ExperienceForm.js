function ExperienceForm(props) {
    return (
        <form className='experience-form' onSubmit={props.submit}>
            <h3>Experience</h3>
            <input type="text" value={props.companyValue} placeholder='Company Name' onChange={props.companyOnChange}></input>
            <input type="text" value={props.positionValue} placeholder='Position Title' onChange={props.positionOnChange}></input>
            <input type="text" value={props.dateOfWorkValue} placeholder='Date of Employment' onChange={props.dateOfWorkOnChange}></input>
            <textarea value={props.mainTasksValue} placeholder='Description' onChange={props.mainTasksOnChange}></textarea>
            <div className="form-buttons">
                <button type='submit' className="submit-button">Submit</button>
                <button type="button" className="clear-button" onClick={props.clearExperienceFields}>Clear</button>
            </div>
        </form>    
    )
}

export default ExperienceForm