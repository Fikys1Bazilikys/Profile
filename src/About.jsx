import "./Style.css"
import socialData from "./Data/SocialData.js";
import SocialIcon from "./Component/SocialIcon.jsx";

export default function About() {


    const SocialElements = socialData.map ((element) => {
            return (
                <SocialIcon
                    key={element.id}
                    {...element}
                />
            )
       })
    return (
        <div className="section-box" id="about">
            <h1 className="about-name">
                Ochkolias <span className="text-primary">Oleksandr</span>
            </h1>
            <p className="about-contact">Ukraine · Cherkasy · (063) 77-233-57 · <a href="">fikysik69@gmail.com</a></p>
            <p className="about-info">I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
            <div className="social-icon">
                {SocialElements}
            </div>
        </div>
    )
};
