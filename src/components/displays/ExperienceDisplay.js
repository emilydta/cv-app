import React, { Component } from 'react';

class ExperienceDisplay extends Component {
    render() {
        return (
            <div>
                {this.props.experienceData.map((entry) => {
                    return (
                        <ul key={entry.key}>
                            <li>{entry.companyName}</li>
                            <li>{entry.positionTitle}</li>
                            <li>{entry.dateOfWork}</li>
                            <li>{entry.mainTasks}</li>
                            <button type="button" id={entry.key} onClick={this.props.deleteExperienceEntry}>Delete</button>
                            <button type="button" className={entry.key} onClick={this.props.editExperienceEntry}>Edit</button>
                        </ul>
                    )
                })}
            </div>
        );
    }
}

export default ExperienceDisplay;