export default function ProjectCard({ image, title, description, href }) {
    return (
        <a
            className="group relative overflow-hidden rounded-xl bg-gray-900 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 border border-gray-800"
            href={href}
            target="_blank"
            rel="noreferrer"
        >
            <div className="aspect-video w-full overflow-hidden bg-white flex items-center justify-center p-4">
                <img
                    className="max-h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                    src={image}
                    alt={title}
                />
            </div>
            <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-400">
                    {description}
                </p>
                <div className="mt-4 flex items-center text-sm font-medium text-blue-500">
                    Zistiť viac
                    <svg
                        className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
        </a>
    );
}