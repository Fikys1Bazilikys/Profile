export default function ExperiencePlace (props) {
    return (
        <div className="experiencePlaceBox">
            <div>
                <h1 className="experiencePosition">{props.position}</h1>
                <h3 className="third-heading">{props.company}</h3>
                <p className="description-text">{props.description}</p>
            </div>
            <data className="date-text">{props.date}</data>
        </div>
    )
}
