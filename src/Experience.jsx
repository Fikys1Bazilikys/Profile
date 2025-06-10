import experienceData from "./Data/ExperienceData.js";
import ExperiencePlace from "./Component/ExperiencePlace.jsx";

export default function Experience () {

    const ExperienceElements = experienceData.map ((element) => {
        return (
            <ExperiencePlace
                key={element.id}
                {...element}
            />
        )
    })

    return (
        <section className="section-box" id="experience">
            <div className="section-content-box"></div>
            <h1 className="section-header">Experience</h1>
            {ExperienceElements}
        </section>
    )
}
