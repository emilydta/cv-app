import './App.css';
import React, { useState } from 'react';
import GeneralInformationForm from './components/forms/GeneralInformationForm';
import EducationForm from './components/forms/EducationForm';
import ExperienceForm from './components/forms/ExperienceForm';
import GeneralInfoDisplay from './components/displays/GeneralInfoDisplay';
import EducationDisplay from './components/displays/EducationDisplay';
import ExperienceDisplay from './components/displays/ExperienceDisplay';
import EducationPreview from './components/previews/EducationPreview';
import ExperiencePreview from './components/previews/ExperiencePreview';

function App() {
  const [preview, setPreview] = useState(false);
  
  const previewButton = () => {
    setPreview(!preview);
  }

//General Info Section States
  const [fullName, setFullName] = useState('Bob Bobbson');
  const [email, setEmail] = useState('bobbobbson@email.com');
  const [number, setNumber] = useState('0123 456 789');

//Education Section States
  const [educationList, setEducationList] = useState([{"institution":"Example University","titleOfStudy":"Bachelor of Art","dateOfStudy":"2016-2018","key":"Thu Jul 14 2022 20:17:25 GMT+1000 (Australian Eastern Standard Time)"}]);
  const [institution, setInstitution] = useState('');
  const [titleOfStudy, setTitleOfStudy] = useState('');
  const [dateOfStudy, setDateOfStudy] = useState('');
  const [educationKey, setEducationKey] = useState(new Date().toString());

//Experience Section States
  const [experienceList, setExperienceList] = useState([{"company":"Example Company","position":"Example Position","dateOfWork":"2014 - Current","mainTasks":"Lorem ipsum dolor sit amet. Eum galisum commodi sit quasi optio et exercitationem repellat quo accusantium excepturi eos dolorem tenetur hic officiis quae a nulla voluptas.","key":"1657794069155"}]);
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [dateOfWork, setDateOfWork] = useState('');
  const [mainTasks, setMainTasks] = useState('');
  const [experienceKey, setExperienceKey] = useState(Date.now().toString());

///GENERAL INFO SECTION FUNCTIONS 
const clearGenFields = () => {
  setFullName('');
  setEmail('');
  setNumber('');
}

//EDUCATION SECTION FUNCTIONS
  const clearEduFields = () => {
    setInstitution('');
    setTitleOfStudy('');
    setDateOfStudy('');
    setEducationKey(new Date().toString());
  }

  const deleteEduEntry = (e) => {
    setEducationList(
      educationList.filter((entry) => {return entry.key !== e.target.id})
    )
  }

  const editEduEntry = (e) => {
    educationList.forEach((entry) => {
      if (entry.key === e.target.className) {
        setInstitution(entry.institution)
        setTitleOfStudy(entry.titleOfStudy)
        setDateOfStudy(entry.dateOfStudy)
        setEducationKey(entry.key)
      }
    })
  }

  const educationOnSubmit = (e) => {
    e.preventDefault()

    //Checks whether the new entry is already present within educationList, 
    //and creates a new array which replaces the old entry with the edited entry.
    const newEducationList = educationList.map(entry => {
      if (entry.key === educationKey) {
        return {
          institution: institution,
          titleOfStudy: titleOfStudy,
          dateOfStudy: dateOfStudy,
          key: educationKey,
        };
      } 
      return entry
    })

    const index = educationList.findIndex(entry => entry.key === educationKey)
    if (index > -1) {
      setEducationList(newEducationList)
    } 
    else {
      setEducationList([...newEducationList, 
        {
          institution: institution,
          titleOfStudy: titleOfStudy,
          dateOfStudy: dateOfStudy,
          key: educationKey,
        }
      ])
    }   
    clearEduFields();
  }

//EXPERIENCE SECTION FUNCTIONS
  const clearExpFields = () => {
    setCompany('');
    setPosition('');
    setDateOfWork('');
    setMainTasks('');
    setExperienceKey(Date.now().toString());
  }

  const deleteExpEntry = (e) => {
    setExperienceList(
      experienceList.filter((entry) => {return entry.key !== e.target.id})
    )
  }

  const editExpEntry = (e) => {
    experienceList.forEach((entry) => {
      if (entry.key === e.target.className) {
        setCompany(entry.company)
        setPosition(entry.position)
        setDateOfWork(entry.dateOfWork)
        setMainTasks(entry.mainTasks)
        setExperienceKey(entry.key)
      }
    })
  }

  const experienceOnSubmit = (e) => {
    e.preventDefault()

    //Checks whether the new entry is already present within experienceList, 
    //and creates a new array which replaces the old entry with the edited entry.
    const newExperienceList = experienceList.map(entry => {
      if (entry.key === experienceKey) {
        return {
          company: company,
          position: position,
          dateOfWork: dateOfWork,
          mainTasks: mainTasks,
          key: experienceKey,
        };
      } 
      return entry
    })

    const index = experienceList.findIndex(entry => entry.key === experienceKey)
    if (index > -1) {
      setExperienceList(newExperienceList)
    } 
    else {
      setExperienceList([...newExperienceList, 
        {
          company: company,
          position: position,
          dateOfWork: dateOfWork,
          mainTasks: mainTasks,
          key: experienceKey,
        }
      ])
    } 
    clearExpFields();
  }

  const editMode = <div className='edit-mode-container'>
    <div className='forms-display'>
      <GeneralInformationForm 
        clearGeneralFields={clearGenFields}
        nameValue={fullName}
        emailValue={email}
        numberValue={number}
        nameOnChange={(e) => setFullName(e.target.value)}
        emailOnChange={(e) => setEmail(e.target.value)}
        numberOnChange={(e) => setNumber(e.target.value)}
      />
      <EducationForm 
        submit={educationOnSubmit}
        clearEducationFields={clearEduFields}
        titleOfStudyOnChange={(e) => setTitleOfStudy(e.target.value)} titleOfStudyValue={titleOfStudy}
        institutionOnChange={(e) => setInstitution(e.target.value)} institutionValue={institution}
        dateOfStudyOnChange={(e) => setDateOfStudy(e.target.value)} dateOfStudyValue={dateOfStudy}
      />
      <ExperienceForm 
        submit={experienceOnSubmit}
        clearExperienceFields={clearExpFields} 
        companyOnChange={(e) => setCompany(e.target.value)} companyValue={company}
        positionOnChange={(e) => setPosition(e.target.value)} positionValue={position}
        dateOfWorkOnChange={(e) => setDateOfWork(e.target.value)} dateOfWorkValue={dateOfWork}
        mainTasksOnChange={(e) => setMainTasks(e.target.value)} mainTasksValue={mainTasks}
      />
    </div>
    <div className='edit-entries-display'>
      <h2>Entries</h2>
      <h3 className='display-heading'>General Information</h3>
      <GeneralInfoDisplay 
        fullNameValue={fullName}
        emailValue={email}
        numberValue={number}
      />
      <h3 className='display-heading'>Education</h3>
      <EducationDisplay 
        educationData={educationList}
        deleteEducationEntry={deleteEduEntry}
        editEducationEntry={editEduEntry}
      />
      <h3 className='display-heading'>Experience</h3>
      <ExperienceDisplay
        experienceData={experienceList}
        deleteExperienceEntry={deleteExpEntry}
        editExperienceEntry={editExpEntry}
      />
    </div>
  </div>

  const previewMode = <div className='preview-mode-container'>
    <div className="general-information-preview">
        <h1 className="name-display">{fullName}</h1> 
        <p className="email">{email}</p>
        <p className="phone">{number}</p>  
    </div>
    <h3 className='display-heading'>Education</h3>
    <EducationPreview educationData={educationList}/>
    <h3 className='display-heading'>Experience</h3>
    <ExperiencePreview experienceData={experienceList}/>
  </div>

  return (
    <div className="App" style={preview ? {backgroundColor: 'rgb(202, 202, 202)'} : {backgroundColor: 'white'}}>
        <div className="header">
          <h1 className='app-title'>CV Maker</h1>
          <button type="button" className='preview-button' onClick={previewButton}>{preview ? 'Edit Mode' : 'Preview CV'}</button>
        </div>
        {preview ? previewMode : editMode}
      </div>    
  )
}

export default App;