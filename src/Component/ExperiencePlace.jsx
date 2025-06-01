export default function ExperiencePlace (props) {
    return (
        <div>
            <div>
                <h1>{props.position}</h1>
                <h2>{props.company}</h2>
                <p>{props.description}</p>
            </div>
            <data>{props.date}</data>
        </div>
    )
}
