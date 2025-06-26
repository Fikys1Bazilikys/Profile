import "./Style.css"
import SocialIcon from "./Component/SocialIcon.jsx";

export default function About() {

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

                <p className="about-info">I build responsive, user-friendly web interfaces using React, modern JavaScript, and clean CSS. With a background in software testing, I focus on writing reliable, maintainable code and delivering real value through every component I create.</p>
                <div className="flex-row">
                    <SocialIcon />
                </div>
            </div>
        </section>
    )
};
