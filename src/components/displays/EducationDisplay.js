import React, { Component } from 'react';

class EducationDisplay extends Component {
    render() {
        return (
            <div>
                {this.props.educationData.map((entry) => {
                    return (
                        <div key={entry.key} className='education-display'>
                            <h4 className='education-title'>{entry.institution}</h4>
                            <ul className='education-title-date'>
                                <li>{`${entry.titleOfStudy}:`}</li>
                                <li>{entry.dateOfStudy}</li>
                            </ul>
                            <div className='edit-display-buttons'>
                                <button type="button" id={entry.key} onClick={this.props.deleteEducationEntry}>Delete</button>
                                <button type="button" className={entry.key} onClick={this.props.editEducationEntry}>Edit</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default EducationDisplay;