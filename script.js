// Global focus layer manager variable tracker
let highestZIndex = 10;

document.addEventListener("DOMContentLoaded", function () {
    // Start standard clock tracking tickers loops instantly
    initializeClockEngine();
    
    // Enable dragging behavior on all existing OS Windows headers
    const windowsList = document.querySelectorAll(".os-window");
    windowsList.forEach(win => {
        makeWindowDraggable(win);
        // Bring window to top focus layer automatically upon user selection click click events
        win.addEventListener("mousedown", () => bringToFront(win));
    });
});

/**
 * 1. UNLOCK LOCKSCREEN LOGIC ENGINE
 */
function unlockDesktop() {
    const lockScreen = document.getElementById("lock-screen");
    const desktopEnv = document.getElementById("desktop-environment");
    
    // Slide up lock screen frame out of viewpoint boundaries
    lockScreen.style.transform = "translateY(-100%)";
    setTimeout(() => {
        lockScreen.classList.add("d-none");
        desktopEnv.classList.remove("d-none");
    }, 500);
}

/**
 * 2. LIVE CLOCK SYSTEM MANAGEMENT
 */
function initializeClockEngine() {
    function updateTimeElements() {
        const now = new Date();
        
        let hours = now.getHours();
        let minutes = now.getMinutes();
        minutes = minutes < 10 ? '0' + minutes : minutes;
        
        // Build readable layout formats string outputs
        const timeString = `${hours}:${minutes}`;
        const options = { weekday: 'long', month: 'short', day: 'numeric' };
        const dateString = now.toLocaleDateString("en-US", options);

        // Map updates elements array
        document.getElementById("lock-time").innerText = timeString;
        document.getElementById("lock-date").innerText = dateString;
        document.getElementById("taskbar-time").innerText = timeString;
        
        // Standard numerical short format target for structural taskbar layouts
        document.getElementById("taskbar-date").innerText = `${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()}`;
    }
    updateTimeElements();
    setInterval(updateTimeElements, 1000); // Execute system pulse checks safely every one-second frequency
}

/**
 * 3. CORE WINDOWS CONTROLS FUNCTIONALITIES (OPEN, CLOSE, MIN/MAX)
 */
function openWindow(windowId) {
    const targetWin = document.getElementById(windowId);
    if(targetWin) {
        targetWin.classList.remove("d-none");
        bringToFront(targetWin);
    }
}

function closeWindow(windowId) {
    const targetWin = document.getElementById(windowId);
    if(targetWin) targetWin.classList.add("d-none");
}

function minimizeWindow(windowId) {
    // To minimize, toggle the window display or link toggle indicators to the taskbar array
    closeWindow(windowId);
}

function maximizeWindow(windowId) {
    const targetWin = document.getElementById(windowId);
    if(!targetWin) return;

    if(targetWin.style.width === "100vw") {
        // Return window to normal sizes if already expanded
        targetWin.style.width = "500px";
        targetWin.style.height = "auto";
        targetWin.style.top = "15%";
        targetWin.style.left = "20%";
    } else {
        // Expand window over full active viewport spacing boundaries
        targetWin.style.width = "100vw";
        targetWin.style.height = "calc(100vh - 48px)";
        targetWin.style.top = "0";
        targetWin.style.left = "0";
    }
}

function bringToFront(windowElement) {
    highestZIndex++;
    windowElement.style.zIndex = highestZIndex;
}

function toggleStartMenu() {
    const startMenu = document.getElementById("start-menu");
    startMenu.classList.toggle("d-none");
}

/**
 * 4. NATIVE ABSOLUTE OS MOUSE DRAG COORDINATES LOGIC UTILITY
 */
function makeWindowDraggable(windowElement) {
    const header = windowElement.querySelector(".window-header");
    
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    
    if (header) {
        header.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // Capture initial cursor start points layout positions
        pos3 = e.clientX;
        pos4 = e.clientY;
        
        // Track motion capture updates events indicators
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        
        // Deduct new coordinate displacement bounds values metrics dynamically
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        
        // Adjust style layout metrics position updates explicitly using styling parameters updates handles
        windowElement.style.top = (windowElement.offsetTop - pos2) + "px";
        windowElement.style.left = (windowElement.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // Drop calculations events listeners trackers to reset tracking loops securely
        document.onmouseup = null;
        document.onmousemove = null;
    }
}