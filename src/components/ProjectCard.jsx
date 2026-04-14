export default function ProjectCard({ image, title, description, href }) {
    return (
        <a className="project-card" href={href} target="_blank" rel="noreferrer">
            <img className="project-card__image" src={image} alt={title} />
            <div className="project-card__content">
                <h2 className="project-card__title">{title}</h2>
                <p className="project-card__description">{description}</p>
            </div>
        </a>
    );
}