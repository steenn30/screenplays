import React from "react";
import "./index.css";
import InfoBar from "./components/InfoBar.jsx";
import FeaturedScripts from "./components/FeaturedScripts.jsx";
import FeaturedAuthors from "./components/FeaturedAuthors.jsx";
import SearchBar from "./components/SearchBar.jsx";
import RecentScripts from "./components/RecentScripts.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Screenplays",
    };
  }

  render() {
    return (
      <div className="app">
        <InfoBar />
        <header className="hero">
          <p className="hero__eyebrow">{this.state.title}</p>
          <h1 className="hero__title">Write bold stories. Share them widely.</h1>
          <p className="hero__subtitle">
            Curate scripts, highlight authors, and track the freshest stories in one
            place.
          </p>
        </header>

        <FeaturedScripts />
        <FeaturedAuthors />
        <SearchBar />
        <RecentScripts />
      </div>
    );
  }
}

export default App;
