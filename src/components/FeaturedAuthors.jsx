import React from "react";

class FeaturedAuthors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authors: [
        { name: "Ava Brooks", genres: ["Sci-Fi", "Drama"] },
        { name: "Miles Harper", genres: ["Action", "Thriller"] },
        { name: "Lila Chen", genres: ["Romance", "Comedy"] },
        { name: "Nico Alvarez", genres: ["Mystery", "Crime"] },
        { name: "Priya Shah", genres: ["Animation", "Family"] },
        { name: "Theo Jacobs", genres: ["Fantasy", "Adventure"] },
        { name: "Jade Nguyen", genres: ["Horror", "Thriller"] },
        { name: "Owen Blake", genres: ["Drama", "Historical"] },
        { name: "Sienna Park", genres: ["Comedy", "Coming-of-age"] },
        { name: "Kai Rivers", genres: ["Action", "Superhero"] },
        { name: "Amara Patel", genres: ["Romance", "Drama"] },
        { name: "Zane Ortiz", genres: ["Crime", "Noir"] },
        { name: "Maya Lewis", genres: ["Documentary", "Biography"] },
        { name: "Riley Stone", genres: ["Western", "Adventure"] },
        { name: "Elias Ford", genres: ["Mystery", "Suspense"] },
        { name: "Clara Moore", genres: ["Fantasy", "Mythic"] },
        { name: "Noah Bennett", genres: ["Sci-Fi", "Speculative"] },
        { name: "Isla Gomez", genres: ["Drama", "Social"] },
        { name: "Hannah Reed", genres: ["Comedy", "Satire"] },
        { name: "Victor Lane", genres: ["Thriller", "Psychological"] },
      ],
    };
  }

  render() {
    return (
      <section className="section">
        <div className="section__header">
          <h2>Featured authors</h2>
          <p>20 writers building the next wave of cinematic stories.</p>
        </div>
        <div className="authors-grid">
          {this.state.authors.map((author) => (
            <article className="author-card" key={author.name}>
              <div className="author-card__logo">
                {author.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")}
              </div>
              <div className="author-card__details">
                <h3>{author.name}</h3>
                <div className="tag-row">
                  {author.genres.map((genre) => (
                    <span className="tag" key={`${author.name}-${genre}`}>
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  }
}

export default FeaturedAuthors;
