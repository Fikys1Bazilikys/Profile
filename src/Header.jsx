import ProfilePhoto from './assets/Portfolio-photo.jpg';
import "./Style.css"
export default function Header () {
    return (
        <div className="header">
            <span>
                <img className="profilePhoto" src={ProfilePhoto} alt="profilePhoto"></img>
            </span>
            <ul className="header-nav-list">
                <li><a className="header-nav" href={"#about"}>ABOUT</a></li>
                <li><a className="header-nav" href={"#experience"}>EXPERIENCE</a></li>
                <li><a className="header-nav" href={"#skills"}>SKILLS</a></li>
                <li><a className="header-nav" href={"#interests"}>INTERESTS</a></li>
                <li><a className="header-nav" href={"#certifications"}>CERTIFICATIONS</a></li>
            </ul>
        </div>
    )
}
