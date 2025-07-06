import skillsIconData from "../Data/SkillsIconData.js";

export default function SkillsIcon(){
    return (
        <div style={{ display: 'flex', gap: 16 }}>
            {skillsIconData.map(({ id, icon: Icon, alt, color }) => (
                <div key={id} title={alt}>
                    <Icon className="skills-icon" color={color} />
                </div>
            ))}
        </div>
    )
}
