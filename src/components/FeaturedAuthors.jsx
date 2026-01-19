import React from "react";

class FeaturedAuthors extends React.Component {
  render() {
    const { profiles } = this.props;

    return (
      <section className="section">
        <div className="section__header">
          <h2>Featured authors</h2>
          <p>Explore a hand-picked roster of market-ready storytellers.</p>
        </div>
        <div className="authors-grid">
          {profiles.length === 0 ? (
            <p className="section__empty">No featured authors available yet.</p>
          ) : (
            profiles.map((author) => (
            <article className="author-card" key={author.name}>
              <div className="author-card__logo">
                {author.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")}
              </div>
              <div className="author-card__details">
                <h3>
                  <a className="author-card__name" href={`#/author/${author.slug}`}>
                    {author.name}
                  </a>
                </h3>
                <div className="tag-row">
                  {author.specialties.map((specialty) => (
                    <span className="tag" key={`${author.name}-${specialty}`}>
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </article>
            ))
          )}
        </div>
      </section>
    );
  }
}

FeaturedAuthors.defaultProps = {
  profiles: [],
};

export default FeaturedAuthors;
