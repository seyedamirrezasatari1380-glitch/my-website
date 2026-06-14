// منوی همبرگری
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const backdrop = document.getElementById("backdrop");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
    backdrop.classList.toggle("active");
});

backdrop.addEventListener("click", () => {
    menu.classList.remove("active");
    hamburger.classList.remove("active");
    backdrop.classList.remove("active");
});

document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
        hamburger.classList.remove("active");
        backdrop.classList.remove("active");
    });
});

// Swiper هدر
new Swiper(".heroSwiper", {
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 1 },
        1024: { slidesPerView: 1 }
    }
});

// جستجوی خطبه
// const searchInput = document.getElementById("searchKhotbeh");

// if (searchInput) {
//     searchInput.addEventListener("keyup", () => {
//         const value = searchInput.value.toLowerCase();
//         document.querySelectorAll(".khotbeh-item").forEach(item => {
//             item.style.display = item.innerText.toLowerCase().includes(value) ? "flex" : "none";
//         });
//     });
// }

// // آرشیو خطبه‌ها
// const sermons = [
//     {
//         id: 1,
//         title: "نماز جمعه ۲۸ اردیبهشت ۱۴۰۵",
//         quran: { video: "#", audio: "#", text: "#" },
//         pishkhotbeh: { video: "#", audio: "#", text: "#" },
//         khotbeh1: { video: "#", audio: "#", text: "#" },
//         khotbeh2: { video: "#", audio: "#", text: "#" }
//     },
//     {
//         id: 2,
//         title: "نماز جمعه ۲۱ اردیبهشت ۱۴۰۵",
//         quran: { video: "#", audio: "#", text: "#" },
//         pishkhotbeh: { video: "#", audio: "#", text: "#" },
//         khotbeh1: { video: "#", audio: "#", text: "#" },
//         khotbeh2: { video: "#", audio: "#", text: "#" }
//     }
// ];

// const list = document.getElementById("khotbehList");

// function renderSermons() {
//     list.innerHTML = "";
//     sermons.forEach(sermon => {
//         list.innerHTML += `
//             <div class="khotbeh-item">
//                 <div>
//                     <h3>${sermon.title}</h3>
//                 </div>
//                 <button class="show-sermon" onclick="openSermon(${sermon.id})">
//                     مشاهده
//                 </button>
//             </div>
//         `;
//     });
// }

// renderSermons();

// function createSection(title, data) {
//     return `
//         <div class="section-box">
//             <h3>${title}</h3>
//             <div class="action-links">
//                 <a href="${data.video}">🎥 ویدئو</a>
//                 <a href="${data.audio}">🎧 صوت</a>
//                 <a href="${data.text}">📄 متن</a>
//             </div>
//         </div>
//     `;
// }

// function openSermon(id) {
//     const sermon = sermons.find(item => item.id === id);
//     const modalBody = document.getElementById("modalBody");

//     modalBody.innerHTML = `
//         <h2>${sermon.title}</h2>
//         <div class="sections-grid">
//             ${createSection("📖 تلاوت قرآن", sermon.quran)}
//             ${createSection("🎙 پیش خطبه", sermon.pishkhotbeh)}
//             ${createSection("🕌 خطبه اول", sermon.khotbeh1)}
//             ${createSection("🕌 خطبه دوم", sermon.khotbeh2)}
//         </div>
//     `;

//     document.getElementById("sermonModal").classList.add("active");
// }

// // بستن مودال
// document.getElementById("closeModal").addEventListener("click", () => {
//     document.getElementById("sermonModal").classList.remove("active");
// });

// window.addEventListener("click", (e) => {
//     const modal = document.getElementById("sermonModal");
//     if (e.target === modal) {
//         modal.classList.remove("active");
//     }
// });