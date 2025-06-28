import Header from './Header'
import About from './About.jsx'
import "./Style.css"
import Experience from "./Experience.jsx";
import Education from "./Education.jsx";
import Skills from "./Skills.jsx";
import Interests from "./Interests.jsx";
import Certifications from "./Certifications.jsx";


export default function App() {

    const sections = [
        About,
        Experience,
        Education,
        Skills,
        Interests,
        Certifications,
    ];

    return (
        <div className="app">
            <Header />
            <main className="main">
                {sections.map((Section, idx) => <Section key={idx} />)}
            </main>
        </div>

    );
}
