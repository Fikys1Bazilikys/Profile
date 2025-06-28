import socialData from "../Data/SocialData.js";

export default function SocialIcon () {
    return (
        <div style={{ display: 'flex', gap: 26 }}>
            {socialData.map(({ id, icon: Icon, link, alt }) => (
                <a href={link} key={id} target="_blank" rel="noopener noreferrer" title={alt}>
                    <Icon size={60} color="#495057" />
                </a>
            ))}
        </div>
    )
}
