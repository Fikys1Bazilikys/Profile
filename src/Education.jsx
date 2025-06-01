import educationData from "./Data/EducationData.js";
import EducationCard from "./EducationCard.jsx";

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
        <div>
            <h1>Education</h1>
            {EducationElements}
        </div>
    )
}
