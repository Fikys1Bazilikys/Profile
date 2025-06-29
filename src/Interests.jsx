import interestData from './Data/InterestData.js'

export default function Interests(){
    return (
        <section className="section-box" id="interests">
            <div className="section-content-box">
                <h1 className="section-header">Interests</h1>
                <p className="description-text" style={{ display: 'flex',flexDirection: 'column', gap: 16 }}>
                    {interestData.map(({id,text}) => (
                        <p key={id}>
                            {text}
                        </p>
                    ))}
                </p>
            </div>
        </section>
    )
}
