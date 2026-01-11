const DATA = {
    featured: [
      { title: "Forza Horizon 5 Mobile", rating: 7.8, img: "https://picsum.photos/seed/rr/700/700" },
      { title: "Assetto Corsa Mobile", rating: 7.9, img: "https://picsum.photos/seed/roof/700/700" },
      { title: "Euro Truck Simulator 2", rating: 8.9, img: "https://picsum.photos/seed/beam/700/700" }
    ],
    apps: [
      {
        title: "Forza Horizon 5 Mobile",
        dev: "Spike trolor",
        desc: "Open-world racing experience set in stunning environments with high-speed cars, dynamic weather, and realistic driving physics optimized for mobile.",
        size: "2 GB",
        rating: 6.5,
        img: "https://picsum.photos/seed/silk/800/800"
      },
      {
        title: "Assetto Corsa Mobile",
        dev: "Chunsoft",
        desc: "Realistic racing simulator focused on authentic car handling, precision driving, and immersive track-based motorsport gameplay.",
        size: "1.2 GB",
        rating: 5.5,
        img: "https://picsum.photos/seed/rocket/800/800"
      },
      {
        title: "Euro Truck Simulator 2",
        dev: "Santa Monica Studio",
        desc: "Drive powerful trucks across Europe, deliver cargo between cities, and enjoy a detailed trucking simulation with long-distance routes.",
        size: "850 MB",
        rating: 6.8,
        img: "https://picsum.photos/seed/gow/800/800"
      },
      {
        title: "Minecraft",
        dev: "Ubisoft",
        desc: "Explore, build, and survive in an infinite block-based world where creativity and adventure come together with endless possibilities.",
        size: "960 MB",
        rating: 7.0,
        img: "https://picsum.photos/seed/wd2/800/800"
      },
      {
        title: "GTA 5 Mobile",
        dev: "Game Developer",
        desc: "Open-world crime action game featuring missions, free roaming, intense gameplay, and a vast city to explore on mobile.",
        size: "1.1 GB",
        rating: 7.5,
        img: "https://picsum.photos/seed/ets/800/800"
      },
      {
        title: "Naruto Ultimate Ninja Storm 4",
        dev: "Rockstar Games",
        desc: "Fast-paced anime fighting game featuring cinematic battles, iconic characters, and powerful ninja techniques from the Naruto universe.",
        size: "1.4 GB",
        rating: 9.1,
        img: "https://picsum.photos/seed/rdr/800/800"
      },
      {
        title: "BeamNG.drive Mobile",
        dev: "CD Projekt Red",
        desc: "Advanced vehicle physics simulation with realistic crashes, soft-body damage, and open environments for driving experimentation.",
        size: "2.5 GB",
        rating: 8.2,
        img: "https://picsum.photos/seed/cp2077/800/800"
      },
      {
        title: "Fifa Street Mod",
        dev: "FromSoftware",
        desc: "Street-style football gameplay focused on freestyle skills, tricks, and fast-paced matches in urban environments.",
        size: "3.1 GB",
        rating: 9.6,
        img: "https://picsum.photos/seed/elden/800/800"
      },
      {
        title: "Jump Force",
        dev: "Sucker Punch",
        desc: "Crossover fighting game bringing together legendary anime characters in intense battles with cinematic special attacks.",
        size: "1.8 GB",
        rating: 9.4,
        img: "https://picsum.photos/seed/ghost/800/800"
      },
      {
        title: "Rematch mobile",
        dev: "Insomniac Games",
        desc: "Competitive action-focused football experience designed for quick matches, fast reactions, and skill-based gameplay.",
        size: "2.1 GB",
        rating: 9.2,
        img: "https://picsum.photos/seed/spidey/800/800"
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

// Icons components
const StarIcon = `<svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`;
const CheckIcon = `<svg class="check-badge" width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="#4f7cff"/><path d="M8 12L11 15L16 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const AndroidIcon = `<svg width="12" height="12" viewBox="0 0 24 24" fill="rgba(255,255,255,0.6)"><path d="M17.523 15.341c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1zm-11.046 0c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1zm11.411-4.992l1.65-2.857a.26.26 0 00-.095-.355.263.263 0 00-.356.095l-1.674 2.899C15.827 9.277 13.992 8.659 12 8.659s-3.827.618-5.413 1.472L4.913 7.232a.262.262 0 00-.356-.095.26.26 0 00-.095.355l1.65 2.857C3.414 11.961 1.5 14.509 1.5 17.433h21c0-2.924-1.914-5.472-4.612-7.084z"/></svg>`;
const AppleIcon = `<svg width="12" height="12" viewBox="0 0 24 24" fill="rgba(255,255,255,0.6)"><path d="M17.073 21.318c-.712.42-1.424.84-2.136 1.26a1.41 1.41 0 01-1.896-.212c-.443-.443-.886-.886-1.329-1.329l-1.258-1.258a1.41 1.41 0 00-1.994 0l-1.258 1.258c-.443.443-.886-.886-1.329 1.329a1.41 1.41 0 01-1.896.212c-.712-.42-1.424-.84-2.136-1.26a1.41 1.41 0 01-.212-1.896l1.258-1.258c.443-.443.886-.886 1.329-1.329V8.046a1.41 1.41 0 01.212-1.896l1.258-1.258a1.41 1.41 0 011.896-.212c.712.42 1.424.84 2.136 1.26a1.41 1.41 0 011.329 1.329V17.073a1.41 1.41 0 01-.212 1.896zM12 1a11 11 0 1011 11A11 11 0 0012 1z"/></svg>`;
const DownloadIcon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`;

// Render Logic for Featured Carousel
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
    
    // Seamless loop: duplicate nodes once
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
    let isPausedByButton = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const startAutoSlide = () => {
        if (autoSlideInterval) clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(slideNext, INTERVAL_MS);
    };

    const stopAutoSlide = () => {
        clearInterval(autoSlideInterval);
        autoSlideInterval = null;
    };

    const slideNext = () => {
        if (isPausedByButton) return;
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

    const toggleBtn = document.getElementById('toggle-scroll');
    if (toggleBtn) {
        toggleBtn.textContent = isPausedByButton ? 'Play' : 'Pause';
        toggleBtn.addEventListener('click', () => {
            isPausedByButton = !isPausedByButton;
            toggleBtn.textContent = isPausedByButton ? 'Play' : 'Pause';
            if (isPausedByButton) stopAutoSlide();
            else startAutoSlide();
        });
    }

    if (!isPausedByButton) startAutoSlide();
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

// Reusable Modal Logic
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

// Event Delegation for Download Buttons
document.addEventListener('click', (e) => {
    const downloadBtn = e.target.closest('.download-btn');
    if (downloadBtn) {
        const card = downloadBtn.closest('.app-card');
        const appTitle = card.dataset.appTitle;
        const app = DATA.apps.find(a => a.title === appTitle);
        if (app) window.openModal(app);
    }
});

const closeX = document.getElementById('modal-close-x');
if (closeX) closeX.addEventListener('click', window.closeModal);

const ctaBtn = document.getElementById('modal-cta');
if (ctaBtn) ctaBtn.addEventListener('click', window.closeModal);

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') window.closeModal();
});

const overlay = document.getElementById('modal-overlay');
if (overlay) {
    overlay.addEventListener('click', (e) => {
        if (e.target.id === 'modal-overlay') window.closeModal();
    });
}

// Search Logic
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

// Promotional Countdown
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

// Rotating Live Toasts
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
        
        setTimeout(() => {
            container.classList.remove('active');
        }, 4000);
    }

    setInterval(showToast, 11000);
    setTimeout(showToast, 2500);
}

// Initial Load
document.addEventListener('DOMContentLoaded', () => {
    renderFeatured();
    renderApps();
    startCountdown();
    startToasts();
});