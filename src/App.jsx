import Header from './Header'
import About from './About.jsx'
import "./Style.css"
import Experience from "./Experience.jsx";
import Education from "./Education.jsx";


export default function App() {
    return (
        <div className="app">
            <Header />
            <div>
                <About />
                <Experience />
                <Education />
            </div>
        </div>
    );
}
