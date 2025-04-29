// import { RevealOnScroll } from "../RevealOnScroll";
//
// export const About = () => {
//   const frontendSkills = [
//     "React",
//     "Vue",
//     "TypeScript",
//     "TailwindCSS",
//     "Svelte",
//   ];
//
//   const backendSkills = ["Node.js", "Python", "AWS", "MongoDB", "GraphQL"];
//
//   return (
//     <section
//       id="about"
//       className="min-h-screen flex items-center justify-center py-20"
//     >
//       <RevealOnScroll>
//         <div className="max-w-3xl mx-auto px-4">
//           <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
//             {" "}
//             About Me
//           </h2>
//
//           <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
//             <p className="text-gray-300 mb-6">
//               Passionate developer with expertise in building scalable web
//               applications and creating innovative solutions.
//             </p>
//
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
//                 <h3 className="text-xl font-bold mb-4"> Frontend</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {frontendSkills.map((tech, key) => (
//                     <span
//                       key={key}
//                       className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
//                                     hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
//                     "
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//
//               <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
//                 <h3 className="text-xl font-bold mb-4"> Backend</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {backendSkills.map((tech, key) => (
//                     <span
//                       key={key}
//                       className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
//                                     hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
//                     "
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
//             <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
//               <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
//               <ul className="list-disc list-inside text-gray-300 space-y-2">
//                 <li>
//                   <strong> B.S. in Computer Science </strong> - XYZ University
//                   (2016-2020)
//                 </li>
//                 <li>
//                   Relevant Coursework: Data Structures, Web Development, Cloud
//                   Computing...
//                 </li>
//               </ul>
//             </div>
//             <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
//               <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
//               <div className="space-y-4 text-gray-300">
//                 <div>
//                   <h4 className="font-semibold">
//                     {" "}
//                     Software Engineer at ABC Corp (2020 - Present){" "}
//                   </h4>
//                   <p>
//                     Developed and maintained microservices for cloud-based
//                     applications.
//                   </p>
//                 </div>
//
//                 <div>
//                   <h4 className="font-semibold">
//                     {" "}
//                     Intern at DEF Startups (2019){" "}
//                   </h4>
//                   <p>
//                     Assisted in building front-end components and integration
//                     REST APIs
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </RevealOnScroll>
//     </section>
//   );
// };
import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = ["HTML", "React", "Vue", "JavaScript", "TailwindCSS", "Angular",];

  const backendSkills = ["Node.js", "Python", "AWS", "MongoDB", "SQL"];

  const tools = ["Git", "Figma", "Postman", "Docker", "VS Code"];

  const technologies = ["REST APIs", "Workday", "Kore.ai"];

  return (
      <section
          id="about"
          className="min-h-screen flex items-center justify-center py-20"
      >
        <RevealOnScroll>
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
              About Me
            </h2>

            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
              <p className="text-gray-300 mb-6">
                Passionate developer with expertise in building scalable web
                applications and creating innovative solutions.
                I specialize in both frontend and backend technologies, crafting seamless applications that
                are scalable and user-friendly. With a background in computer science and hands-on experience
                in Workday,Kore.ai,Web Dev, I’m always looking to learn new technologies and
                innovate on the web. When I’m not coding, you can find me
                exploring new tech trends, hiking or probably scrolling.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Frontend */}
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4">Frontend</h3>
                  <div className="flex flex-wrap gap-2">
                    {frontendSkills.map((tech, key) => (
                        <span
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                        >
                      {tech}
                    </span>
                    ))}
                  </div>
                </div>

                {/* Backend */}
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4">Backend</h3>
                  <div className="flex flex-wrap gap-2">
                    {backendSkills.map((tech, key) => (
                        <span
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                        >
                      {tech}
                    </span>
                    ))}
                  </div>
                </div>

                {/* Tools */}
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4">Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {tools.map((tool, key) => (
                        <span
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                        >
                      {tool}
                    </span>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, key) => (
                        <span
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                        >
                      {tech}
                    </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Education & Work Experience */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    <strong>B.Tech. in Computer Science</strong> - MIT Academy of Engineering
                    (2021-2025)
                  </li>
                  <li>
                    Relevant Coursework: Data Structures, Web Development, DBMS, Artificial intelligence,
                    Machine Learning...
                  </li>
                  <li>
                    <strong>12th HSC</strong> - Nutan Vidyamandir Nashik
                    (2019-2021)
                  </li>
                  <li>
                    Relevant Coursework: Physics, Chemistry, Maths...
                  </li>
                </ul>
              </div>
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <h4 className="font-semibold">
                    HRIT Intern at TomTom India Pvt Ltd (Jan 25 - Present)
                    </h4>
                    <p>
                      <li>
                        Engineered a PowerApp solution for subteam creation, reducing manual effort by automating the end-to-end process
                      </li>
                      <li>
                        Documented Workday integration workflows, enhancing team understanding and ensuring smoother operations
                      </li>
                      <li>
                        Handled Absence/Time Off-related tickets in Jira, providing effective solutions and supporting end-user issue
                        resolution
                      </li>
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold">
                      Software Intern at Colgate-Palmolive (Jun 2024- Jan 2025)
                    </h4>
                    <p>
                      <li>
                        Developed automation solutions and AI-powered chatbots achieving streamlined business processes and improved
                        customer engagement.
                      </li>
                      <li>
                        Designed conversational flows and integrated bots with external systems, achieving seamless interaction and
                        reducing user query resolution time.
                      </li>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>
  );
};
