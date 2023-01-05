import twitterLogo from "../icons/Twitter-icon.png"
import facebookLogo from "../icons/Facebook-icon.png"
import instagramLogo from "../icons/Instagram-icon.png"
import githubLogo from "../icons/GitHub-icon.png"

function Footer() {
    return(
        <div className="footer">
            <img src={twitterLogo} className = "icon"/>
            <img src={facebookLogo} className = "icon"/>
            <img src={instagramLogo} className = "icon"/>
            <img src={githubLogo} className = "icon" />
        </div>
    )
}

export default Footer