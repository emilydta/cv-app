import React, { Component } from 'react';

class EducationDisplay extends Component {
    render() {
        return (
            <div>
                {this.props.educationData.map((entry) => {
                    return (
                        <ul key={entry.key}>
                            <li>{entry.institution}</li>
                            <li>{entry.titleOfStudy}</li>
                            <li>{entry.dateOfStudy}</li>
                            <button type="button" id={entry.key} onClick={this.props.deleteEducationEntry}>Delete</button>
                            <button type="button" className={entry.key} onClick={this.props.editEducationEntry}>Edit</button>
                        </ul>
                    )
                })}
            </div>
        );
    }
}

export default EducationDisplay;