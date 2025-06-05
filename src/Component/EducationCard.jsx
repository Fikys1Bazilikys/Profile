export default function EducationCard(props) {
    return (
        <div className="educationCardBox">
            <div>
                <h1 className="educationPlace">{props.place}</h1>
                <h3 className="educationPosition">{props.position}</h3>
                <p className="educationDescription">{props.description}</p>
            </div>
            <data className="educationData">{props.date}</data>
        </div>

    )
}
