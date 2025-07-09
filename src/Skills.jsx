import SkillsIcon from './Component/SkillsIcon.jsx'

export default function Skills () {

    return (
        <section className="section-box" id="skills">
            <div className="section-content-box">
                <h1 className="section-header">Skills</h1>
                <h3 className="third-heading mr1">Programming Languages & Tools</h3>
                <div className="mr1 flex-row">
                    <SkillsIcon />
                </div>
                <div className="skillWorkflow third-heading mr1">Workflow:</div>
                <ul style={{padding: 0}} >
                    <li className="description-text mr2">📱 Mobile-First & Responsive Development — planning for adaptability from the start</li>
                    <li className="description-text mr2">🧼 Clean, maintainable code with clear structure in both CSS and JS</li>
                    <li className="description-text mr2">🔍 Manual testing across various screen sizes and browsers</li>
                    <li className="description-text mr2">♻️ Willing to refactor when needed to improve quality and performance</li>
                    <li className="description-text mr2">📝 Documenting key decisions and logic for better team understanding</li>
                </ul>
            </div>
        </section>
    )
}
