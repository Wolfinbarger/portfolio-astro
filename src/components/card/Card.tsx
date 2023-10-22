import "./card.scss";

export default function Card(work) {
  let tags = [];

  work.value.tags.forEach((tag) => {
    tags.push(<i className={tag}></i>);
  });
  return (
    <div className="card">
      <h3>{work.value.title}</h3>
      <img src={`src/assets/images/${work.value.image}`} alt="image" />
      <div className="card__content">
        <p>{work.value.description}</p>
        <div className="tags">{tags}</div>
        <div className="links">
          <a href={work.value.url} className="link">
            <i className="bx bx-link-external"></i>
            Demo
          </a>{" "}
          <br />
          <a href="{work.value.source}" className="link">
            <i className="devicon-github-original"></i>
            Source
          </a>
        </div>
      </div>
    </div>
  );
}
