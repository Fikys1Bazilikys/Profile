import experienceElements from '../Data/ExperienceData.js'

export default function ExperiencePlace () {



    return (
        <div className="experiencePlaceBox">
            {experienceElements.map(({ id, position,company,description,date}) => (
                <div key={id}>
                    <div>
                        <h1 className="experiencePosition">{position}</h1>
                        <h3 className="third-heading">{company}</h3>
                        <p className="description-text">{description}</p>
                    </div>
                    <data className="date-text">{date}</data>
                </div>
            ))}
        </div>
    )
}
