import React from "react";

class FeaturedScripts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scripts: [
        {
          title: "Midnight Relay",
          logline: "A radio host uncovers a conspiracy hidden in late-night broadcasts.",
          genre: "Thriller",
        },
        {
          title: "Sunrise at 4AM",
          logline: "Two bakers chase a dream of running the city's first dawn cafe.",
          genre: "Drama",
        },
        {
          title: "Atlas of Stars",
          logline: "A cartographer maps a city that only appears in starlight.",
          genre: "Fantasy",
        },
        {
          title: "Signal to Noise",
          logline: "A sound engineer discovers a message embedded in a classic record.",
          genre: "Mystery",
        },
      ],
    };
  }

  render() {
    const featured = this.state.scripts.slice(0, 2);

    return (
      <section className="section">
        <div className="section__header">
          <h2>Featured scripts</h2>
          <p>Two spotlighted stories curated for producers and readers.</p>
        </div>
        <div className="featured-scripts">
          {featured.map((script) => (
            <article className="featured-card" key={script.title}>
              <div className="featured-card__tag">{script.genre}</div>
              <h3>{script.title}</h3>
              <p>{script.logline}</p>
              <button className="button button--primary" type="button">
                Read the script
              </button>
            </article>
          ))}
        </div>
      </section>
    );
  }
}

export default FeaturedScripts;
