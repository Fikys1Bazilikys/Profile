import SkillsIcon from './Component/SkillsIcon.jsx'

export default function Skills () {

    return (
        <section className="section-box" id="skills">
            <div className="section-content-box">
                <h1 className="section-header">Skills</h1>
                <h3 className="third-heading">Programming Languages & Tools</h3>
                <div className="flex-row">
                    <SkillsIcon />
                </div>
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
