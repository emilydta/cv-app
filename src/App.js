import './App.css';
import React from 'react';
import GeneralInformationForm from './components/forms/GeneralInformationForm';
import EducationForm from './components/forms/EducationForm';
import ExperienceForm from './components/forms/ExperienceForm';
import EducationDisplay from './components/displays/EducationDisplay';
import ExperienceDisplay from './components/displays/ExperienceDisplay';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      preview: false,
      fullName: '',
      email: '',
      number: '',
      education: {
        institution: '',
        titleOfStudy: '',
        dateOfStudy: '',
        key: new Date().toString()
      },
      educationArray: [],
      experience: {
        companyName: '',
        positionTitle: '',
        dateOfWork: '',
        mainTasks: '',
        key: Date.now().toString()
      },
      experienceArray: []
    }

    this.previewButton = this.previewButton.bind(this);
    //Education form functions
    this.updateInstitution = this.updateInstitution.bind(this);
    this.updateTitleOfStudy = this.updateTitleOfStudy.bind(this);
    this.updateDateOfStudy = this.updateDateOfStudy.bind(this);
    this.educationOnSubmit = this.educationOnSubmit.bind(this);
    this.clearEduFields = this.clearEduFields.bind(this);
    this.deleteEduEntry = this.deleteEduEntry.bind(this);
    this.editEduEntry = this.editEduEntry.bind(this);

    //Experience form functions
    this.updateCompany = this.updateCompany.bind(this);
    this.updatePositionTitle = this.updatePositionTitle.bind(this);
    this.updateDateOfWork = this.updateDateOfWork.bind(this);
    this.updateMainTasks = this.updateMainTasks.bind(this);
    this.experienceOnSubmit = this.experienceOnSubmit.bind(this);
    this.clearExpFields = this.clearExpFields.bind(this);
    this.deleteExpEntry = this.deleteExpEntry.bind(this);
    this.editExpEntry = this.editExpEntry.bind(this);
  }

  previewButton() {
    this.setState((prevState) => {
      return {
        preview: !prevState.preview
      }
    })
  }

  ///EDUCATION FORM FUNCTIONS
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
      //Checks whether the new entry is already present within the array, and replaces with the new one if it is.
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
            preview: false,
            education: {
              institution: entry.institution,
              titleOfStudy: entry.titleOfStudy,
              dateOfStudy: entry.dateOfStudy,
              key: entry.key
            }
          })
        )
      }
      return null
    })
  }

  //EXPERIENCE FORM FUNCTIONS
  updateCompany(e) {
    this.setState({
      experience: {
        ...this.state.experience,
        companyName: e.target.value,
      }
    })
  }

  updatePositionTitle(e) {
    this.setState({
      experience: {
        ...this.state.experience,
        positionTitle: e.target.value,
      }
    })
  }

  updateDateOfWork(e) {
    this.setState({
      experience: {
        ...this.state.experience,
        dateOfWork: e.target.value,
      }
    })
  }

  updateMainTasks(e) {
    this.setState({
      experience: {
        ...this.state.experience,
        mainTasks: e.target.value,
      }
    })
  }

  clearExpFields() {
    this.setState({
      experience: {
        companyName: '',
        positionTitle: '',
        dateOfWork: '',
        mainTasks: '',
        key: Date.now().toString()
      },
    })
  }

  experienceOnSubmit(e) {
    e.preventDefault()
    this.setState((prevState) => {
      //Checks whether the new entry is already present within the array, and replaces with the new one if it is.
      const editedExperienceArray = prevState.experienceArray.map((entry) => {
        if (entry.key === this.state.experience.key) {
          return entry = this.state.experience
        }
        return entry
      })
      return {
        experience: {
          companyName: '',
          positionTitle: '',
          dateOfWork: '',
          mainTasks: '',
          key: Date.now().toString()
        },
        experienceArray: [...new Set([...editedExperienceArray, this.state.experience])]
      }
    })
  }

  deleteExpEntry(e) {
    this.setState({
      experienceArray: this.state.experienceArray.filter((entry) => {return entry.key !== e.target.id})
    })
  }

  editExpEntry(e) {
    this.state.experienceArray.map((entry) => {
      if (entry.key === e.target.className) {
        return (
          this.setState({
            preview: false,
            experience: {
              companyName: entry.companyName,
              positionTitle: entry.positionTitle,
              dateOfWork: entry.dateOfWork,
              mainTasks: entry.mainTasks,
              key: entry.key
            }
          })
        )
      }
      return null
    })
  }


  render() {
    const { preview, fullName, email, number, education, educationArray, experience, experienceArray} = this.state;
     
    const editMode = <div className='edit-mode-container'>
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
      <ExperienceForm 
        submit={this.experienceOnSubmit}
        clearExperienceFields={this.clearExpFields} 
        companyOnChange={this.updateCompany} companyValue={experience.companyName}
        positionOnChange={this.updatePositionTitle} positionValue={experience.positionTitle}
        dateOfWorkOnChange={this.updateDateOfWork} dateOfWorkValue={experience.dateOfWork}
        mainTasksOnChange={this.updateMainTasks} mainTasksValue={experience.mainTasks}
      />
  </div>

  const previewMode = <div className='preview-mode-container'>
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
    <ExperienceDisplay
    experienceData={experienceArray}
    deleteExperienceEntry={this.deleteExpEntry}
    editExperienceEntry={this.editExpEntry}
    />
</div>

    return (
      <div className="App">
        <h1 className='app-title'>CV Maker</h1>
        <button type="button" onClick={this.previewButton}>{preview ? 'Edit Mode' : 'Preview CV'}</button>
        {preview ? previewMode : editMode}
      </div>
    );
  }
}

export default App;