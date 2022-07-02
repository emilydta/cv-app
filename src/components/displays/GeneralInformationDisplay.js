function GeneralInformationDisplay({ fullName, email, phone }) {
    return (
        <div className="general-information-display">
            <h1 className="name-display">{fullName}</h1> 
            <ul className="email-phone">
                <li className="email">{email}</li>
                <li className="phone">{phone}</li>
            </ul>   
        </div>
    )
}

export default GeneralInformationDisplay