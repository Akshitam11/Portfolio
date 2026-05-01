const projects = [
  {
    title: "Classes Website",
    description:
      "Built a responsive website for a computer academy to present courses, testimonials, gallery content, and inquiry details in one clear experience. The project helps visitors understand offerings quickly and makes the business easier to explore on any device.",
    techStack: ["React.js", "JavaScript", "React Bootstrap", "CSS"],
    features: [
      "Structured service information into clear sections so users can compare courses without confusion.",
      "Designed responsive layouts that keep navigation and content accessible across mobile and desktop screens.",
      "Used reusable UI components to maintain a consistent presentation for testimonials, course cards, and contact areas."
    ],
    liveDemo: "https://classes-website-9qgz.vercel.app/",
    github: "https://github.com/Akshitam11/Classes-website"
  },
  {
    title: "React Mini Projects Hub",
    description:
      "Created a single React application that organizes multiple frontend mini projects into one navigable experience. This makes it easier to showcase interactive experiments without sending users through disconnected demos.",
    techStack: ["React.js", "JavaScript", "React Router", "CSS"],
    features: [
      "Combined separate practice projects into one portfolio-friendly structure for easier browsing.",
      "Used route-based navigation so users can move between demos quickly without losing context.",
      "Improved maintainability by grouping shared layout and interaction patterns inside one codebase."
    ],
    liveDemo: "https://react-mini-projects-self.vercel.app/",
    github: "https://github.com/Akshitam11/React-Mini-Projects"
  },
  {
    title: "React Task Manager App",
    description:
      "Built a responsive task management application using React.js with local storage persistence, allowing users to organize, update, and track tasks efficiently. The interface focuses on day-to-day usability with clear actions and filtered task views.",
    techStack: ["React.js", "JavaScript", "CSS", "localStorage"],
    features: [
      "Saved task data in local storage so users do not lose progress after refreshing the page.",
      "Added task filtering and status updates to help users focus on pending or completed work.",
      "Included edit and delete flows to support practical task management instead of static list entry."
    ],
    liveDemo: "https://taskmanagerreact-psi.vercel.app/",
    github: "https://github.com/Akshitam11/Todolist-React-"
  },
  {
    title: "React Product List",
    description:
      "Developed a lightweight product entry interface that allows users to add and manage product names with pricing information in real time. The project demonstrates clear form handling and immediate feedback for list-based workflows.",
    techStack: ["React.js", "JavaScript", "CSS"],
    features: [
      "Rendered new products instantly to give users immediate confirmation after form submission.",
      "Used simple state-driven updates to keep the product list accurate and easy to manage.",
      "Added removal controls so users can correct entries without reloading the interface."
    ],
    liveDemo: "https://product-list-react-xi.vercel.app/",
    github: "https://github.com/Akshitam11/Product_list_react"
  },
  {
    title: "Amazon UI Clone",
    description:
      "Recreated a large e-commerce style homepage to practice complex layout structuring, promotional sections, and content-heavy navigation. The project helped strengthen visual hierarchy and responsive styling for retail-style interfaces.",
    techStack: ["HTML", "CSS", "JavaScript"],
    features: [
      "Organized multiple product and promotion sections into a layout that remains visually scannable.",
      "Practiced navigation and card-based content patterns common in large e-commerce experiences.",
      "Improved CSS layout control through banners, grids, and section spacing inspired by production sites."
    ],
    liveDemo: "https://amazonproject-xi.vercel.app/",
    github: "https://github.com/Akshitam11/Amazon"
  },
  {
    title: "JavaScript To-Do List",
    description:
      "Created a browser-based to-do application in JavaScript for users who need a simple way to manage tasks without signing in or using a backend. The project focuses on fast interaction, persistent storage, and practical task control.",
    techStack: ["JavaScript", "HTML", "CSS", "localStorage"],
    features: [
      "Stored tasks locally so users can return to their list without losing saved items.",
      "Added create, edit, complete, and delete actions to support full task lifecycle management.",
      "Used filtering logic to help users review tasks based on completion status more efficiently."
    ],
    liveDemo: "https://to-do-list-liard-chi-22.vercel.app/",
    github: "https://github.com/Akshitam11/To-do-list"
  }
];

const projectsGrid = document.getElementById("projects-grid");
const yearEl = document.getElementById("year");

function renderProjects() {
  projectsGrid.innerHTML = projects
    .map(
      (project) => `
        <article class="project-card reveal">
          <div class="project-header">
            <p class="project-overline">Project</p>
            <h3>${project.title}</h3>
          </div>
          <p class="project-description">${project.description}</p>
          <p class="project-stack"><strong>Tech Stack:</strong> ${project.techStack.join(", ")}</p>
          <div>
            <h4>Key Features</h4>
            <ul class="project-features">
              ${project.features.map((feature) => `<li>${feature}</li>`).join("")}
            </ul>
          </div>
          <div class="project-links">
            <a class="project-link" href="${project.liveDemo}" target="_blank" rel="noreferrer">Live Demo</a>
            <a class="project-link" href="${project.github}" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </article>
      `
    )
    .join("");
}

function observeReveals() {
  const reveals = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16
    }
  );

  reveals.forEach((item) => {
    if (!item.classList.contains("is-visible")) {
      observer.observe(item);
    }
  });
}

renderProjects();
observeReveals();
yearEl.textContent = new Date().getFullYear();
