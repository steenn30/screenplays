import React from "react";
import "./index.css";
import InfoBar from "./components/InfoBar.jsx";
import FeaturedScripts from "./components/FeaturedScripts.jsx";
import FeaturedAuthors from "./components/FeaturedAuthors.jsx";
import ProfileMarketplace from "./components/ProfileMarketplace.jsx";
import SearchBar from "./components/SearchBar.jsx";
import RecentScripts from "./components/RecentScripts.jsx";
import AuthorScriptsPage from "./components/AuthorScriptsPage.jsx";
import authorProfiles from "./data/authorProfiles.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    const { view, slug } = this.getViewFromHash();
    this.state = {
      title: "Screenplays",
      view,
      selectedSlug: slug,
    };
  }

  componentDidMount() {
    window.addEventListener("hashchange", this.handleHashChange);
  }

  componentWillUnmount() {
    window.removeEventListener("hashchange", this.handleHashChange);
  }

  getViewFromHash = () => {
    const hash = window.location.hash;

    if (hash.startsWith("#/author/")) {
      return { view: "author", slug: hash.replace("#/author/", "") };
    }

    return { view: "home", slug: "" };
  };

  handleHashChange = () => {
    const { view, slug } = this.getViewFromHash();
    this.setState({ view, selectedSlug: slug });
  };

  handleBackToHome = () => {
    window.location.hash = "";
  };

  render() {
    const selectedProfile = authorProfiles.find(
      (profile) => profile.slug === this.state.selectedSlug
    );

    return (
      <div className="app">
        <InfoBar />
        {this.state.view === "author" ? (
          <AuthorScriptsPage
            profile={selectedProfile}
            onBack={this.handleBackToHome}
          />
        ) : (
          <>
            <header className="hero">
              <p className="hero__eyebrow">{this.state.title}</p>
              <h1 className="hero__title">Write bold stories. Share them widely.</h1>
              <p className="hero__subtitle">
                Curate scripts, highlight authors, and track the freshest stories in
                one place.
              </p>
            </header>

            <FeaturedScripts />
            <FeaturedAuthors profiles={authorProfiles} />
            <ProfileMarketplace profiles={authorProfiles} />
            <SearchBar />
            <RecentScripts />
          </>
        )}
      </div>
    );
  }
}

export default App;
