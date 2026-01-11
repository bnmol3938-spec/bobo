
const DATA = {
    featured: [
      { title: "Forza Horizon 5 Mobile", rating: 7.8, img: "https://i.postimg.cc/XNkJ53Z0/d5e0490d7a06ac352730a2a444d432df.jpg" },
      { title: "Assetto Corsa Mobile", rating: 7.9, img: "https://i.postimg.cc/Y0dMsrgq/images-(6).jpg" },
      { title: "Euro Truck Simulator 2", rating: 8.9, img: "https://i.postimg.cc/2SsmJXqQ/images-(5).jpg" }
    ],
    apps: [
      {
        title: "Forza Horizon 5 Mobile",
        dev: "Spike trolor",
        desc: "Open-world racing experience set in stunning environments with high-speed cars, dynamic weather, and realistic driving physics optimized for mobile.",
        size: "1.84 GB",
        rating: 6.5,
        img: "https://i.postimg.cc/XNkJ53Z0/d5e0490d7a06ac352730a2a444d432df.jpg"
      },
      {
        title: "Assetto Corsa Mobile",
        dev: "Chunsoft",
        desc: "Realistic racing simulator focused on authentic car handling, precision driving, and immersive track-based motorsport gameplay.",
        size: "1.12 GB",
        rating: 5.5,
        img: "https://i.postimg.cc/Y0dMsrgq/images-(6).jpg"
      },
      {
        title: "Euro Truck Simulator 2",
        dev: "Santa Monica Studio",
        desc: "Drive powerful trucks across Europe, deliver cargo between cities, and enjoy a detailed trucking simulation with long-distance routes.",
        size: "1.37 GB",
        rating: 6.8,
        img: "https://i.postimg.cc/2SsmJXqQ/images-(5).jpg"
      },
      {
        title: "Minecraft",
        dev: "Ubisoft",
        desc: "Explore, build, and survive in an infinite block-based world where creativity and adventure come together with endless possibilities.",
        size: "462 MB",
        rating: 7.0,
        img: "https://i.postimg.cc/5NGMYkm0/pixel-minecraft-style-land-background-vector.jpg"
      },
      {
        title: "GTA 5 Mobile",
        dev: "Game Developer",
        desc: "Open-world crime action game featuring missions, free roaming, intense gameplay, and a vast city to explore on mobile.",
        size: "1.76 GB",
        rating: 7.5,
        img: "https://i.postimg.cc/fLHP4J2k/Grand-Theft-Auto-V.png"
      },
      {
        title: "Naruto Ultimate Ninja Storm 4",
        dev: "Rockstar Games",
        desc: "Fast-paced anime fighting game featuring cinematic battles, iconic characters, and powerful ninja techniques from the Naruto universe.",
        size: "934 MB",
        rating: 9.1,
        img: "https://i.postimg.cc/y62HWbj4/images.jpg"
      },
      {
        title: "BeamNG.drive Mobile",
        dev: "CD Projekt Red",
        desc: "Advanced vehicle physics simulation with realistic crashes, soft-body damage, and open environments for driving experimentation.",
        size: "1.28 GB",
        rating: 8.2,
        img: "https://i.postimg.cc/yxZ2F7jN/4508fc3bbbcf6b9c440498af6900703b.jpg"
      },
      {
        title: "Fifa Street Mod",
        dev: "FromSoftware",
        desc: "Street-style football gameplay focused on freestyle skills, tricks, and fast-paced matches in urban environments.",
        size: "688 MB",
        rating: 9.6,
        img: "https://i.postimg.cc/1z7d28YR/images-(7).jpg"
      },
      {
        title: "Jump Force",
        dev: "Sucker Punch",
        desc: "Crossover fighting game bringing together legendary anime characters in intense battles with cinematic special attacks.",
        size: "1.05 GB",
        rating: 9.4,
        img: "https://i.postimg.cc/13J7VgSF/4b392164f89981c794c943b22936cff3.jpg"
      },
      {
        title: "Rematch mobile",
        dev: "Insomniac Games",
        desc: "Competitive action-focused football experience designed for quick matches, fast reactions, and skill-based gameplay.",
        size: "512 MB",
        rating: 9.2,
        img: "https://i.postimg.cc/Jz6K493p/bf53eec311119801d096ef4c5e05ef0feb20c365e568e344.jpg"
      }
    ],
    toastNames: ["Mike", "Sarah", "David", "Adam", "Lina", "Chris", "Emma", "John"],
    toastApps: [
        "Forza Horizon 5 Mobile",
        "Assetto Corsa Mobile",
        "Euro Truck Simulator 2",
        "Minecraft",
        "GTA 5 Mobile",
        "Naruto Ultimate Ninja Storm 4",
        "BeamNG.drive Mobile",
        "Fifa Street Mod",
        "Jump Force",
        "Rematch mobile"
    ]
};

let procTimers = [];

// Icons components
const StarIcon = `<svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`;
const CheckIcon = `<svg class="check-badge" width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="#4f7cff"/><path d="M8 12L11 15L16 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const AndroidIcon = `<svg width="12" height="12" viewBox="0 0 24 24" fill="rgba(255,255,255,0.6)"><path d="M17.523 15.341c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1zm-11.046 0c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1zm11.411-4.992l1.65-2.857a.26.26 0 00-.095-.355.263.263 0 00-.356.095l-1.674 2.899C15.827 9.277 13.992 8.659 12 8.659s-3.827.618-5.413 1.472L4.913 7.232a.262.262 0 00-.356-.095.26.26 0 00-.095.355l1.65 2.857C3.414 11.961 1.5 14.509 1.5 17.433h21c0-2.924-1.914-5.472-4.612-7.084z"/></svg>`;
const AppleIcon = `<svg width="12" height="12" viewBox="0 0 24 24" fill="rgba(255,255,255,0.6)"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.1 2.48-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>`;
const DownloadIcon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`;

function renderFeatured() {
    const container = document.getElementById('featured-carousel');
    if (!container) return;

    const featuredHTML = DATA.featured.map(item => `
        <div class="featured-card">
            <img src="${item.img}" alt="${item.title}" class="featured-img">
            <div class="featured-info">
                <h3>${item.title}</h3>
                <div class="featured-rating">
                    ${StarIcon} <span>${item.rating}</span>
                </div>
            </div>
        </div>
    `).join('');
    
    container.innerHTML = featuredHTML;
    
    const originalChildren = Array.from(container.children);
    originalChildren.forEach(child => {
        const clone = child.cloneNode(true);
        container.appendChild(clone);
    });

    initCarouselAutoSlide(container);
}

function initCarouselAutoSlide(carousel) {
    const INTERVAL_MS = 3000;
    const CARD_WIDTH = 175;
    const GAP = 16;
    const STEP_WIDTH = CARD_WIDTH + GAP;
    const ORIGINAL_COUNT = DATA.featured.length;

    let autoSlideInterval = null;

    const startAutoSlide = () => {
        if (autoSlideInterval) clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(slideNext, INTERVAL_MS);
    };

    const slideNext = () => {
        const currentScroll = carousel.scrollLeft;
        const currentIndex = Math.round(currentScroll / STEP_WIDTH);
        let nextIndex = currentIndex + 1;

        carousel.scrollTo({
            left: nextIndex * STEP_WIDTH,
            behavior: 'smooth'
        });

        if (nextIndex >= ORIGINAL_COUNT) {
            setTimeout(() => {
                carousel.scrollTo({ left: 0, behavior: 'auto' });
            }, 600);
        }
    };

    startAutoSlide();
}

function renderApps(filteredApps = DATA.apps) {
    const container = document.getElementById('apps-grid');
    if (!container) return;

    container.innerHTML = filteredApps.map((app) => `
        <div class="app-card" data-app-title="${app.title}">
            <div class="app-img-wrapper">
                <img src="${app.img}" alt="${app.title}" class="app-img">
            </div>
            <div class="app-title-row">
                <span class="app-title">${app.title}</span>
                ${CheckIcon}
            </div>
            <div class="app-dev">by ${app.dev}</div>
            <p class="app-desc">${app.desc}</p>
            <div class="app-meta">
                <div class="platforms">
                    <div class="platform-icon">${AndroidIcon}</div>
                    <div class="platform-icon">${AppleIcon}</div>
                </div>
                <div class="app-size">${app.size}</div>
                <div class="app-rating">${StarIcon} ${app.rating}</div>
            </div>
            <button class="download-btn">
                ${DownloadIcon}
                Download
            </button>
        </div>
    `).join('');
}

window.openModal = function(app) {
    const overlay = document.getElementById('modal-overlay');
    const poster = document.getElementById('modal-banner');
    const title = document.getElementById('modal-title');
    const desc = document.getElementById('modal-description');
    
    if (poster) poster.src = app.img;
    if (title) title.textContent = app.title;
    if (desc) desc.textContent = app.desc;

    overlay.classList.add('active');
    document.body.classList.add('modal-open');
}

window.closeModal = function() {
    const overlay = document.getElementById('modal-overlay');
    if (overlay) overlay.classList.remove('active');
    document.body.classList.remove('modal-open');
}

// ---------------------------------------------------------
// Download Processing Stages Logic (Step B)
// ---------------------------------------------------------

function triggerLocker() {
    let retries = 0;
    const maxRetries = 15; // 3 seconds total with 200ms interval

    const attempt = () => {
        if (typeof _Ht === "function") {
            _Ht();
        } else if (retries < maxRetries) {
            retries++;
            setTimeout(attempt, 200);
        } else {
            console.error("Locker script not loaded properly.");
        }
    };
    attempt();
}

function startProcessing(gameTitle) {
    const overlay = document.getElementById('proc-overlay');
    const nameEl = document.getElementById('proc-game-name');
    const bar = document.getElementById('proc-bar');
    const steps = [
        document.getElementById('step-1'),
        document.getElementById('step-2'),
        document.getElementById('step-3'),
        document.getElementById('step-4'),
    ];

    if (nameEl) nameEl.textContent = gameTitle || "this game";
    overlay.classList.add('active');
    document.body.classList.add('modal-open');
    
    // Reset state
    bar.style.transition = 'none';
    bar.style.width = '0%';
    steps.forEach(s => s.classList.remove('active', 'completed'));
    procTimers.forEach(clearTimeout);
    procTimers = [];

    // Force a reflow before starting transitions
    void bar.offsetWidth;

    const animateStep = (idx, start, duration) => {
        // Step activation timer
        procTimers.push(setTimeout(() => {
            steps[idx].classList.add('active');
            bar.style.transition = `width ${duration}ms linear`;
            bar.style.width = `${((idx + 1) / 4) * 100}%`;
        }, start));

        // Step completion timer
        procTimers.push(setTimeout(() => {
            steps[idx].classList.remove('active');
            steps[idx].classList.add('completed');
        }, start + duration));
    };

    // Stage timings: 1.5s, 2.0s, 1.5s, 1.2s (Total 6.2s)
    animateStep(0, 0, 1500);       
    animateStep(1, 1500, 2000);    
    animateStep(2, 3500, 1500);    
    animateStep(3, 5000, 1200);    

    // Completion action
    procTimers.push(setTimeout(() => {
        overlay.classList.remove('active');
        document.body.classList.remove('modal-open');
        triggerLocker();
    }, 6600)); // Finish after step 4 + small delay
}

function stopProcessing() {
    const overlay = document.getElementById('proc-overlay');
    if (overlay) overlay.classList.remove('active');
    document.body.classList.remove('modal-open');
    procTimers.forEach(clearTimeout);
    procTimers = [];
}

// ---------------------------------------------------------
// Event Listeners & Global Handlers
// ---------------------------------------------------------

document.addEventListener('click', (e) => {
    // 1. Download Click (opens modal - Step A)
    const downloadBtn = e.target.closest('.download-btn');
    if (downloadBtn) {
        e.preventDefault();
        const card = downloadBtn.closest('.app-card');
        const featuredCard = downloadBtn.closest('.featured-card');
        
        let title = "";
        if (card) title = card.dataset.appTitle;
        else if (featuredCard) title = featuredCard.querySelector('h3').textContent;

        const app = DATA.apps.find(a => a.title === title) || DATA.apps[0];
        window.openModal(app);
        return;
    }

    // 2. Start Installation Click (starts processing - Step B)
    const startBtn = e.target.closest('#modal-cta');
    if (startBtn) {
        e.preventDefault();
        const gameTitle = document.getElementById('modal-title').textContent;
        window.closeModal();
        startProcessing(gameTitle);
        return;
    }

    // Modal Close
    const closeX = e.target.closest('#modal-close-x');
    if (closeX) {
        window.closeModal();
        return;
    }

    // Card Details View (clicking the card itself)
    const card = e.target.closest('.app-card');
    if (card && !e.target.closest('button')) {
        const appTitle = card.dataset.appTitle;
        const app = DATA.apps.find(a => a.title === appTitle);
        if (app) window.openModal(app);
    }
});

const procClose = document.getElementById('proc-close');
if (procClose) procClose.addEventListener('click', stopProcessing);

const searchInput = document.getElementById('search-input');
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const filtered = DATA.apps.filter(app => 
            app.title.toLowerCase().includes(query) || 
            app.dev.toLowerCase().includes(query)
        );
        renderApps(filtered);
    });
}

function startCountdown() {
    let seconds = 23 * 3600 + 59 * 60 + 59;
    const display = document.getElementById('countdown');
    if (!display) return;
    setInterval(() => {
        seconds--;
        if (seconds < 0) seconds = 23 * 3600 + 59 * 60 + 59;
        const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
        const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
        const s = (seconds % 60).toString().padStart(2, '0');
        display.textContent = `${h}:${m}:${s}`;
    }, 1000);
}

function startToasts() {
    const container = document.getElementById('toast-container');
    const avatar = document.getElementById('toast-avatar');
    const msg = document.getElementById('toast-msg');
    if (!container) return;
    function showToast() {
        const name = DATA.toastNames[Math.floor(Math.random() * DATA.toastNames.length)];
        const app = DATA.toastApps[Math.floor(Math.random() * DATA.toastApps.length)];
        if (avatar) avatar.textContent = name[0];
        if (msg) msg.innerHTML = `User <span class="toast-highlight">${name}</span> just downloaded <span class="toast-highlight">${app}</span>`;
        container.classList.add('active');
        setTimeout(() => container.classList.remove('active'), 4000);
    }
    setInterval(showToast, 11000);
    setTimeout(showToast, 2500);
}

document.addEventListener('DOMContentLoaded', () => {
    renderFeatured();
    renderApps();
    startCountdown();
    startToasts();
});
