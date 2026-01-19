import React from "react";

class ProfileMarketplace extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProfile: "Ava Brooks",
      profiles: [
        {
          name: "Ava Brooks",
          location: "Brooklyn, NY",
          specialties: ["Sci-Fi", "Drama"],
          scripts: [
            {
              title: "Neon Archive",
              format: "Feature",
              price: "$28k",
              status: "Option available",
              summary: "A memory archivist rewrites a rebellion after a solar blackout.",
            },
            {
              title: "Signal Drift",
              format: "Limited Series",
              price: "$45k",
              status: "Pitch ready",
              summary: "Deep-space pilots uncover the cost of rerouting an aging colony.",
            },
          ],
        },
        {
          name: "Miles Harper",
          location: "Austin, TX",
          specialties: ["Action", "Thriller"],
          scripts: [
            {
              title: "Cold Pursuit Lane",
              format: "Feature",
              price: "$32k",
              status: "Available now",
              summary: "A getaway driver protects a witness while a cartel closes in.",
            },
            {
              title: "Night Shift Protocol",
              format: "Series",
              price: "$50k",
              status: "In rewrites",
              summary: "Rookie agents run a covert task force that keeps the city awake.",
            },
            {
              title: "Turbine",
              format: "Feature",
              price: "$22k",
              status: "Fresh draft",
              summary: "A storm-chasing crew fights sabotage amid record-breaking winds.",
            },
          ],
        },
        {
          name: "Lila Chen",
          location: "Seattle, WA",
          specialties: ["Romance", "Comedy"],
          scripts: [
            {
              title: "Halfway to Home",
              format: "Feature",
              price: "$18k",
              status: "Festival darling",
              summary: "A runaway chef and a journalist fake-date across a food tour.",
            },
            {
              title: "The Meet-Cute Ledger",
              format: "Series",
              price: "$38k",
              status: "Staffed",
              summary: "A cynical accountant tracks romantic coincidences for a dating app.",
            },
          ],
        },
        {
          name: "Nico Alvarez",
          location: "Miami, FL",
          specialties: ["Mystery", "Crime"],
          scripts: [
            {
              title: "Blackwater Ledger",
              format: "Feature",
              price: "$30k",
              status: "Available now",
              summary: "A dockworker finds a ledger that points to a decades-old heist.",
            },
            {
              title: "Blue Light District",
              format: "Limited Series",
              price: "$48k",
              status: "In packaging",
              summary: "Vice detectives chase a cyber ring while guarding their own secrets.",
            },
          ],
        },
      ],
    };
  }

  handleSelect = (name) => {
    this.setState({ selectedProfile: name });
  };

  render() {
    const selectedProfile = this.state.profiles.find(
      (profile) => profile.name === this.state.selectedProfile
    );

    return (
      <section className="section marketplace" id="marketplace">
        <div className="section__header">
          <h2>Browse writer profiles</h2>
          <p>
            Tap a profile to reveal every script that author has ready for sale.
          </p>
        </div>
        <div className="marketplace__layout">
          <div className="profile-list" role="tablist" aria-label="Writer profiles">
            {this.state.profiles.map((profile) => (
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
