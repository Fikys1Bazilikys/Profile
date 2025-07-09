import { FaAward } from "react-icons/fa6";



export default function Certifications () {
    return (
        <section className="section-box" id="certifications">
            <div className="section-content-box">
                <h1 className="section-header">Certifications</h1>
                <ul className="certificationsList" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    <li className="certification-item">
                        <span><FaAward className="certification-cup" /></span>
                        <p className="description-text">Cherkasy State Technological University - 2017 - 2021</p>
                    </li>

                    <li className="certification-item">
                        <span><FaAward className="certification-cup" /></span>
                        <p className="description-text">Beginner course C# - School of education: "FoxmindEd" 2022</p>
                    </li>
                    <li className="certification-item">
                        <span><FaAward className="certification-cup" /></span>
                        <p className="description-text">Automated Testing in .NET - EPAM CAMPUS 2024</p>
                    </li>
                    <li className="certification-item">
                        <span><FaAward className="certification-cup" /></span>
                        <p className="description-text">English course -  GreenForest  2025 - Present</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}
