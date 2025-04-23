import '../App.css'

function ProgramCard({ cardImage, cardTitle, cardText }) {
    return (
        <div className="programCard">
            <img src={cardImage} alt="programImage" className="programCardImage"/>
            <h2 className="programCardTitle">{cardTitle}</h2>
            <p className="programCardText">{cardText}</p>
        </div>
    )
};

export default ProgramCard;