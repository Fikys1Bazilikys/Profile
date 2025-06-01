export default function EducationCard(props) {
    return (
        <div>
            <h1>{props.place}</h1>
            <h2>{props.position}</h2>
            <p>{props.description}</p>
            <data>{props.date}</data>
        </div>

    )
}
