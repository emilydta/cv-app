function GeneralInfoDisplay(props) {
    return (
        <div className="general-information-display">
            <p className="name-display">{props.fullNameValue}</p> 
            <p className="email">{props.emailValue}</p>
            <p className="phone">{props.numberValue}</p>  
        </div>
    )
}

export default GeneralInfoDisplay;