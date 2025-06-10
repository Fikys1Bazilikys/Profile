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
        <div className="section-box" id="experience">
            <h1 className="section-header">Experience</h1>
            {ExperienceElements}
        </div>
    )
}
