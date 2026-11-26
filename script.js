lucide.createIcons();

const portfolioData = {
  projects: [
    {
      title: 'Coming soon',
      desc: '-',
      btnText: 'Details',
      img: 'coming-soon.png'
    },
    {
      title: 'Coming soon',
      desc: '-',
      btnText: 'Details',
      img: 'coming-soon.png'
    },
    {
      title: 'Coming soon',
      desc: '-',
      btnText: 'Details',
      img: 'coming-soon.png'
    },
    {
      title: 'Coming soon',
      desc: '-',
      btnText: 'Details',
      img: 'coming-soon.png'
    },
    {
      title: 'Coming soon',
      desc: '-',
      btnText: 'Details',
      img: 'coming-soon.png'
    },
    {
      title: 'Coming soon',
      desc: '-',
      btnText: 'Details',
      img: 'coming-soon.png'
    }
  ],
  certificates: [
    {
      title: 'Coming soon',
      desc: '-',
      btnText: 'View Certificate',
      img: 'coming-soon.png'
    },
    {
      title: 'Coming soon',
      desc: '-',
      btnText: 'View Certificate',
      img: 'coming-soon.png'
    },
    {
      title: 'Coming soon',
      desc: '-',
      btnText: 'View Certificate',
      img: 'coming-soon.png'
    },
    {
      title: 'Coming soon',
      desc: '-',
      btnText: 'View Certificate',
      img: 'coming-soon.png'
    },
    {
      title: 'Coming soon',
      desc: '-',
      btnText: 'View Certificate',
      img: 'coming-soon.png'
    },
    {
      title: 'Coming soon',
      desc: '-',
      btnText: 'View Certificate',
      img: 'coming-soon.png'
    }
  ],
  awards: [
    {
      title: 'Coming soon',
      desc: '-',
      btnText: 'View Certificate',
      img: 'coming-soon.png'
    },
    {
      title: 'Coming soon',
      desc: '-',
      btnText: 'View Certificate',
      img: 'coming-soon.png'
    },
    {
      title: 'Coming soon',
      desc: '-',
      btnText: 'View Certificate',
      img: 'coming-soon.png'
    },
    {
      title: 'Coming soon',
      desc: 'M-',
      btnText: 'View Certificate',
      img: 'coming-soon.png'
    },
    {
      title: 'Coming soon',
      desc: '-',
      btnText: 'View Certificate',
      img: 'coming-soon.png'
    }
  ]
};

let currentTab = 'projects';

function renderCarousel(category) {
  const carousel = document.getElementById('portfolioCarousel');
  const items = portfolioData[category] || [];

  carousel.innerHTML = items.map((item) => `
    <div class="min-w-[285px] sm:min-w-[340px] max-w-[340px] bg-white rounded-3xl border border-slate-200/90 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group">
      <div class="relative h-48 overflow-hidden bg-slate-950">
        <img 
          src="${item.img}" 
          onerror="this.src='https://placehold.co/600x400/000000/ffffff?text=COMING+SOON'" 
          alt="${item.title}" 
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div class="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h4 class="text-lg font-extrabold text-slate-900 line-clamp-1">${item.title}</h4>
          <p class="text-xs sm:text-sm text-slate-500 mt-2 line-clamp-3 leading-relaxed">${item.desc}</p>
        </div>
        <div class="mt-5">
          <button onclick="openModal('${item.title.replace(/'/g, "\\'")}', '${item.img}', '${item.desc.replace(/'/g, "\\'")}')" class="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-xs font-semibold shadow-md shadow-blue-600/20 transition-all">
            <span>${item.btnText}</span>
            <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');

  carousel.scrollTo({ left: 0, behavior: 'smooth' });
  lucide.createIcons();
}

function switchPortfolioTab(category) {
  currentTab = category;
  document.querySelectorAll('.portfolio-tab').forEach(btn => {
    btn.classList.remove('bg-blue-600', 'text-white', 'shadow-xl', 'shadow-blue-600/25');
    btn.classList.add('bg-white', 'text-slate-700', 'border', 'border-slate-200');
  });

  const activeBtn = document.getElementById(`tab-${category}`);
  if (activeBtn) {
    activeBtn.classList.remove('bg-white', 'text-slate-700', 'border', 'border-slate-200');
    activeBtn.classList.add('bg-blue-600', 'text-white', 'shadow-xl', 'shadow-blue-600/25');
  }

  renderCarousel(category);
}

function goToPortfolioTab(category) {
  switchPortfolioTab(category);
  document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
}

function scrollCarousel(direction) {
  const carousel = document.getElementById('portfolioCarousel');
  const scrollAmount = 360;
  carousel.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}

renderCarousel('projects');

const xrayBox = document.getElementById('xrayBox');
const spidermanLayer = document.getElementById('spidermanLayer');
const xrayRing = document.getElementById('xrayRing');

function updateXrayPosition(clientX, clientY) {
  const rect = xrayBox.getBoundingClientRect();
  const x = clientX - rect.left;
  const y = clientY - rect.top;

  xrayBox.classList.add('active');
  spidermanLayer.style.clipPath = `circle(75px at ${x}px ${y}px)`;
  xrayRing.style.left = `${x}px`;
  xrayRing.style.top = `${y}px`;
}

function resetXrayPosition() {
  xrayBox.classList.remove('active');
  spidermanLayer.style.clipPath = `circle(0px at 50% 50%)`;
}

xrayBox.addEventListener('mousemove', (e) => {
  updateXrayPosition(e.clientX, e.clientY);
});
xrayBox.addEventListener('mouseleave', resetXrayPosition);

xrayBox.addEventListener('touchstart', (e) => {
  if (e.touches.length > 0) {
    updateXrayPosition(e.touches[0].clientX, e.touches[0].clientY);
  }
}, { passive: true });
xrayBox.addEventListener('touchmove', (e) => {
  if (e.touches.length > 0) {
    updateXrayPosition(e.touches[0].clientX, e.touches[0].clientY);
  }
}, { passive: true });
xrayBox.addEventListener('touchend', resetXrayPosition);

const navLinks = document.querySelectorAll('.nav-link');
const ghostMascot = document.getElementById('ghostMascot');
const sections = ['home', 'about', 'portfolio', 'contact'];

function moveGhostToLink(linkEl) {
  if (!linkEl || !ghostMascot) return;
  const linkCenter = linkEl.offsetLeft + (linkEl.offsetWidth / 2) - 18;
  ghostMascot.style.left = `${linkCenter}px`;
}

function setActiveNav(sectionId) {
  navLinks.forEach(link => {
    if (link.dataset.nav === sectionId) {
      link.classList.add('active', 'bg-blue-600', 'text-white', 'shadow-lg', 'shadow-blue-600/30', 'font-semibold');
      link.classList.remove('text-slate-300', 'font-medium');
      moveGhostToLink(link);
    } else {
      link.classList.remove('active', 'bg-blue-600', 'text-white', 'shadow-lg', 'shadow-blue-600/30', 'font-semibold');
      link.classList.add('text-slate-300', 'font-medium');
    }
  });
}

window.addEventListener('resize', () => {
  const activeLink = document.querySelector('.nav-link.active');
  moveGhostToLink(activeLink);
});

window.addEventListener('load', () => {
  const activeLink = document.querySelector('.nav-link.active');
  moveGhostToLink(activeLink);
});

const heroBg = document.getElementById('heroBg');
const heroText = document.getElementById('heroText');
const giantPortfolioText = document.getElementById('giantPortfolioText');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const winHeight = window.innerHeight;

  if (scrollY < winHeight * 1.3) {
    heroBg.style.transform = `scale(1.06) translateY(${scrollY * 0.28}px)`;
    heroText.style.transform = `translateY(${scrollY * 0.45}px)`;
    heroText.style.opacity = Math.max(0, 1 - scrollY / (winHeight * 0.85));
  }

  if (giantPortfolioText) {
    const rect = giantPortfolioText.getBoundingClientRect();
    if (rect.top < winHeight && rect.bottom > 0) {
      const progress = 1 - Math.abs(rect.top - winHeight * 0.35) / winHeight;
      const scaleVal = 0.88 + Math.max(0, Math.min(0.18, progress * 0.18));
      giantPortfolioText.style.transform = `scale(${scaleVal})`;
    }
  }

  let currentSection = 'home';
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.offsetTop - winHeight * 0.35;
      if (scrollY >= top) {
        currentSection = id;
      }
    }
  });
  setActiveNav(currentSection);
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

function openModal(title, imgSrc, desc) {
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalImage').src = imgSrc;
  document.getElementById('modalDesc').textContent = desc;
  const modal = document.getElementById('detailModal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeModal() {
  const modal = document.getElementById('detailModal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

document.getElementById('detailModal').addEventListener('click', (e) => {
  if (e.target.id === 'detailModal') closeModal();
});

let toastTimeout;
function showToast(msg) {
  const toast = document.getElementById('toastBox');
  document.getElementById('toastMessage').textContent = msg;
  toast.classList.remove('translate-y-24', 'opacity-0');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.add('translate-y-24', 'opacity-0');
  }, 3200);
}

document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('contactName').value.trim();
  showToast(`Terima kasih ${name}! Pesan kamu telah terkirim.`);
  e.target.reset();
});

let totalComments = 87;
let uploadedAvatarDataUrl = null;

document.getElementById('commentAvatarInput').addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    document.getElementById('fileNameLabel').textContent = file.name;
    const reader = new FileReader();
    reader.onload = (event) => {
      uploadedAvatarDataUrl = event.target.result;
    };
    reader.readAsDataURL(file);
  }
});

document.getElementById('commentForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const author = document.getElementById('commentAuthor').value.trim();
  const text = document.getElementById('commentText').value.trim();
  if (!author || !text) return;

  totalComments += 1;
  document.getElementById('commentCount').textContent = `(${totalComments})`;

  const initial = author.charAt(0).toUpperCase();
  const avatarHTML = uploadedAvatarDataUrl
    ? `<img src="${uploadedAvatarDataUrl}" alt="${author}" class="w-10 h-10 rounded-full object-cover shrink-0 border border-slate-200" />`
    : `<div class="w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-sm flex items-center justify-center shrink-0">${initial}</div>`;

  const today = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

  const newCommentHTML = `
    <div class="flex items-start justify-between gap-3 p-4 rounded-2xl bg-blue-50/60 border border-blue-200/80 animate-[fadeIn_0.3s_ease-out]">
      <div class="flex items-start gap-3.5">
        ${avatarHTML}
        <div>
          <h4 class="font-bold text-sm text-slate-900">${author}</h4>
          <p class="text-sm text-slate-700 mt-0.5">${text}</p>
        </div>
      </div>
      <span class="text-[11px] text-blue-600 font-medium shrink-0">${today}</span>
    </div>
  `;

  document.getElementById('commentsList').insertAdjacentHTML('afterbegin', newCommentHTML);

  e.target.reset();
  uploadedAvatarDataUrl = null;
  document.getElementById('fileNameLabel').textContent = 'Choose Profile Photo';
  showToast('Komentar kamu berhasil ditambahkan!');
});