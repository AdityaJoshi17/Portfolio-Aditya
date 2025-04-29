import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="flex justify-center mb-8">
            <div
                className="w-full md:w-2/3 lg:w-1/2 p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_12px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2 text-center">
                Fraud Detection Using Deep Boosting Decision Tree
              </h3>
              <p className="text-gray-400 mb-4 text-center">
                Designed a machine learning model leveraging ensemble boosting trees to accurately detect and prevent
                fraudulent transactions in financial systems.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {["Python", "XGBoost", "Pandas", "Sklearn"].map((tech, key) => (
                    <span
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                    >
          {tech}
        </span>
                ))}
              </div>
              <div className="flex justify-center">
                <a
                    href="https://github.com/AdityaJoshi17/Fraud-Detection"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Remote Sensing Image Classification</h3>
              <p className="text-gray-400 mb-4">
                Developed a deep learning model for classifying remote sensing images to enhance land use and
                environmental analysis.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                    <span
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                    >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                    href="https://github.com/AdityaJoshi17/Major2.0"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div
                className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Sudoku Solver</h3>
              <p className="text-gray-400 mb-4">
                Created an AI-powered Sudoku solver using JavaScript that automatically solves puzzles with optimal
                solutions.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "TensorFlow", "D3.js", "Flask"].map((tech, key) => (
                    <span
                        key={key}
                        className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                    href="https://github.com/AdityaJoshi17/sudokuSolver"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
                className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">E-Commerce Web App</h3>
              <p className="text-gray-400 mb-4">
                Full-stack e-commerce with modern UI, secure payment
                integration, and customizable product inventory.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Next.js", "TypeScript", "Stripe", "PostgreSQL"].map(
                    (tech) => (
                        <span
                            key={tech}
                            className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                        >
                      {tech}
                    </span>
                    )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                    href="https://github.com/AdityaJoshi17/E-Commerce-"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
                className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Projekta - Project Management Tool</h3>
              <p className="text-gray-400 mb-4">
                Designed and developed "Projekta," a project management tool to streamline task tracking and team
                collaboration.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Socket.IO", "Express", "React", "Redis"].map((tech, key) => (
                    <span
                        key={key}
                        className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                    href="https://github.com/mrinal4703/Projekta"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
