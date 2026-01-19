import React from "react";

class AuthorScriptsPage extends React.Component {
  renderScripts() {
    const { profile } = this.props;

    if (!profile) {
      return (
        <div className="author-page__empty">
          <h2>Author not found</h2>
          <p>We couldn't find a script catalog for this profile.</p>
        </div>
      );
    }

    return (
      <div className="author-page__content">
        <header className="author-page__header">
          <div>
            <p className="author-page__eyebrow">Full catalog</p>
            <h1>{profile.name}</h1>
            <p className="author-page__meta">
              {profile.location} · {profile.specialties.join(" · ")}
            </p>
          </div>
          <button className="button button--ghost" type="button">
            Request full deck
          </button>
        </header>
        <div className="script-list">
          {profile.scripts.map((script) => (
            <article className="script-card" key={script.title}>
              <div>
                <p className="script-card__tag">{script.format}</p>
                <h4>{script.title}</h4>
                <p className="script-card__summary">{script.summary}</p>
              </div>
              <div className="script-card__meta">
                <span>{script.status}</span>
                <span className="script-card__price">{script.price}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    );
  }

  render() {
    const { onBack } = this.props;

    return (
      <section className="author-page">
        <button className="button author-page__back" type="button" onClick={onBack}>
          ← Back to home
        </button>
        {this.renderScripts()}
      </section>
    );
  }
}

export default AuthorScriptsPage;
