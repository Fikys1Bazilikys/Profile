import "./Style.css"
import socialData from "./Data/SocialData.js";
import SocialIcon from "./Component/SocialIcon.jsx";

export default function About() {


    const SocialElements = socialData.map ((element) => {
            return (
                <SocialIcon
                    key={element.id}
                    {...element}
                />
            )
       })
    return (
        <div className="about-box">
            <h1>CHoLovi4E</h1>
            <p>542 Berry Street · Cheyenne Wells, CO 80810 · (317) 585-8468 · name@email.com</p>
            <p>I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
            {SocialElements}
        </div>
    )
};
