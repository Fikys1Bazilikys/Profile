import profilePhoto from './assets/LEGO.png';
import "./Style.css"
export default function Header () {
    return (
        <header className="header">
            <span>
                <img className="profilePhoto" src={profilePhoto} alt="profilePhoto"></img>
            </span>
            <ul className="header-nav-list">
                <li className="header-nav">ABOUT</li>
                <li className="header-nav">EXPERIENCE</li>
                <li className="header-nav">EDUCATION</li>
                <li className="header-nav">SKILLS</li>
            </ul>

        </header>
    )
}

