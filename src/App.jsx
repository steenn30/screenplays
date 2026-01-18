import "./index.css";

const features = [
  {
    title: "Clean starting point",
    description: "React 18 + Vite with sensible defaults so you can build fast.",
  },
  {
    title: "Ready for growth",
    description: "Modular structure with a simple landing layout and styling.",
  },
  {
    title: "Developer friendly",
    description: "ESLint configuration and scripts to keep the project tidy.",
  },
];

export default function App() {
  return (
    <div className="app">
      <header className="hero">
        <p className="hero__eyebrow">Screenplays</p>
        <h1 className="hero__title">Start writing. Start shipping.</h1>
        <p className="hero__subtitle">
          A fresh React setup to bootstrap the next great story-driven product.
        </p>
        <div className="hero__actions">
          <button className="button button--primary" type="button">
            Create your first project
          </button>
          <button className="button button--ghost" type="button">
            Explore templates
          </button>
        </div>
      </header>

      <section className="features">
        {features.map((feature) => (
          <article className="feature-card" key={feature.title}>
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
