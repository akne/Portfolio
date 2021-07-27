const projectTabs = document.getElementById("project-tabs");
let tabPos = { left: 0, x: 0 }
let dragging = false;

const startDrag = function(e) {
    tabPos = { left: projectTabs.scrollLeft, x: e.clientX }
    dragging = true;
}

const dragTab = function(e) {
    if (dragging) {
        const dx = e.clientX - tabPos.x;
        projectTabs.scrollLeft = tabPos.left - dx;
    }
}

const stopDrag = function(e) {
    dragging = false;
}

projectTabs.addEventListener("mousedown", startDrag);
projectTabs.addEventListener("mouseleave", stopDrag);
projectTabs.addEventListener("mouseup", stopDrag);
projectTabs.addEventListener("mousemove", dragTab);

function switchProject(e, name) {
    let tabs = document.getElementsByClassName("ptab");
    let content = document.getElementsByClassName("project");
    for (let i=0; i < content.length; i++) {
        content[i].style.display = "none";
    }
    for (let i=0; i < tabs.length; i++) {
        tabs[i].className = tabs[i].className.replace("activeTab", "");
    }
    document.getElementById(name).style.display = "block";
    e.currentTarget.className += " activeTab";
}