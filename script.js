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

const stopDrag = function() {
    dragging = false;
}

projectTabs.addEventListener("pointerdown", startDrag);
projectTabs.addEventListener("pointerleave", stopDrag);
projectTabs.addEventListener("pointerup", stopDrag);
projectTabs.addEventListener("pointermove", dragTab);

function switchProject(name) {
    let tabs = document.getElementsByClassName("ptab");
    let content = document.getElementsByClassName("project");
    for (let i=0; i < content.length; i++) {
        content[i].style.display = "none";
    }
    for (let i=0; i < tabs.length; i++) {
        tabs[i].className = tabs[i].className.replace("activeTab", "");
    }
    document.getElementById(name).style.display = "flex";
    document.getElementById(name + "-tab").className += " activeTab";
}