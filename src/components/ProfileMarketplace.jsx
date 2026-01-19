import React from "react";

class ProfileMarketplace extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProfile: props.profiles[0]?.name ?? "",
    };
  }

  handleSelect = (name) => {
    this.setState({ selectedProfile: name });
  };

  render() {
    const { profiles } = this.props;
    const selectedProfile = profiles.find(
      (profile) => profile.name === this.state.selectedProfile
    );

    return (
      <section className="section marketplace">
        <div className="section__header">
          <h2>Browse writer profiles</h2>
          <p>
            Tap a profile to reveal every script that author has ready for sale.
          </p>
        </div>
        <div className="marketplace__layout">
          <div className="profile-list" role="tablist" aria-label="Writer profiles">
            {profiles.map((profile) => (
              <button
                className={`profile-button${
                  profile.name === this.state.selectedProfile ? " is-active" : ""
                }`}
                key={profile.name}
                onClick={() => this.handleSelect(profile.name)}
                type="button"
                role="tab"
                aria-selected={profile.name === this.state.selectedProfile}
              >
                <span className="profile-button__avatar">
                  {profile.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </span>
                <span className="profile-button__info">
                  <strong>{profile.name}</strong>
                  <span>{profile.location}</span>
                </span>
              </button>
            ))}
          </div>
          {selectedProfile ? (
            <div className="profile-panel" role="tabpanel">
              <div className="profile-panel__header">
                <div>
                  <p className="profile-panel__eyebrow">Scripts for sale</p>
                  <h3>{selectedProfile.name}</h3>
                  <p className="profile-panel__meta">
                    {selectedProfile.location} · {selectedProfile.specialties.join(" · ")}
                  </p>
                </div>
                <button className="button button--ghost" type="button">
                  Request full deck
                </button>
              </div>
              <div className="script-list">
                {selectedProfile.scripts.map((script) => (
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
          ) : null}
        </div>
      </section>
    );
  }
}

export default ProfileMarketplace;
