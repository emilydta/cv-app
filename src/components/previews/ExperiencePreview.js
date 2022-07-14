import React, { Component } from 'react';

class ExperiencePreview extends Component {
    render() {
        return (
            <div>
                {this.props.experienceData.map((entry) => {
                    return (
                        <div key={entry.key} className='experience-display'>
                            <h4 className='experience-title'>{entry.position}</h4>
                            <ul className='experience-title-date'>
                                <li>{`${entry.company}:`}</li>
                                <li>{entry.dateOfWork}</li>
                            </ul>
                            <div className='experience-tasks'>{entry.mainTasks}</div>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default ExperiencePreview;