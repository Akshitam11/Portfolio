const featuredProjects = [
  {
    title: "Classes Website",
    type: "React + Bootstrap",
    summary:
      "Built a landing page for MD16 Computer Academy using React, Vite, and React Bootstrap with structured sections for courses, testimonials, gallery, and contact.",
    highlights: [
      "Created a multi-section marketing website with responsive navigation and filtered course content.",
      "Integrated UI patterns such as modals, cards, badges, and a frontend-only inquiry form.",
      "Practiced reusable layout structure and component-based styling for service-business websites."
    ],
    tags: ["React", "Vite", "React Bootstrap", "Responsive UI"],
    repo: "https://github.com/Akshitam11/Classes-website",
    livelink: ""
  },
  {
    title: "React Mini Projects Hub",
    type: "React Router App",
    summary:
      "Combined multiple independent mini projects into one routed React application so each interaction demo can open from a single home page.",
    highlights: [
      "Used react-router-dom with lazy-loaded pages for Drum Kit, Mouse Position, Window Resize, Toggle Theme, Custom Hook, Online/Offline Status, and Form useRef.",
      "Organized multiple mini apps into a cleaner portfolio-style structure with shared navigation.",
      "Improved code reuse and project presentation by converting separate exercises into one cohesive app."
    ],
    tags: ["React", "React Router", "Lazy Loading", "UI Experiments"],
    repo: "https://github.com/Akshitam11/React-Mini-Projects",
    livelink: "https://react-mini-projects-self.vercel.app/"
  },
  {
    title: "React Task Manager App",
    type: "React State Management",
    summary:
      "Developed a task manager in React with add, edit, complete, filter, and delete flows backed by localStorage persistence.",
    highlights: [
      "Stored tasks in localStorage so the task list persists across refreshes.",
      "Added filters for all, done, and todo views plus edit mode and bulk deletion controls.",
      "Used React state, effects, and conditional rendering to manage day-to-day task operations."
    ],
    tags: ["React", "localStorage", "CRUD", "Productivity UI"],
    repo: "https://github.com/Akshitam11/Todolist-React-",
    livelink: "https://taskmanagerreact-psi.vercel.app/"
  },
  {
    title: "React Product List",
    type: "React Form UI",
    summary:
      "Built a lightweight product management interface that lets users add product names and prices, render them instantly, and remove items as needed.",
    highlights: [
      "Managed dynamic product data with React state and immediate UI updates.",
      "Implemented add and delete actions through a simple component structure.",
      "Focused on clean form handling and fast feedback in the interface."
    ],
    tags: ["React", "Forms", "State", "List Rendering"],
    repo: "https://github.com/Akshitam11/Product_list_react",
    livelink: "https://product-list-react-xi.vercel.app/"
  },
  {
    title: "Amazon UI Clone",
    type: "HTML + CSS",
    summary:
      "Recreated a desktop-style Amazon-inspired homepage layout with navigation, product grids, scrolling sections, and promotional cards.",
    highlights: [
      "Practiced layout composition using sections, cards, banners, and product tiles.",
      "Focused on visual replication of a large ecommerce homepage structure.",
      "Strengthened CSS positioning and interface breakdown skills through clone work."
    ],
    tags: ["HTML", "CSS", "UI Clone", "Layout Practice"],
    repo: "https://github.com/Akshitam11/Amazon",
    livelink: "https://amazonproject-xi.vercel.app/"
  },
  {
    title: "JS To-Do List",
    type: "JavaScript + localStorage",
    summary:
      "Created a browser-based to-do list in plain JavaScript with persistent task storage, task editing, completion tracking, and filtering.",
    highlights: [
      "Used localStorage to save and reload tasks between sessions.",
      "Implemented task add, update, remove, and filter logic without a framework.",
      "Practiced DOM manipulation and state synchronization directly in JavaScript."
    ],
    tags: ["JavaScript", "DOM", "localStorage", "Task Manager"],
    repo: "https://github.com/Akshitam11/To-do-list",
    livelink: "https://to-do-list-liard-chi-22.vercel.app/"
  }
];

const labProjects = [
  {
    title: "Double Click Heart",
    category: "javascript",
    description:
      "Adds a heart animation and like counter when the user double-clicks on the image area.",
    repo: "https://github.com/Akshitam11/double_click_heart",
    livelink: "https://double-click-heart-six.vercel.app/",
    stack: ["JavaScript", "DOM Events"]
  },
  {
    title: "Stopwatch",
    category: "javascript",
    description:
      "Implements a stopwatch with start, pause, reset, and millisecond tracking logic.",
    repo: "https://github.com/Akshitam11/stopwatch",
    livelink: "https://stopwatch-ebon-one.vercel.app/",
    stack: ["JavaScript", "Timers"]
  },
  {
    title: "Progress Steps",
    category: "ui",
    description:
      "Builds a multi-step progress component with previous and next controls.",
    repo: "https://github.com/Akshitam11/progress_steps",
    livelink: "https://progress-steps-dun-five.vercel.app/",
    stack: ["JavaScript", "UI States"]
  },
  {
    title: "Navbar",
    category: "ui",
    description:
      "Creates a responsive navigation pattern with a hamburger trigger and sliding option panel.",
    repo: "https://github.com/Akshitam11/navbar",
    livelink: "https://navbar-hazel-psi.vercel.app/",
    stack: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Hidden Search",
    category: "ui",
    description:
      "Expands a compact search UI into an active input field with animated interaction.",
    repo: "https://github.com/Akshitam11/hidden_search",
    livelink: "https://hidden-search-bice.vercel.app/",
    stack: ["CSS", "DOM Interaction"]
  },
  {
    title: "Three-Way Toggle Logic",
    category: "logic",
    description:
      "Implements the classic good-cheap-fast toggle constraint to demonstrate conditional UI logic.",
    repo: "https://github.com/Akshitam11/project_need",
    livelink: "https://project-need.vercel.app/",
    stack: ["JavaScript", "Logic"]
  },
  {
    title: "Form Input Wave",
    category: "ui",
    description:
      "Animates login form labels with staggered letter transitions for a polished micro-interaction.",
    repo: "https://github.com/Akshitam11/form_input_wave",
    livelink: "https://form-input-wave-sepia.vercel.app/",
    stack: ["CSS Animation", "JavaScript"]
  },
  {
    title: "Drum Kit",
    category: "javascript",
    description:
      "Maps keyboard keys and clicks to drum sounds for an interactive music UI exercise.",
    repo: "https://github.com/Akshitam11/drum_kit",
    livelink: "https://drum-kit-alpha-one.vercel.app/",
    stack: ["JavaScript", "Audio"]
  },
  {
    title: "Fetch Post",
    category: "api",
    description:
      "Fetches a single post from JSONPlaceholder based on user input and renders the result.",
    repo: "https://github.com/Akshitam11/fetch_post",
    livelink: "https://fetch-post-phi.vercel.app/",
    stack: ["Fetch API", "Validation"]
  },
  {
    title: "Fetch Post Comments",
    category: "api",
    description:
      "Retrieves and displays comment data for a given post ID using the JSONPlaceholder API.",
    repo: "https://github.com/Akshitam11/fetch_postcomment",
    livelink: "https://fetch-postcomment.vercel.app/",
    stack: ["Fetch API", "Rendering Lists"]
  },
  {
    title: "Dropdown Menu",
    category: "ui",
    description:
      "Creates a hover-based navigation menu with nested course links and submenu behavior.",
    repo: "https://github.com/Akshitam11/Dropdown",
    livelink: "https://dropdown-gules-one.vercel.app/",
    stack: ["HTML", "CSS"]
  },
  {
    title: "Hamburger Menu",
    category: "ui",
    description:
      "Builds an animated hamburger icon that transitions into a close state on click.",
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
  return tags
    .map((tag) => `<span class="project-tag">${tag}</span>`)
    .join("");
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
          <p>${project.summary}</p>
          <div class="project-tags">${createTagList(project.tags)}</div>
          <div class="project-notes">
            ${project.highlights.map((note) => `<p>${note}</p>`).join("")}
          </div>
          <div class="project-links">
            <a class="project-link" href="${project.repo}" target="_blank" rel="noreferrer">View Repository</a>
            <a class="project-link" href="${project.livelink}" target="_blank" rel="noreferrer">View Live Website</a>
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
            <a class="project-link" href="${project.repo}" target="_blank" rel="noreferrer">Repository</a>
            <a class="project-link" href="${project.livelink}" target="_blank" rel="noreferrer">Live Website</a>
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
