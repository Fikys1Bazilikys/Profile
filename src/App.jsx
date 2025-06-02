import Header from './Header'
import About from './About.jsx'
import "./Style.css"
import Experience from "./Experience.jsx";
import Education from "./Education.jsx";
import Skills from "./Skills.jsx";
import Interests from "./Interests.jsx";
import Certifications from "./Certifications.jsx";


export default function App() {
    return (
        <div className="app">
            <header>
                <Header />
            </header>
            <main className="main">
                <About />
                <Experience />
                <Education />
                <Skills />
                <Interests />
                <Certifications />
            </main>
        </div>

    );
}
