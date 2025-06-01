import SkillsIcon from "./Component/SkillsIcon.jsx";
import skillsIconData from "./Data/SkillsIconData.js";

export default function Skills () {

    const SkillsElements = skillsIconData.map ((element) => {
        return (
            <SkillsIcon
                key={element.id}
                {...element}
            />
        )
    })

    return (
        <div>
            <h1>Skills</h1>
            <h2>Programming Languages & Tools</h2>
            {SkillsElements}
            <ul>Workflow
                <li>Mobile-First, Responsive Design</li>
                <li>Cross Browser Testing & Debugging</li>
                <li>Cross Functional Teams</li>
                <li>Agile Development & Scrum</li>
            </ul>
        </div>
    )
}
