function EducationPreview(props) {
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
                    </div>
                )
            })}
        </div>
    );
    
}

export default EducationPreview;
