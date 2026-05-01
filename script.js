const featuredProjects = [
  {
    title: "Classes Website",
    type: "React + Bootstrap",
    summary:
      "Built a responsive website for a computer academy using React.js and Bootstrap, helping students and parents understand course offerings, testimonials, and contact details in one clear interface.",
    techStack: ["React.js", "JavaScript", "React Bootstrap", "CSS"],
    features: [
      "Organized course and service details into sections that are easier for visitors to scan and compare.",
      "Designed responsive layouts so the website remains usable across mobile and desktop screens.",
      "Used reusable UI components to keep testimonials, gallery content, and inquiries visually consistent."
    ],
    repo: "https://github.com/Akshitam11/Classes-website",
    livelink: "https://classes-website-9qgz.vercel.app/"
  },
  {
    title: "React Mini Projects Hub",
    type: "React Router App",
    summary:
      "Created a single React application that groups multiple mini projects into one portfolio-style experience, making interactive demos easier to browse and present.",
    techStack: ["React.js", "JavaScript", "React Router", "CSS"],
    features: [
      "Connected separate mini projects through routing so users can move between demos without leaving the app.",
      "Improved project presentation by turning isolated exercises into one structured showcase.",
      "Made the codebase easier to maintain by centralizing shared layout and navigation patterns."
    ],
    repo: "https://github.com/Akshitam11/React-Mini-Projects",
    livelink: "https://react-mini-projects-self.vercel.app/"
  },
  {
    title: "React Task Manager App",
    type: "React State Management",
    summary:
      "Built a responsive task management application using React.js with local storage persistence, allowing users to organize, update, and track tasks efficiently through a simple day-to-day workflow.",
    techStack: ["React.js", "JavaScript", "CSS", "localStorage"],
    features: [
      "Saved tasks in local storage so users do not lose progress after refreshing the page.",
      "Added filters and status controls to help users focus on pending or completed tasks quickly.",
      "Included edit and delete flows to support practical task management instead of one-time list creation."
    ],
    repo: "https://github.com/Akshitam11/Todolist-React-",
    livelink: "https://taskmanagerreact-psi.vercel.app/"
  },
  {
    title: "React Product List",
    type: "React Form UI",
    summary:
      "Developed a lightweight product listing interface that allows users to add and manage product names and prices with immediate visual feedback.",
    techStack: ["React.js", "JavaScript", "CSS"],
    features: [
      "Rendered new product entries instantly so users receive immediate confirmation after submitting data.",
      "Used state-driven updates to keep the interface accurate without page reloads.",
      "Added item removal controls to make correcting or managing entries straightforward."
    ],
    repo: "https://github.com/Akshitam11/Product_list_react",
    livelink: "https://product-list-react-xi.vercel.app/"
  },
  {
    title: "Amazon UI Clone",
    type: "HTML + CSS",
    summary:
      "Recreated a large e-commerce style homepage to practice content-heavy layout structure, visual hierarchy, and responsive UI composition.",
    techStack: ["HTML", "CSS", "JavaScript"],
    features: [
      "Structured banners, navigation, and product sections into a layout that remains visually scannable.",
      "Practiced card-based UI patterns commonly used in retail and marketplace websites.",
      "Improved styling control through large-scale page composition and section spacing."
    ],
    repo: "https://github.com/Akshitam11/Amazon",
    livelink: "https://amazonproject-xi.vercel.app/"
  },
  {
    title: "JavaScript To-Do List",
    type: "JavaScript + localStorage",
    summary:
      "Created a browser-based to-do application in JavaScript with persistent storage, giving users a simple way to manage tasks without relying on a backend.",
    techStack: ["JavaScript", "HTML", "CSS", "localStorage"],
    features: [
      "Stored tasks locally so users can return to their list without losing saved items.",
      "Supported add, edit, complete, and delete actions for full task lifecycle management.",
      "Included filtering logic to help users review tasks based on completion status more efficiently."
    ],
    repo: "https://github.com/Akshitam11/To-do-list",
    livelink: "https://to-do-list-liard-chi-22.vercel.app/"
  }
];

const labProjects = [
  {
    title: "Double Click Heart",
    category: "javascript",
    description:
      "Created an interaction that responds to double clicks with animation feedback and a visible like counter, improving engagement in image-based UI experiments.",
    repo: "https://github.com/Akshitam11/double_click_heart",
    livelink: "https://double-click-heart-six.vercel.app/",
    stack: ["JavaScript", "DOM Events"]
  },
  {
    title: "Stopwatch",
    category: "javascript",
    description:
      "Built a stopwatch interface with start, pause, and reset controls to practice timer logic and precise user-triggered state updates.",
    repo: "https://github.com/Akshitam11/stopwatch",
    livelink: "https://stopwatch-ebon-one.vercel.app/",
    stack: ["JavaScript", "Timers"]
  },
  {
    title: "Progress Steps",
    category: "ui",
    description:
      "Designed a step-by-step progress component that gives users clear movement through a multi-stage interface.",
    repo: "https://github.com/Akshitam11/progress_steps",
    livelink: "https://progress-steps-dun-five.vercel.app/",
    stack: ["JavaScript", "UI States"]
  },
  {
    title: "Navbar",
    category: "ui",
    description:
      "Built a responsive navigation pattern with a mobile menu trigger to keep movement through the interface simple on smaller screens.",
    repo: "https://github.com/Akshitam11/navbar",
    livelink: "https://navbar-hazel-psi.vercel.app/",
    stack: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Hidden Search",
    category: "ui",
    description:
      "Created an expandable search input that improves space usage while still revealing the control when users need it.",
    repo: "https://github.com/Akshitam11/hidden_search",
    livelink: "https://hidden-search-bice.vercel.app/",
    stack: ["CSS", "DOM Interaction"]
  },
  {
    title: "Three-Way Toggle Logic",
    category: "logic",
    description:
      "Implemented the classic good-cheap-fast rule to demonstrate conditional interface logic and constraint-based state handling.",
    repo: "https://github.com/Akshitam11/project_need",
    livelink: "https://project-need.vercel.app/",
    stack: ["JavaScript", "Logic"]
  },
  {
    title: "Form Input Wave",
    category: "ui",
    description:
      "Added animated form label behavior to make a simple login input feel more polished and interactive.",
    repo: "https://github.com/Akshitam11/form_input_wave",
    livelink: "https://form-input-wave-sepia.vercel.app/",
    stack: ["CSS Animation", "JavaScript"]
  },
  {
    title: "Drum Kit",
    category: "javascript",
    description:
      "Mapped keyboard and click events to audio playback for a responsive interaction exercise focused on event handling.",
    repo: "https://github.com/Akshitam11/drum_kit",
    livelink: "https://drum-kit-alpha-one.vercel.app/",
    stack: ["JavaScript", "Audio"]
  },
  {
    title: "Fetch Post",
    category: "api",
    description:
      "Built a small API-based interface that fetches post data from user input, improving practice with validation and asynchronous rendering.",
    repo: "https://github.com/Akshitam11/fetch_post",
    livelink: "https://fetch-post-phi.vercel.app/",
    stack: ["Fetch API", "Validation"]
  },
  {
    title: "Fetch Post Comments",
    category: "api",
    description:
      "Retrieved and displayed comment data by post ID to practice API integration and structured list rendering.",
    repo: "https://github.com/Akshitam11/fetch_postcomment",
    livelink: "https://fetch-postcomment.vercel.app/",
    stack: ["Fetch API", "Rendering Lists"]
  },
  {
    title: "Dropdown Menu",
    category: "ui",
    description:
      "Created a multi-level menu pattern to make grouped navigation options easier to access and organize.",
    repo: "https://github.com/Akshitam11/Dropdown",
    livelink: "https://dropdown-gules-one.vercel.app/",
    stack: ["HTML", "CSS"]
  },
  {
    title: "Hamburger Menu",
    category: "ui",
    description:
      "Built an animated hamburger icon transition to improve the visual feedback of a common mobile navigation control.",
    repo: "https://github.com/Akshitam11/hamburger_menu",
    livelink: "https://hamburger-menu-rho.vercel.app/",
    stack: ["CSS Transform", "JavaScript"]
  }
];

const filters = [
  { id: "all", label: "All" },
  { id: "ui", label: "UI" },
  { id: "javascript", label: "JavaScript" },
  { id: "api", label: "API" },
  { id: "logic", label: "Logic" }
];

const featuredContainer = document.getElementById("featured-projects");
const labContainer = document.getElementById("lab-projects");
const filterContainer = document.getElementById("project-filters");
const yearEl = document.getElementById("year");

function createTagList(tags) {
  return tags.map((tag) => `<span class="project-tag">${tag}</span>`).join("");
}

function renderFeaturedProjects() {
  featuredContainer.innerHTML = featuredProjects
    .map(
      (project) => `
        <article class="project-card reveal">
          <div class="project-topline">
            <div>
              <span class="project-type">${project.type}</span>
              <h3>${project.title}</h3>
            </div>
          </div>
          <p class="project-description">${project.summary}</p>
          <p class="project-stack"><strong>Tech Stack:</strong> ${project.techStack.join(", ")}</p>
          <div class="project-section">
            <p class="feature-label">Key Features</p>
            <ul class="project-features">
              ${project.features.map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </div>
          <div class="project-links">
            <a class="project-link" href="${project.livelink}" target="_blank" rel="noreferrer">Live Demo</a>
            <a class="project-link" href="${project.repo}" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </article>
      `
    )
    .join("");
}

function renderFilters(activeFilter) {
  filterContainer.innerHTML = filters
    .map(
      (filter) => `
        <button class="filter-button ${
          filter.id === activeFilter ? "is-active" : ""
        }" type="button" data-filter="${filter.id}">
          ${filter.label}
        </button>
      `
    )
    .join("");
}

function renderLabProjects(activeFilter = "all") {
  const visibleProjects =
    activeFilter === "all"
      ? labProjects
      : labProjects.filter((project) => project.category === activeFilter);

  labContainer.innerHTML = visibleProjects
    .map(
      (project) => `
        <article class="lab-card reveal">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="project-tags">${createTagList(project.stack)}</div>
          <div class="project-links">
            <a class="project-link" href="${project.livelink}" target="_blank" rel="noreferrer">Live Demo</a>
            <a class="project-link" href="${project.repo}" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </article>
      `
    )
    .join("");

  observeReveals();
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

function initializeProjectFilters() {
  filterContainer.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");

    if (!button) {
      return;
    }

    const activeFilter = button.dataset.filter;
    renderFilters(activeFilter);
    renderLabProjects(activeFilter);
  });
}

renderFeaturedProjects();
renderFilters("all");
renderLabProjects("all");
initializeProjectFilters();
observeReveals();

yearEl.textContent = new Date().getFullYear();
