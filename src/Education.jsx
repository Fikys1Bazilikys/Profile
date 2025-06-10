import educationData from "./Data/EducationData.js";
import EducationCard from "./Component/EducationCard.jsx";

export default function Education () {

    const EducationElements = educationData.map ((element) => {
        return (
            <EducationCard
                key={element.id}
                {...element}
            />
        )
    })

    return (
        <div className="section-box" id="education">
            <h1 className="section-header">Education</h1>
            {EducationElements}
        </div>
    )
}
