export default function SocialIcon (props) {
    return (
        <a href={props.link} target="_blank" rel="noopener noreferrer">
            <img className="socialIcon" src={props.icon} alt={props.alt} />
        </a>
    )
}
