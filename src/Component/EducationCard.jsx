export default function EducationCard(props) {
    return (
        <div className="educationCardBox">
            <div>
                <h1 className="educationPlace">{props.place}</h1>
                <h3 className="educationPosition">{props.position}</h3>
                <p className="description-text">{props.description}</p>
            </div>
            <data className="date-text">{props.date}</data>
        </div>

    )
}
