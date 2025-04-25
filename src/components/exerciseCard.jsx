import '../styles/App.css'

export default function ExerciseCard({
    image,
    title,
    description
}) {

    return (
        <div className='exercise-card'>   
            <img src={image} alt='' className="exercise-image" />
            <h3 className="exercise-title">{title}</h3>
            <p className="exercise-description">{description}</p>
        </div>
    )
}