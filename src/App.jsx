import ProjectCard from './components/ProjectCard';

const projects = [
  {
    title: 'Hammerwerk rozhlasové štúdio',
    description: 'Netradičné podstivé rozhlasové štúdio.',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80',
    href: 'https://hammerwerk.sostrv.org',
  },
  {
    title: 'Tour de Gemer',
    description: 'Mapa Gemera.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    href: 'https://gemer.sostv.org',
  },
  {
    title: 'Websklad Lucidus',
    description: 'Webový skladový systém.',
    image: 'https://images.unsplash.com/photo-1518770660439-5b7a6f8f7b1e?auto=format&fit=crop&w=800&q=80',
    href: 'https://websklad.sostrv.org',
  },
];

function App() {
  return (
      <div className="min-h-screen bg-black text-gray-100 selection:bg-blue-500/30">
        <header className="relative py-20 px-6 text-center lg:py-32">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/10 blur-3xl rounded-full"></div>
            <div className="absolute top-1/2 -right-24 w-72 h-72 bg-purple-600/10 blur-3xl rounded-full"></div>
          </div>
          
          <div className="relative z-10 mx-auto max-w-3xl">
            <span className="mb-4 inline-block px-3 py-1 text-xs font-semibold tracking-wider text-blue-400 uppercase border border-blue-400/30 rounded-full bg-blue-400/5">
              Stredná odborná škola technická
            </span>
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
              Projekty našich <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">študentov</span>
            </h1>
            <p className="text-lg leading-relaxed text-gray-400 sm:text-xl">
              Objavte praktické školské projekty, ktoré ukazujú zručnosti, technické myslenie a kreativitu žiakov.
            </p>
          </div>
        </header>

        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="mb-12 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Vybrané projekty
            </h2>
            <div className="h-px flex-1 ml-8 bg-gradient-to-r from-gray-800 to-transparent"></div>
          </div>
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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

        <footer className="py-12 px-6 border-t border-gray-900 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Stredná odborná škola technická Rožňava. Všetky práva vyhradené.</p>
        </footer>
      </div>
  );
}

export default App;