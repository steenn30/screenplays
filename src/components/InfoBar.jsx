import React from "react";

class InfoBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Discover fresh scripts, trusted voices, and new collaborators.",
    };
  }

  render() {
    return (
      <div className="info-bar">
        <span>{this.state.message}</span>
        <button className="button button--ghost" type="button">
          + Contribute
        </button>
      </div>
    );
  }
}

export default InfoBar;
