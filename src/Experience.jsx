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
        <div>
            <h1>Experience</h1>
            {ExperienceElements}
        </div>
    )
}
