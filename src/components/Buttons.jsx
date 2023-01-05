import emailIcon from "../icons/Icon.png"
import linkedinIcon from "../icons/linkedin.png"

function Buttons() {
    return(
        <div className = "button-container">
            <button className = "button-email">
                <img src={emailIcon} className = "email-icon"/>
                <span className ="email-txt">Email</span>
            </button>
            <button className = "button-linkedin">
                <img src={linkedinIcon} className = "linkedin-icon"/>
                <span className = "linkedin-txt">LinkedIn</span>
            </button>
        </div>
    )
}

export default Buttons

