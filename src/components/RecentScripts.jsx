import React from "react";

class RecentScripts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scripts: [
        { title: "Echoes of June", author: "Ava Brooks", postedAt: "2024-08-12T09:00:00Z" },
        { title: "Iron Orchard", author: "Theo Jacobs", postedAt: "2024-08-10T14:30:00Z" },
        { title: "Aerial Nights", author: "Lila Chen", postedAt: "2024-08-09T11:45:00Z" },
        { title: "Blue Hour Blvd", author: "Miles Harper", postedAt: "2024-08-08T16:10:00Z" },
        { title: "Whisper Archive", author: "Nico Alvarez", postedAt: "2024-08-07T08:20:00Z" },
      ],
    };
  }

  render() {
    const sortedScripts = [...this.state.scripts].sort(
      (a, b) => new Date(b.postedAt) - new Date(a.postedAt)
    );

    return (
      <section className="section">
        <div className="section__header">
          <h2>Most recently posted</h2>
          <p>Newest submissions ordered by post time.</p>
        </div>
        <div className="recent-scripts">
          {sortedScripts.map((script) => (
            <article className="recent-card" key={script.title}>
              <div>
                <h3>{script.title}</h3>
                <p>by {script.author}</p>
              </div>
              <time dateTime={script.postedAt}>
                {new Date(script.postedAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
            </article>
          ))}
        </div>
      </section>
    );
  }
}

export default RecentScripts;
