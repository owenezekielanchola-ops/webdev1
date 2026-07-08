const navItems = [
    { id: "dashboard", label: "Dashboard", icon: "icon-grid" },
    { id: "plots", label: "Plots", icon: "icon-plot" },
    { id: "members", label: "Members", icon: "icon-members" },
    { id: "waitlist", label: "Waitlist", icon: "icon-waitlist" }
]

const pages = {
    dashboard: () => `
    <h1>Dashboard</h1>
  `,
    plots: () => `
    <h1>Plots</h1>
  `,
    members: () => `
    <h1>Members</h1>
  `,
    waitlist: () => `
    <h1>Waitlist</h1>
  `
};


let currentPage = "dashboard";

const renderNav = () => {
    const navUl = document.querySelector(".sidebar nav ul");
    // console.log(navUI);
    // let links = "";
    // navItems.forEach(menu => {
    //     links += `
    //         <li>
    //             <a href="#" class="${menu.id == currentPage ? "active" : ""}">
    //                 <svg class="icon">
    //                     <use href="#${menu.icon}"/>
    //                 </svg>
    //             ${menu.label}
    //             </a>
    //         </li>
    //     `;        
    // });

    navUl.innerHTML = navItems.map(menu => `
        <li>
            <a href="#" data-page="${menu.id}" class="${menu.id == currentPage ? "active" : ""}">
                <svg class="icon">
                    <use  href="#${menu.icon}"/>
                </svg>
            ${menu.label}
            </a>
        </li>
    `).join("")


    navUl.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // to stope jumping to the top
            navigateTo(link.dataset.page); // todo
        })
    });
} 

const navigateTo = (pageId) => {
    currentPage = pageId;
    renderCurrentPage();
    renderNav();
}

const renderCurrentPage = () => {
    // currentPage = dashboard
    // pages["dashboard"]{} -> pages.dashboard()
    document.getElementById("content").innerHTML = pages[currentPage]();
    
}

navigateTo(currentPage);