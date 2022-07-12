function ExperienceForm(props) {
    return (
        <form className='experience-form' onSubmit={props.submit}>
            <h3>Experience</h3>
            <input type="text" value={props.companyValue} placeholder='Company Name' onChange={props.companyOnChange}></input>
            <input type="text" value={props.positionValue} placeholder='Position Title' onChange={props.positionOnChange}></input>
            <input type="text" value={props.dateOfWorkValue} placeholder='Date of Employment' onChange={props.dateOfWorkOnChange}></input>
            <textarea value={props.mainTasksValue} placeholder='List main tasks here' onChange={props.mainTasksOnChange}></textarea>
            <button type='submit'>Submit</button>
            <button type="button" onClick={props.clearExperienceFields}>Clear</button>
        </form>    
    )
}

export default ExperienceForm