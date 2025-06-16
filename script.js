gsap.registerPlugin(ScrollTrigger);

// Navnar header



const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close-menu');
const overlay = document.getElementById('menu-overlay');

function openMenu() {
  mobileMenu.classList.remove('translate-x-full');
  mobileMenu.classList.add('translate-x-0');
  overlay.classList.remove('hidden');
}

function closeMobileMenu() {
  mobileMenu.classList.add('translate-x-full');
  mobileMenu.classList.remove('translate-x-0');
  overlay.classList.add('hidden');
}

burger.addEventListener('click', openMenu);
closeMenu.addEventListener('click', closeMobileMenu);
overlay.addEventListener('click', closeMobileMenu);

// Ferme au clic sur un lien
document.querySelectorAll('.nav-link-mobile').forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});




document.addEventListener("DOMContentLoaded", () => {
        gsap.registerPlugin(ScrollTrigger);
      
        // Hero heading
        gsap.from("#hero h1", {
          opacity: 0,
          y: 60,
          duration: 1.2,
          ease: "power4.out",
          delay: 0.3
        });
      
        // Hero paragraph
        gsap.from("#hero p", {
          opacity: 0,
          y: 40,
          duration: 1,
          ease: "power3.out",
          delay: 0.6
        });
      
        // ✅ Hero button (avec présence forcée AVANT l’animation)
        const btn = document.getElementById("hero-btn");
        if (btn) {
          btn.style.opacity = "1";        // on force l’opacité visible
          btn.style.visibility = "visible";
          btn.style.transform = "translateY(0px)";
      
          gsap.from(btn, {
            opacity: 0,
            y: 30,
            duration: 1,
            ease: "power2.out",
            delay: 0.9
          });
        }
      });



// Animation de la section Preuves

      
// Section promesse

      gsap.from("#promise h2", {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.3
      });
      
      gsap.from("#promise p", {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
        delay: 0.6,
        stagger: 0.3
      });

// Animation Objection
gsap.from("#objections .grid > div", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#objections",
          start: "top 85%",
        }
      });

      gsap.registerPlugin(ScrollTrigger);

      // Résolution complète : animation propre et stable
      gsap.utils.toArray(".pack-card").forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power2.out",
          delay: i * 0.2, // décalage progressif
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none none"
          }
        });
      });

      gsap.utils.toArray(".why-item").forEach((el, i) => {
        gsap.fromTo(el, 
          {opacity: 0, y: 40}, 
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: i * 0.3 + 0.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // témoignage

      const slider = document.getElementById("testimonial-slider");
      const btnPrev = document.getElementById("prev-testimonial");
      const btnNext = document.getElementById("next-testimonial");
      
      let scrollAmount = 0;
      const cardWidth = slider.querySelector(".testimonial-card").offsetWidth + 32; // 32 = space-x-8 padding
      
      btnNext.addEventListener("click", () => {
        if (scrollAmount < slider.scrollWidth - slider.clientWidth) {
          scrollAmount += cardWidth;
        } else {
          scrollAmount = 0;
        }
        slider.scrollTo({
          left: scrollAmount,
          behavior: "smooth"
        });
      });
      
      btnPrev.addEventListener("click", () => {
        if (scrollAmount > 0) {
          scrollAmount -= cardWidth;
        } else {
          scrollAmount = slider.scrollWidth - slider.clientWidth;
        }
        slider.scrollTo({
          left: scrollAmount,
          behavior: "smooth"
        });
      });
      
      // Auto-scroll every 6 seconds
      setInterval(() => {
        if (scrollAmount < slider.scrollWidth - slider.clientWidth) {
          scrollAmount += cardWidth;
        } else {
          scrollAmount = 0;
        }
        slider.scrollTo({
          left: scrollAmount,
          behavior: "smooth"
        });
      }, 6000);

      
// FAQ

document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    
    // Fermer tous
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));

    // Ouvrir celui cliqué seulement s’il était fermé
    if (!isOpen) {
      item.classList.add('open');
    }
  });
});

// Compteur 
function startCountdown(deadline) {
  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = deadline - now;

    if (distance < 0) {
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minutesEl.textContent = '00';
      secondsEl.textContent = '00';
      clearInterval(interval);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = days.toString().padStart(2, '0');
    hoursEl.textContent = hours.toString().padStart(2, '0');
    minutesEl.textContent = minutes.toString().padStart(2, '0');
    secondsEl.textContent = seconds.toString().padStart(2, '0');
  }

  updateCountdown();
  const interval = setInterval(updateCountdown, 1000);
}

// Définis ta date limite ici (ex: 3 jours à partir de maintenant)
const deadlineDate = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000);
startCountdown(deadlineDate);


// réalisations 

// GSAP Scroll animation des cartes
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('#gallery .card').forEach(card => {
  gsap.from(card, {
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: card,
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });
});

// Filtres
const filterButtons = document.querySelectorAll('#filters .filter-btn');
const cards = document.querySelectorAll('#gallery .card');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Reset active btn
    filterButtons.forEach(b => b.classList.remove('active', 'bg-[#df5102]', 'text-black'));
    // Set active style
    btn.classList.add('active', 'bg-[#df5102]', 'text-black');

    const filter = btn.textContent.toLowerCase();

    cards.forEach(card => {
      const type = card.dataset.type.toLowerCase();
      const sector = card.dataset.sector.toLowerCase();

      if(filter === 'tous' || filter === type || filter === sector) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Modal lightbox
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modal-content');
const modalClose = document.getElementById('modal-close');

document.querySelectorAll('.btn-see-more').forEach(btn => {
  btn.addEventListener('click', e => {
    const card = e.target.closest('.card');
    const type = card.dataset.type;
    let mediaSrc;

    if(type === 'video') {
      mediaSrc = card.querySelector('video').getAttribute('src');
      modalContent.innerHTML = `<video src="${mediaSrc}" controls autoplay class="w-full h-full object-contain"></video>`;
    } else if(type === 'image') {
      mediaSrc = card.querySelector('img').getAttribute('src');
      modalContent.innerHTML = `<img src="${mediaSrc}" alt="Création" class="w-full h-full object-contain" />`;
    }

    modal.classList.remove('hidden');
    modal.classList.add('flex');
  });
});

modalClose.addEventListener('click', () => {
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  modalContent.innerHTML = '';
});

// Fermer modal au clic en dehors du contenu
modal.addEventListener('click', e => {
  if(e.target === modal) {
    modalClose.click();
  }
});

// Fermer modal avec touche Echap
document.addEventListener('keydown', e => {
  if(e.key === 'Escape' && !modal.classList.contains('hidden')) {
    modalClose.click();
  }
});

// Notification
const notifBox = document.getElementById("floating-notif");
const notifText = document.getElementById("notif-text");

const notifications = [
  " 97 personnes sont sur cette page en ce moment",
  " Sarah vient de réserver un appel stratégique",
  " Jean a commandé le pack Starter",
  " L'offre Booster est presque épuisée",
  " Thomas vient de prendre le pack Performance",
  "3 créas vendues en moins de 30 min",
  " Julie consulte l'offre Créa Only"
];

function showNotification() {
  const message = notifications[Math.floor(Math.random() * notifications.length)];
  notifText.textContent = message;

  notifBox.classList.remove("opacity-0", "pointer-events-none");
  notifBox.classList.add("opacity-100");

  setTimeout(() => {
    notifBox.classList.add("opacity-0");
    notifBox.classList.remove("opacity-100");
  }, 5000);
}

// Répéter toutes les 10 secondes
setInterval(showNotification, 10000);

// Lancer une première après délai
setTimeout(showNotification, 3000);

//Case studie


const swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  on: {
    slideChangeTransitionEnd: () => {
      startCounters();
    }
  }
});

function startCounters() {
  const counters = document.querySelectorAll(".swiper-slide-active .counter");

  counters.forEach(el => {
    const target = parseFloat(el.getAttribute("data-target"));
    const suffix = el.getAttribute("data-suffix") || "";
    const decimal = el.getAttribute("data-decimal") === "true";

    const options = {
      duration: 2,
      useGrouping: true,
      separator: ' ',
      decimalPlaces: decimal ? 1 : 0,
      suffix: suffix
    };

    const countUp = new CountUp.CountUp(el, target, options);
    if (!countUp.error) {
      countUp.start();
    }
  });
}

// Démarrage initial
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(startCounters, 800); // petit délai pour que swiper initialise
});


gsap.from("#navbar", {
  y: -100,
  opacity: 0,
  duration: 1,
  ease: "power4.out",
  delay: 0.2
});


window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;

  document.getElementById("scroll-progress").style.width = `${scrollPercent}%`;
});


const toggleBtn = document.getElementById("dark-toggle");
const html = document.documentElement;

const enableDarkMode = () => {
  html.classList.add("dark");
  localStorage.setItem("theme", "dark");
};

const disableDarkMode = () => {
  html.classList.remove("dark");
  localStorage.setItem("theme", "light");
};

// Toggle button event
toggleBtn.addEventListener("click", () => {
  if (html.classList.contains("dark")) {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
});

// On load
if (localStorage.getItem("theme") === "dark") {
  enableDarkMode();
}

gsap.from("#footer", {
  opacity: 0,
  y: 100,
  duration: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: "#footer",
    start: "top 90%",
  },
});


// Affichage du bouton si scroll vers le bas
// Scroll vers le bas au clic
document.getElementById("scrollToFooter").addEventListener("click", () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth"
  });
});

// Affichage intelligent du bouton
window.addEventListener("scroll", () => {
  const btn = document.getElementById("scrollToFooter");
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  const isAtBottom = scrollY + windowHeight >= documentHeight - 100;

  if (!isAtBottom) {
    btn.classList.remove("hidden");
  } else {
    btn.classList.add("hidden");
  }
});

// Animation GSAP si tu veux garder
gsap.from("#scrollToFooter", {
  scale: 0,
  opacity: 0,
  duration: 0.6,
  ease: "back.out(1.7)",
  scrollTrigger: {
    trigger: "#scrollToFooter",
    toggleActions: "play none none reset",
    start: "top bottom"
  }
});


// section résultat

  const voirBtns = document.querySelectorAll('.voir-resultat-btn');
  const modale = document.getElementById('modalImage');
  const modalImg = document.getElementById('modalImgContent');
  const closeModal = document.getElementById('closeModal');

  voirBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const imgSrc = btn.getAttribute('data-img');
      modalImg.src = imgSrc;
      modale.classList.remove('hidden');
    });
  });

  closeModal.addEventListener('click', () => {
    modale.classList.add('hidden');
    modalImg.src = "";
  });

  // Fermer le modal quand on clique à l’extérieur de l’image
  modale.addEventListener('click', (e) => {
    if (e.target === modal) {
      modale.classList.add('hidden');
      modalImg.src = "";
    }
  });


