import './App.css';
import React from 'react';
import GeneralInformationForm from './components/forms/GeneralInformationForm';
import EducationForm from './components/forms/EducationForm';
import EducationDisplay from './components/displays/EducationDisplay';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fullName: '',
      email: '',
      number: '',
      education: {
        institution: '',
        titleOfStudy: '',
        dateOfStudy: '',
        key: new Date().toString()
      },
      educationArray: []
    }
    this.updateInstitution = this.updateInstitution.bind(this);
    this.updateTitleOfStudy = this.updateTitleOfStudy.bind(this);
    this.updateTitleOfStudy = this.updateTitleOfStudy.bind(this);
    this.updateDateOfStudy = this.updateDateOfStudy.bind(this);
    this.educationOnSubmit = this.educationOnSubmit.bind(this);
    this.deleteEduEntry = this.deleteEduEntry.bind(this);
  }

  updateInstitution(e) {
    this.setState({
      education: {
        ...this.state.education,
        institution: e.target.value,
      }
    })
  }

  updateTitleOfStudy(e) {
    this.setState({
      education: {
        ...this.state.education,
        titleOfStudy: e.target.value,
      }
    })
  }

  updateDateOfStudy(e) {
    this.setState({
      education: {
        ...this.state.education,
        dateOfStudy: e.target.value,
      }
    })
  }

  educationOnSubmit(e) {
    e.preventDefault()
    this.setState((prevState) => {
      return {
        education: {
          institution: '',
          titleOfStudy: '',
          dateOfStudy: '',
          key: new Date().toString()
        },
        educationArray: [...prevState.educationArray, this.state.education]
      }
    })
  }

  deleteEduEntry(e) {
    this.setState({
      educationArray: this.state.educationArray.filter((entry) => {return entry.key !== e.target.id})
    })
  }

  render() {
    const { fullName, email, number, education, educationArray } = this.state;

    return (
      <div className="App">
        <div className='edit-mode-container'>
          <h1 className='app-title'>CV Maker</h1>
          <GeneralInformationForm 
            nameOnChange={(e) => this.setState({fullName: e.target.value})}
            emailOnChange={(e) => this.setState({email: e.target.value})}
            numberOnChange={(e) => this.setState({number: e.target.value})}
          />
          <EducationForm 
            submit={this.educationOnSubmit}
            institutionOnChange={this.updateInstitution} institutionValue={education.institution}
            titleOfStudyOnChange={this.updateTitleOfStudy} titleOfStudyValue={education.titleOfStudy}
            dateOfStudyOnChange={this.updateDateOfStudy} dateOfStudyValue={education.dateOfStudy}
          />  
        </div>
        <div className='preview-mode-container'>
          <div className="general-information-display">
              <h1 className="name-display">{fullName}</h1> 
              <ul className="email-phone">
                  <li className="email">{email}</li>
                  <li className="phone">{number}</li>
              </ul>   
          </div>
          <EducationDisplay 
            educationData={educationArray}
            deleteEducationEntry={this.deleteEduEntry}
          />
        </div>
      </div>
    );
  }
}

export default App;