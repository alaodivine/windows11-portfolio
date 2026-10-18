/**
 * DATABASE ARRAY OBJECT - EASY PROJECTS COMPILATION
 * Add or delete an object bracket within this array list to manage your portfolio site output instantly.
 */
const portfolioProjects = [
    {
        title: "Windows 11 Portfolio OS",
        description: "A fully interactive operating system simulation built to showcase my frontend applications.",
        image: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=500", 
        techUsed: ["HTML5", "CSS3", "Bootstrap 5", "Vanilla JS"],
        liveLink: "https://windows11-portfolio-lemon.vercel.app/", 
        githubLink: "https://github.com/alaodivine/windows11-portfolio"
    },
    {
        title: "MTN Nigeria Clone",
        description: "A responsive frontend replication of the MTN web portal, focusing on clean layout and UI components.",
        image: "imgi_8_ZigiEmotions07-optimize.gif", 
        techUsed: ["HTML5", "CSS3", "Bootstrap 5"],
        liveLink: "https://alaodivine.github.io/mtn-clone/",
        githubLink: "https://github.com/alaodivine/mtn-clone"
    },
    {
        title: "Printivo Clone",
        description: "A high-fidelity replica of the Printivo storefront platform, featuring structured product grids and ordering UI.",
        image: "download (5).svg", // Pulls the authentic Printivo logo
        techUsed: ["HTML5", "CSS3", "Bootstrap 5"], 
        liveLink: " https://alaodivine.github.io/Printivo-clone/", 
        githubLink: "https://github.com/alaodivine/Printivo-clone"
    }
];

/**
 * DYNAMIC PROJECT INJECTION TEMPLATE FUNCTION
 * Loops through arrays, generates functional Bootstrap Cards dynamically, and renders them to the view element.
 */
function renderProjectsToDesktop() {
    const container = document.getElementById("projects-container");
    
    // Clear out hardcoded filler skeletons
    if (container) {
        container.innerHTML = "";

        // Run dynamic mapping loop execution
        portfolioProjects.forEach((project) => {
            
            // Generate technology badge pill designs programmatically
            let techBadges = "";
            project.techUsed.forEach(tech => {
                techBadges += `<span class="badge bg-secondary me-1">${tech}</span>`;
            });

            // Construct HTML Card Blocks layout variables
            const projectCardMarkup = `
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="card h-100 shadow-sm border-0">
                        <img src="${project.image}" class="card-img-top" alt="${project.title}" style="height: 120px; object-fit: cover;">
                        <div class="card-body p-2 d-flex flex-column justify-content-between">
                            <div>
                                <h6 class="card-title fw-bold mb-1">${project.title}</h6>
                                <p class="card-text text-muted small" style="font-size: 11px; line-height: 1.3;">${project.description}</p>
                            </div>
                            <div class="mt-2">
                                <div class="mb-2">${techBadges}</div>
                                <div class="d-flex gap-2">
                                    <a href="${project.liveLink}" class="btn btn-sm btn-primary py-0 px-2 small" style="font-size: 11px;">Live</a>
                                    <a href="${project.githubLink}" class="btn btn-sm btn-outline-dark py-0 px-2 small" style="font-size: 11px;"><i class="bi bi-github"></i> Code</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            // Inject the generated project template into our container element
            container.innerHTML += projectCardMarkup;
        });
    }
}

// Ensure execution loops run smoothly immediately when the document is parsing
document.addEventListener("DOMContentLoaded", renderProjectsToDesktop);
