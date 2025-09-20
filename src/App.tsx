import "./App.css";

interface ProjectLink {
  type: string;
  url: string;
}

interface Project {
  title: string;
  year: string;
  description: string;
  links: ProjectLink[];
}

const projects: Project[] = [
  {
    title: "Texas Lady Crushers",
    year: "2023 - 2025",
    description:
      "Managed the website and led project management, organized team workflows using Notion, and set up automations for the Slack community and newsletter to enhance engagement and streamline operations.",
    links: [{ type: "Website", url: "https://texasladycrushers.com" }],
  },
  {
    title: "City of San Antonio R&D League",
    year: "2021",
    description:
      "Led project management and provided engineering input for the R&D On-Demand portal, coordinating city departments, data scientists, and researchers to tackle community challenges and enable evidence-based policymaking for 1.5 million residents.",
    links: [
      { type: "Website", url: "https://researchpartnerships.sanantonio.gov/" },
      {
        type: "Report",
        url: "https://www.sanantonio.gov/Portals/0/Files/Innovation/RDLeague/Projects/RDOnDemand.pdf",
      },
      {
        type: "Roadmap",
        url: "https://www.sanantonio.gov/Portals/0/Files/Innovation/RDLeague/AnnualReport/RDLeague-LookBack-Roadmap-2021.pdf",
      },
    ],
  },
  {
    title: "CodeQuantum Hackathon",
    year: "2021",
    description:
      "Organized the first hackathon for marginalized genders, securing sponsorship from companies like Google, Paycom, HEB, Matrix AI, Valero, and JPMorgan Chase.",
    links: [
      { type: "GitHub", url: "https://github.com/acmutsa/CodeQuantum2021" },
      { type: "Website", url: "https://acmutsa.org/suborg_code_quantum/" },
    ],
  },
];

function App() {
  return (
    <>
      {" "}
      <div className="wavy-line"></div>
      <h1>Hi! I'm Tiffany Tran</h1>
      <div className="card">
        <div className="about">
          <div>
            <p>
              I'm a software engineer at a fintech, building responsive and
              accessible applications that simplify the loan experience for
              users.
            </p>
            <p>
              Outside of work, I stay busy by climbing and hiking, while also
              enjoying hands-on hobbies like crocheting and sewing.
            </p>
          </div>
          <img
            src="/angry-octopus-crown.jpeg"
            alt="angry cute octopus sitting on top of a software engineer's head"
            className="small-image"
            draggable={false}
            onMouseDown={(e) => e.preventDefault()}
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>
        <p className="read-the-docs">
          Explore my{" "}
          <a
            href="https://github.com/trantiffany"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          and learn more about my experience on{" "}
          <a
            href="https://www.linkedin.com/in/tiffanytrancs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          .
        </p>
      </div>
      <div className="wavy-line"></div>
      <div className="card">
        <h2>Cool Things I've Worked On</h2>
        {projects.map((project, index) => (
          <div key={index}>
            <div className="project-header">
              {" "}
              <h3 className="project-title">{project.title}</h3>{" "}
              <p>{project.year}</p>
            </div>
            <div className="project-item">
              <div className="project-links">
                {project.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`project-link project-link-${link.type.toLowerCase()}`}
                  >
                    {link.type}
                  </a>
                ))}
              </div>
            </div>

            <p className="project-item">{project.description}</p>
          </div>
        ))}
      </div>{" "}
      <div className="wavy-line"></div>
    </>
  );
}

export default App;
