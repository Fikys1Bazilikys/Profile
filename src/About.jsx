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
        <section className="section-box" id="about">
            <div className="section-content-box">
                <h1 className="about-name">
                    Ochkolias <span className="text-primary">Oleksandr</span>
                </h1>
                <p className="about-contact">Ukraine · Cherkasy · (063) 77-233-57 · <a
                    className="text-primary" href="" onClick={() => {
                    navigator.clipboard.writeText("fikysik69@gmail.com");
                }}>fikysik69@gmail.com</a>
                </p>

                <p className="about-info">I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                <div className="flex-row">
                    {SocialElements}
                </div>
            </div>
        </section>
    )
};