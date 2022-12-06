export const BookItem = (props) => {
    return (
      <div
        className={`book ${
          props.index % 2 === 0 ? "grey-background" : "light-grey-background"
        }`}
      >
        <img className="book-image" alt={`${props.title}`} src={props.imgSrc} />
        <div>
          <p className="book-name">{props.title}</p>
          <p className="genre-name"> {props.movie}</p>
          <p className="author-name">
            {" "}
            by <span class="author-text">{props.author}</span>
          </p>
          <p className="book-link-container">
            <a target="blank" className="book-link" href={props.link}>
              Read Now 📖
            </a>
          </p>
        </div>
      </div>
    );
  };
  