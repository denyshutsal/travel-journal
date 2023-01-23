import "./Card.scss";
import Date from "../date/Date";

function Card(props) {
  return (
    <article className="card container__card">
      <div className="card__img-container">
        <img
          className="card__img"
          height="175"
          width="263"
          src={`${props.imageUrl}`}
          alt={`${props.title}`}
        />
      </div>
      <div className="card__content-container">
        <header className="card__header">
          <div className="card__location">
            <svg
              className="card__icon"
              xmlns="http://www.w3.org/2000/svg"
              width="7"
              height="10"
              fill="none"
            >
              <path
                fill="#F55A5A"
                fillRule="evenodd"
                d="M3.579 5.25a1.67 1.67 0 1 1-.001-3.34 1.67 1.67 0 0 1 0 3.34ZM3.484 0C1.542 0 0 1.637 0 3.656c0 2.752 2.95 5.596 2.95 5.596.398.376.644.406 1.066 0 0 0 2.984-2.844 2.984-5.596C7 1.636 5.425 0 3.484 0"
                clipRule="evenodd"
              />
            </svg>
            <h2 className="card__city">{props.location}</h2>
          </div>
          <a
            className="card__link"
            href={`${props.googleMapsUrl}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Google Maps
          </a>
        </header>
        <h3 className="card__title">{props.title}</h3>
        <Date {...props} />
        <p className="card__text">{props.description}</p>
      </div>
    </article>
  );
}

export default Card;
