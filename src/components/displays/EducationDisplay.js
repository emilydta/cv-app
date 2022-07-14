function EducationDisplay(props) {
    return (
        <div>
            {props.educationData.map((entry) => {
                return (
                    <div key={entry.key} className='education-display'>
                        <h4 className='education-title'>{entry.titleOfStudy}</h4>
                        <ul className='education-title-date'>
                            <li>{`${entry.institution}:`}</li>
                            <li>{entry.dateOfStudy}</li>
                        </ul>
                        <div className='edit-display-buttons'>
                            <button type="button" id={entry.key} onClick={props.deleteEducationEntry}>Delete</button>
                            <button type="button" className={entry.key} onClick={props.editEducationEntry}>Edit</button>
                        </div>
                    </div>
                )
            })}
        </div>
    );
    
}

export default EducationDisplay;