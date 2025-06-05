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
        <div className="skillBox">
            <h1 className="skillHeader">Skills</h1>
            <h3 className="skillTools">Programming Languages & Tools</h3>
            <div className="skillElements">{SkillsElements}</div>
            <ul className="skillWorkflow">Workflow
                <li>Mobile-First, Responsive Design</li>
                <li>Cross Browser Testing & Debugging</li>
                <li>Cross Functional Teams</li>
                <li>Agile Development & Scrum</li>
            </ul>
        </div>
    )
}
