import React, { Component } from 'react';

class ExperienceDisplay extends Component {
    render() {
        return (
            <div>
                {this.props.experienceData.map((entry) => {
                    return (
                        <div key={entry.key} className='experience-display'>
                            <h4 className='experience-title'>{entry.companyName}</h4>
                            <ul className='experience-title-date'>
                                <li>{`${entry.positionTitle}:`}</li>
                                <li>{entry.dateOfWork}</li>
                            </ul>
                            <div className='experience-tasks'>{entry.mainTasks}</div>
                            <div className='edit-display-buttons'>
                                <button type="button" id={entry.key} onClick={this.props.deleteExperienceEntry}>Delete</button>
                                <button type="button" className={entry.key} onClick={this.props.editExperienceEntry}>Edit</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default ExperienceDisplay;