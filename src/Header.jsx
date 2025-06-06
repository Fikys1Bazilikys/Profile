import profilePhoto from './assets/LEGO.png';
import "./Style.css"
export default function Header () {
    return (
        <header className="header">
            <span>
                <img className="profilePhoto" src={profilePhoto} alt="profilePhoto"></img>
            </span>
            <ul className="header-nav-list">
                <a className="header-nav" href={"#about"}>ABOUT</a>
                <a className="header-nav" href={"#experience"}>EXPERIENCE</a>
                <a className="header-nav" href={"#education"}>EDUCATION</a>
                <a className="header-nav" href={"#skills"}>SKILLS</a>
                <a className="header-nav" href={"#interests"}>INTERESTS</a>
                <a className="header-nav" href={"#certifications"}>CERTIFICATIONS</a>
            </ul>

        </header>
    )
}

