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
    this.updateDateOfStudy = this.updateDateOfStudy.bind(this);
    this.educationOnSubmit = this.educationOnSubmit.bind(this);
    this.clearEduFields = this.clearEduFields.bind(this);
    this.deleteEduEntry = this.deleteEduEntry.bind(this);
    this.editEduEntry = this.editEduEntry.bind(this);
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
      const editedEducationArray = prevState.educationArray.map((entry) => {
        if (entry.key === this.state.education.key) {
          return entry = this.state.education
        }
        return entry
      })
      return {
        education: {
          institution: '',
          titleOfStudy: '',
          dateOfStudy: '',
          key: new Date().toString()
        },
        educationArray: [...new Set([...editedEducationArray, this.state.education])]
      }
    })
  }

  clearEduFields() {
    this.setState({
      education: {
        institution: '',
        titleOfStudy: '',
        dateOfStudy: '',
        key: new Date().toString()
      },
    })
  }

  deleteEduEntry(e) {
    this.setState({
      educationArray: this.state.educationArray.filter((entry) => {return entry.key !== e.target.id})
    })
  }

  editEduEntry(e) {
    this.state.educationArray.map((entry) => {
      if (entry.key === e.target.className) {
        return (
          this.setState({
            education: {
              institution: entry.institution,
              titleOfStudy: entry.titleOfStudy,
              dateOfStudy: entry.dateOfStudy,
              key: entry.key
            }
          })
        )
      }
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
            clearEducationFields={this.clearEduFields}
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
            editEducationEntry={this.editEduEntry}
          />
        </div>
      </div>
    );
  }
}

export default App;