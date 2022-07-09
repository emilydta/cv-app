import React, { Component } from 'react';

class EducationDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
            {this.props.educationData.map((entry) => {
                return (
                    <ul key={entry.key}>
                        <li>{entry.institution}</li>
                        <li>{entry.titleOfStudy}</li>
                        <li>{entry.dateOfStudy}</li>
                    </ul>
                )
            })}
        </div>
    );
  }
}

export default EducationDisplay;