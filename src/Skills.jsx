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
        <section className="section-box" id="skills">
            <div className="section-content-box">
                <h1 className="section-header">Skills</h1>
                <h3 className="third-heading">Programming Languages & Tools</h3>
                <div className="flex-row">{SkillsElements}</div>
                <div className="skillWorkflow third-heading">Workflow</div>
                <ul>
                    <li className="description-text">Mobile-First, Responsive Design</li>
                    <li className="description-text">Cross Browser Testing & Debugging</li>
                    <li className="description-text">Cross Functional Teams</li>
                    <li className="description-text">Agile Development & Scrum</li>
                </ul>
            </div>
        </section>
    )
}
