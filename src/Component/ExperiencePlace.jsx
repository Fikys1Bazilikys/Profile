export default function ExperiencePlace (props) {
    return (
        <div className="experiencePlaceBox">
            <div>
                <h1 className="experiencePosition">{props.position}</h1>
                <h3 className="experienceCompany">{props.company}</h3>
                <p className="experienceDescription">{props.description}</p>
            </div>
            <data className="experienceDate">{props.date}</data>
        </div>
    )
}
