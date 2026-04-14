import './App.css';
import ProjectCard from './components/ProjectCard';

const projects = [
  {
    title: 'CNC Projekty',
    description: 'Ukážka školských projektov z oblasti CNC obrábania a technickej výroby.',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80',
    href: 'https://example.com/cnc',
  },
  {
    title: 'Robotika',
    description: 'Študentské robotické riešenia, automatizácia a programovanie mikrokontrolérov.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    href: 'https://example.com/robotika',
  },
  {
    title: 'Elektronika',
    description: 'Praktické projekty z elektroniky, merania a návrhu obvodov.',
    image: 'https://images.unsplash.com/photo-1518770660439-5b7a6f8f7b1e?auto=format&fit=crop&w=800&q=80',
    href: 'https://example.com/elektronika',
  },
];

function App() {
  return (
      <main className="page">
        <header className="hero">
          <p className="hero__subtitle">Stredná odborná škola technická</p>
          <h1>Projekty našich študentov</h1>
          <p className="hero__text">
            Objavte praktické školské projekty, ktoré ukazujú zručnosti, technické myslenie a kreativitu žiakov.
          </p>
        </header>

        <section className="projects">
          <h2 className="projects__heading">Vybrané projekty</h2>
          <div className="projects__grid">
            {projects.map((project) => (
                <ProjectCard
                    key={project.title}
                    image={project.image}
                    title={project.title}
                    description={project.description}
                    href={project.href}
                />
            ))}
          </div>
        </section>
      </main>
  );
}

export default App;