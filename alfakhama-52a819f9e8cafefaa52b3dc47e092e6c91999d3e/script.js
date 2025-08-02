const carsData = [
  { ser: 1, brand: "فورد", model: "فيوجن", color: "ابيض", year: 2019 },
  { ser: 2, brand: "هونداي", model: "I10", color: "فيراني", year: 2019 },
  { ser: 3, brand: "هونداي", model: "اكسنت", color: "كحلي", year: 2020 },
  { ser: 4, brand: "هونداي", model: "النترا", color: "اسود", year: 2020 },
  { ser: 5, brand: "هونداي", model: "النترا", color: "فيراني", year: 2020 },
  { ser: 6, brand: "هونداي", model: "النترا", color: "اسود", year: 2020 },
  { ser: 7, brand: "هونداي", model: "النترا", color: "احمر", year: 2020 },
  { ser: 8, brand: "هونداي", model: "النترا", color: "فيراني", year: 2020 },
  { ser: 9, brand: "هونداي", model: "اكسنت", color: "احمر", year: 2020 },
  { ser: 10, brand: "هونداي", model: "النترا", color: "احمر", year: 2020 },
  { ser: 11, brand: "هونداي", model: "النترا", color: "سلفر ميتالك", year: 2020 },
  { ser: 12, brand: "هونداي", model: "H1", color: "اسود", year: 2020 },
  { ser: 13, brand: "كيا", model: "سيراتو", color: "فيراني", year: 2022 },
  { ser: 14, brand: "كيا", model: "سيلتوس", color: "خمري", year: 2022 },
  { ser: 15, brand: "كيا", model: "سونيت", color: "اسود", year: 2022 },
  { ser: 16, brand: "كيا", model: "سيلتوس", color: "اسود", year: 2022 },
  { ser: 17, brand: "كيا", model: "بيجاس", color: "فيراني", year: 2022 },
  { ser: 18, brand: "كيا", model: "سيلتوس", color: "خمري", year: 2022 },
  { ser: 19, brand: "كيا", model: "سيلتوس", color: "خمري", year: 2022 },
  { ser: 20, brand: "كيا", model: "سونيت", color: "لؤلؤي", year: 2022 },
  { ser: 21, brand: "كيا", model: "سيراتو", color: "فيراني", year: 2022 },
  { ser: 22, brand: "كيا", model: "سونيت", color: "اسود", year: 2022 },
  { ser: 23, brand: "تويوتا", model: "كامري", color: "فيراني ميتالك", year: 2022 },
  { ser: 24, brand: "شفروليه", model: "كابتيفا", color: "اسود", year: 2023 },
  { ser: 25, brand: "تويوتا", model: "كامري", color: "فيراني ميتالك", year: 2023 },
  { ser: 26, brand: "تويوتا", model: "كامري", color: "فيراني ميتالك", year: 2023 },
  { ser: 27, brand: "تويوتا", model: "كامري", color: "سلفر ميتالك", year: 2023 },
  { ser: 28, brand: "تويوتا", model: "كامري", color: "سلفر ميتالك", year: 2023 },
  { ser: 29, brand: "تويوتا", model: "كامري", color: "سلفر ميتالك", year: 2023 },
  { ser: 30, brand: "شفروليه", model: "كابتيفا", color: "اسود", year: 2023 },
  { ser: 31, brand: "شفروليه", model: "كابتيفا", color: "فيراني", year: 2023 },
  { ser: 32, brand: "هونداي", model: "H1", color: "بني", year: 2019 },
  { ser: 33, brand: "هونداي", model: "H1", color: "فيراني", year: 2019 },
  { ser: 34, brand: "تويوتا", model: "كورولا", color: "سلفر ميتالك", year: 2023 },
  { ser: 35, brand: "تويوتا", model: "كورولا", color: "بحري ميتالك", year: 2023 },
  { ser: 36, brand: "تويوتا", model: "كورولا", color: "بحري ميتالك", year: 2023 },
  { ser: 37, brand: "تويوتا", model: "كورولا", color: "بحري ميتالك", year: 2023 },
  { ser: 38, brand: "تويوتا", model: "كورولا", color: "بحري ميتالك", year: 2023 },
  { ser: 39, brand: "تويوتا", model: "كورولا", color: "بحري ميتالك", year: 2023 },
  { ser: 40, brand: "كيا", model: "بيكانتو", color: "فضي", year: 2023 },
  { ser: 41, brand: "كيا", model: "بيكانتو", color: "اسود", year: 2023 },
  { ser: 42, brand: "كيا", model: "بيكانتو", color: "فضي", year: 2023 },
  { ser: 43, brand: "كيا", model: "بيكانتو", color: "اسود", year: 2023 },
  { ser: 44, brand: "هونداي", model: "النترا", color: "فيراني", year: 2020 },
  { ser: 45, brand: "هونداي", model: "النترا", color: "فيراني", year: 2025 },
  { ser: 46, brand: "هونداي", model: "H1", color: "اسود", year: 2019 },
  { ser: 47, brand: "هونداي", model: "sonata", color: "كحلي", year: 2022 },
  { ser: 48, brand: "هونداي", model: "sonata", color: "احمر", year: 2022 },
  { ser: 49, brand: "هونداي", model: "sonata", color: "فيراني", year: 2022 }
];

const labels = {
  ar: {
    carType: "نوع السيارة",
    model: "الموديل",
    from: "من",
    to: "إلى",
    search: "بحث",
    language: "اللغة:",
    details: "تفاصيل",
    whatsapp: "تواصل واتساب",
    color: "اللون",
    seats: "عدد المقاعد",
    year: "الموديل",
    doors: "عدد الأبواب",
    price: "السعر اليومي",
    business: "استخدام تنفيذي / أعمال",
    economy: "استخدام اقتصادي / يومي",
    family: "استخدام عائلي",
    group: "استخدام جماعي / سياحي",
    suv: "سيارات SUV / طرق خارجية",
    eco: "سيارات هجينة / صديقة للبيئة",
    alertSelect: "يرجى تحديد نوع السيارة والتواريخ",
    alertMinDays: "أقل مدة للحجز هي 3 أيام",
    noCars: "لا توجد سيارات متاحة من هذا النوع.",
    availableCategories: "فئات السيارات المتوفرة",
    economyCategory: "اقتصادية",
    economyDesc: "سيارات منخفضة التكاليف ومناسبة للاستخدام اليومي.",
    luxuryCategory: "فاخرة",
    luxuryDesc: "راحة وأناقة وأداء ممتاز في سيارة واحدة.",
    suvCategory: "دفع رباعي",
    suvDesc: "مثالية للطرق الجبلية والعائلية.",
    sedanCategory: "سيدان",
    sedanDesc: "عملية وأنيقة للمدينة والرحلات.",
    vanCategory: "فان",
    vanDesc: "مناسبة لنقل عدد أكبر من الركاب.",
    hybridCategory: "هجينة",
    hybridDesc: "سيارات صديقة للبيئة واقتصادية في الوقود.",
    ourServices: "خدماتنا",
    serviceEconomy: "تأجير سيارات اقتصادية",
    serviceEconomyDesc: "مناسب للرحلات اليومية بتكلفة معقولة",
    serviceLuxury: "سيارات فاخرة",
    serviceLuxuryDesc: "تجربة قيادة استثنائية بأقصى درجات الراحة",
    serviceAirport: "توصيل للمطار",
    serviceAirportDesc: "استلم سيارتك بسهولة من المطار"
  },
  en: {
    carType: "Car Type",
    model: "Model",
    from: "From",
    to: "To",
    search: "Search",
    language: "Language:",
    details: "Details",
    whatsapp: "WhatsApp Contact",
    color: "Color",
    seats: "Seats",
    year: "Year",
    doors: "Doors",
    price: "Daily Price",
    business: "Business / Executive Use",
    economy: "Economy / Budget Use",
    family: "Family / Daily Use",
    group: "Group / Tourist Transport",
    suv: "SUV / Outdoor Use",
    eco: "Hybrid / Eco-Friendly",
    alertSelect: "Please select car type and dates",
    alertMinDays: "Minimum booking is 3 days",
    noCars: "No cars available for this type.",
    availableCategories: "Available Car Categories",
    economyCategory: "Economy",
    economyDesc: "Low-cost cars suitable for daily use.",
    luxuryCategory: "Luxury",
    luxuryDesc: "Comfort, elegance, and excellent performance in one car.",
    suvCategory: "SUV",
    suvDesc: "Ideal for mountain roads and families.",
    sedanCategory: "Sedan",
    sedanDesc: "Practical and elegant for city and trips.",
    vanCategory: "Van",
    vanDesc: "Suitable for transporting more passengers.",
    hybridCategory: "Hybrid",
    hybridDesc: "Eco-friendly and fuel-efficient cars.",
    ourServices: "Our Services",
    serviceEconomy: "Economy Car Rental",
    serviceEconomyDesc: "Suitable for daily trips at an affordable cost",
    serviceLuxury: "Luxury Cars",
    serviceLuxuryDesc: "Exceptional driving experience with maximum comfort",
    serviceAirport: "Airport Delivery",
    serviceAirportDesc: "Pick up your car easily from the airport"
  }
};

let currentLang = 'en';

function translatePage(lang) {
  // Update all data-key elements
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if (labels[lang][key]) {
      el.textContent = labels[lang][key];
    }
  });

  // Update select placeholders
  const carType = document.getElementById("car-type");
  if (carType) carType.options[0].text = labels[lang].carType;

  const carModel = document.getElementById("car-model");
  if (carModel) carModel.options[0].text = labels[lang].model;

  // Update input placeholders
  const fromDate = document.getElementById("from-date");
  if (fromDate) fromDate.placeholder = labels[lang].from;

  const toDate = document.getElementById("to-date");
  if (toDate) toDate.placeholder = labels[lang].to;

  // Update search button
  const searchBtn = document.querySelector(".search-box button");
  if (searchBtn) searchBtn.innerText = labels[lang].search;

  // Update car category section titles (if any)
  document.querySelectorAll('.car-category h3').forEach(h3 => {
    const key = h3.getAttribute('data-key');
    if (labels[lang][key]) h3.textContent = labels[lang][key];
  });

  // Change text direction and alignment
  document.body.dir = (lang === 'ar') ? 'rtl' : 'ltr';
  document.body.style.textAlign = (lang === 'ar') ? 'right' : 'left';
}

// Attach click to button
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("translateBtn").addEventListener("click", () => {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    translatePage(currentLang);
  });
});




// ✅ Date Range
window.onload = () => {
  const today = new Date();
  const max = new Date();
  max.setDate(today.getDate() + 31);
  const format = d => d.toISOString().split("T")[0];

  document.getElementById("from-date").min = format(today);
  document.getElementById("from-date").max = format(max);
  document.getElementById("to-date").min = format(today);
  document.getElementById("to-date").max = format(max);
};

// ✅ Display All Cars by Selected Type
function showCarsByType() {
  const brand = document.getElementById("car-type").value;
  const from = document.getElementById("from-date").value;
  const to = document.getElementById("to-date").value;

  const catSection = document.getElementById("car-categories-section");
  // Show categories if search is cleared
  if (!brand && !from && !to) {
    if (catSection) {
      catSection.classList.remove("fade-out");
      catSection.classList.add("fade-in");
      setTimeout(() => { catSection.style.display = ""; }, 500);
    }
    document.getElementById("car-results").innerHTML = "";
    return;
  }

  if (!brand || !from || !to) {
    alert(labels[currentLang].alertSelect);
    return;
  }

  // 👇 Calculate how many days
  const fromDate = new Date(from);
  const toDate = new Date(to);
  const rentalDays = Math.floor((toDate - fromDate) / (1000 * 60 * 60 * 24)) + 1;

  // 👇 Validate days
  if (rentalDays < 3) {
    alert(labels[currentLang].alertMinDays);
    return;
  }

  const results = document.getElementById("car-results");
  results.innerHTML = "";

  const filtered = carsData.filter(c => c.brand === brand);
  if (filtered.length === 0) {
    results.innerHTML = `<p>${labels[currentLang].noCars}</p>`;
    return;
  }

  // Hide car categories section when searching
  if (catSection) {
    catSection.classList.remove("fade-in");
    catSection.classList.add("fade-out");
    setTimeout(() => { catSection.style.display = "none"; }, 500);
  }

  filtered.forEach(car => {
    // Example: add seats (default value for demo)
    const seats = car.seats || 5;
    const div = document.createElement("div");
    div.className = "model-tab";
    div.innerHTML = `
      <img src="Cars_Updated_Pictures/Ser_${car.ser}.jpg" alt="${car.model}" />
      <h4>${car.brand} ${car.model}</h4>
      <div class="car-details">
        <p class="info-small"><strong>الموديل:</strong> ${car.year}</p>
        <p class="info-small"><strong>اللون:</strong> ${car.color}</p>
        <p class="info-small"><strong>عدد المقاعد:</strong> ${seats}</p>
      </div>
      <div class="card-actions">
        <button onclick="window.location.href='cars.html?ser=${car.ser}&from=${from}&to=${to}'">تفاصيل</button>
        <a href="https://wa.me/962780889953" target="_blank" class="btn btn-success d-flex align-items-center" style="padding: 8px 16px; font-size: 1.08rem;">
          <i class="bi bi-whatsapp me-2" style="font-size: 1.2rem;"></i>
        </a>
      </div>
    `;
    results.appendChild(div);
  });

}
// ✅ other functions like showCarsByType(), switchLang(), etc...

// ✅ Update cart count icon on page load
document.addEventListener("DOMContentLoaded", () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const count = cart.length;
  const span = document.getElementById("cart-count");
  if (span) span.textContent = count;
});

//----------------------------------------------------
function groupCarsByUse(carsData) {
  const categories = {
    "business": [],
    "economy": [],
    "family": [],
    "group": [],
    "suv": [],
    "eco": []
  };

  carsData.forEach(car => {
    const model = car.model.toLowerCase();

    if (["i10", "اكسنت", "بيجاس", "بيكانتو"].includes(model)) {
      categories.economy.push(car);
    }

    if (["النترا", "سيراتو", "كورولا"].includes(model)) {
      categories.family.push(car);
    }

    if (["فيوجن", "كامري", "sonata", "سوناتا"].includes(model)) {
      categories.business.push(car);
    }

    if (["h1"].includes(model)) {
      categories.group.push(car);
    }

    if (["سيلتوس", "سونيت", "كابتيفا"].includes(model)) {
      categories.suv.push(car);
    }

    if (["بريوس", "نييرو", "ايونيك"].includes(model)) {
      categories.eco.push(car);
    }
  });

  return categories;
}

function renderGroupedCars(grouped, lang = 'ar') {
  const container = document.getElementById("grouped-cars");
  container.innerHTML = ""; // clear

  const labels = {
    ar: {
      business: "استخدام تنفيذي / أعمال",
      economy: "استخدام اقتصادي / يومي",
      family: "استخدام عائلي",
      group: "استخدام جماعي / سياحي",
      suv: "سيارات SUV / طرق خارجية",
      eco: "سيارات هجينة / صديقة للبيئة"
    },
    en: {
      business: "Business / Executive Use",
      economy: "Economy / Budget Use",
      family: "Family / Daily Use",
      group: "Group / Tourist Transport",
      suv: "SUV / Outdoor Use",
      eco: "Hybrid / Eco-Friendly"
    }
  };

  Object.keys(grouped).forEach(key => {
    const cars = grouped[key];
    if (cars.length === 0) return;

    const section = document.createElement("div");
    section.className = "car-category";

    const title = document.createElement("h3");
    title.textContent = labels[lang][key];
    section.appendChild(title);

    cars.forEach(car => {
      const div = document.createElement("div");
      div.className = "model-tab";
      div.innerHTML = `
        <h4>${car.brand} - ${car.model}</h4>
        <img src="Cars_Updated_Pictures/Ser_${car.ser}.jpg" alt="${car.model}" />
        <p>${car.color} - ${car.year}</p>
        <a href="https://wa.me/962780889953" target="_blank" class="btn btn-success d-flex align-items-center mt-2">
          <i class="bi bi-whatsapp me-2" style="font-size: 1.2rem;"></i>
          تواصل واتساب
        </a>
      `;
      section.appendChild(div);
    });

    container.appendChild(section);
  });
}

// ✅ Example usage
const groupedCars = groupCarsByUse(carsData);
renderGroupedCars(groupedCars, currentLang);
