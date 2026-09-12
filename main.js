import "./style.css";

const whatsappUrl = "https://wa.me/919042286022";
const products = [
  {
    id: "spirulina",
    name: "Spirulina Powder",
    type: "Plant-based",
    forms: "Powder / Capsules / Tablets",
    color: "spirulina",
    image:
      "https://th.bing.com/th/id/OIP.Ol46XRboTvDa4UY7anAMOwHaE7?w=259&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
    tagline: "A vibrant, protein-rich blue-green algae.",
    nutrients:
      "Complete plant protein, iron, B vitamins, antioxidants and phycocyanin.",
    support: "Daily nutrition, active lifestyles and plant-based formulations.",
    uses: "Smoothies, functional foods, supplements and wellness blends.",
  },
  {
    id: "moringa",
    name: "Moringa Leaf Powder",
    type: "Plant-based",
    forms: "Powder / Capsules / Tea",
    color: "moringa",
    image:
      "https://th.bing.com/th/id/OIP.TicKG7SdpTF4x5vNYiYnXAHaE7?w=301&h=201&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
    tagline: "The naturally nutrient-dense leaf known as the tree of life.",
    nutrients:
      "Vitamins A, C and E, calcium, iron, potassium, protein and polyphenols.",
    support:
      "Everyday nourishment, balanced diets and wellness-focused products.",
    uses: "Teas, drink mixes, capsules, nutrition bars and food blends.",
  },
  {
    id: "wheatgrass",
    name: "WheatGrass Powder",
    type: "Plant-based",
    forms: "Powder / Juice Powder / Tablets",
    color: "wheatgrass",
    image:
      "https://th.bing.com/th/id/OIP.DitScBeh_2aT6qzLM51H2QHaFS?w=220&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
    tagline: "Fresh green nourishment, carefully dried and easy to use.",
    nutrients:
      "Chlorophyll, vitamins A, C and E, iron, magnesium and amino acids.",
    support: "Green nutrition routines and products made for daily vitality.",
    uses: "Juice powders, smoothies, capsules and functional beverages.",
  },
  {
    id: "beetroot",
    name: "Beetroot Powder",
    type: "Plant-based",
    forms: "Powder / Capsules",
    color: "beetroot",
    image:
      "https://th.bing.com/th/id/OIP.HJQDk6AKj_jh7w8RKwuYVAHaHZ?w=171&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
    tagline: "Earthy, naturally sweet colour and nutrition.",
    nutrients:
      "Dietary nitrates, folate, manganese, potassium and betalain antioxidants.",
    support:
      "Active lifestyle products, natural colour and pre-workout blends.",
    uses: "Beverages, bakery, nutrition mixes and natural colour applications.",
  },
  {
    id: "ashwagandha",
    name: "Ashwagandha Powder",
    type: "Herbal",
    forms: "Powder / Capsules / Extract",
    color: "ashwagandha",
    image:
      "https://th.bing.com/th/id/OIP.RJnoWndtTB3yu8TzXlI2ggHaE8?w=295&h=197&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
    tagline: "A traditional botanical for modern herbal formulations.",
    nutrients: "Withanolides and naturally occurring plant compounds.",
    support:
      "Traditional wellness routines, calm-focused blends and adaptogenic formulations.",
    uses: "Capsules, herbal teas, powders and private-label supplements.",
  },
  {
    id: "turmeric",
    name: "Turmeric Extract",
    type: "Herbal",
    forms: "Extract / Powder / Capsules",
    color: "turmeric",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2026/3/595078715/QK/XL/HC/57587261/turmeric-extract-1000x1000.png",
    tagline: "Warm, golden botanical character with a long heritage.",
    nutrients:
      "Curcuminoids, essential oils and naturally occurring antioxidants.",
    support:
      "Traditional wellness products and functional nutrition formulations.",
    uses: "Capsules, beverages, spice blends and herbal products.",
  },
  {
    id: "onion",
    name: "Onion Powder",
    type: "Dehydrated",
    forms: "Powder / Flakes / Granules",
    color: "onion",
    image:
      "https://th.bing.com/th/id/OIP.NHhHj2ZptkOYnXlTPo_3DgHaHa?w=217&h=217&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
    tagline: "Reliable savoury depth for food makers everywhere.",
    nutrients: "Naturally occurring quercetin, fibre and sulphur compounds.",
    support: "Convenient culinary flavour and consistent food manufacturing.",
    uses: "Seasonings, sauces, snacks, ready meals and spice blends.",
  },
  {
    id: "garlic",
    name: "Garlic Powder",
    type: "Dehydrated",
    forms: "Powder / Flakes / Granules",
    color: "garlic",
    image:
      "https://th.bing.com/th/id/OIP.8TTYpbfAiOv0qFjKajv7DAHaE8?w=279&h=186&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
    tagline: "A clean, dependable pantry essential in export-ready formats.",
    nutrients: "Allicin precursors, manganese, vitamin B6 and vitamin C.",
    support: "Everyday culinary use and convenient ingredient systems.",
    uses: "Seasonings, sauces, marinades, snacks and ready-to-cook foods.",
  },
];

const productCard = (product, index) =>
  `<article class="catalog-card"><div class="catalog-image ${product.color}" style="background-image: linear-gradient(180deg, transparent 30%, rgba(30, 61, 44, 0.66)), url('${product.image}')"><span>${String(index + 1).padStart(2, "0")}</span></div><div class="catalog-card-body"><div><span class="pill">${product.type}</span><h3>${product.name}</h3><p>${product.tagline}</p></div><button class="card-arrow product-trigger" data-product="${product.id}" aria-label="View ${product.name} details">↗</button><small>Available: ${product.forms}</small></div></article>`;
const header = (active) =>
  `<header class="site-header"><a class="brand" href="#top" aria-label="NATOG home"><span class="brand-mark">N</span><span>NATOG</span></a><nav class="desktop-nav" aria-label="Main navigation"><a class="${active === "home" ? "active" : ""}" href="#top">Home</a><a class="${active === "products" ? "active" : ""}" href="#products">Products</a><a class="${active === "about" ? "active" : ""}" href="#about">About us</a><a href="#contact">Contact</a></nav><a class="header-cta" href="${whatsappUrl}" target="_blank" rel="noreferrer">WhatsApp us <span>↗</span></a><button class="menu-toggle" type="button" aria-label="Toggle menu" aria-expanded="false"><span></span><span></span></button></header>`;
const footer = () =>
  `<footer class="site-footer"><a class="brand" href="#top"><span class="brand-mark">N</span><span>NATOG</span></a><p>Nature and Goods / Exported with care</p><div><a href="mailto:natogexports@gmail.com">natogexports@gmail.com</a><a href="tel:+919042286022">+91 90422 86022</a></div></footer>`;
const contactSection = () =>
  `<section class="contact section-pad" id="contact"><div class="section-label">04 / Let’s work together</div><div class="contact-layout"><div><h2>Bring something<br /><em>good</em> to life.</h2><div class="contact-details"><a href="mailto:natogexports@gmail.com">natogexports@gmail.com <span>↗</span></a><a href="tel:+919042286022">+91 90422 86022 <span>↗</span></a><a href="${whatsappUrl}" target="_blank" rel="noreferrer">Chat on WhatsApp <span>↗</span></a></div></div><form class="contact-form"><label>Your email address<input type="email" placeholder="you@yourcompany.com" required /></label><label>What can we help you with?<textarea rows="3" placeholder="Tell us a little about your needs"></textarea></label><button class="button button-dark" type="submit">Send enquiry <span>↗</span></button><p class="form-note">We usually reply within 1–2 business days.</p></form></div></section>`;

function homePage() {
  return `${header("home")}<main id="top"><section class="hero"><div class="hero-copy reveal"><p class="eyebrow"><span class="eyebrow-line"></span>Nature, made global</p><h1>Good things<br /><em>grow</em> here.</h1><p class="hero-intro">Thoughtfully sourced botanical ingredients for brands building a healthier, more natural world.</p><a class="button button-light" href="#products">Explore our products <span>↓</span></a></div><div class="hero-art reveal"><div class="hero-image"></div><div class="hero-stamp"><span>From source</span><strong>to shelf</strong><span class="stamp-star">✳</span></div><p class="hero-caption">01 / 04 <span>•</span> Botanical ingredients</p></div><div class="hero-scroll"><span>Scroll to discover</span><span class="scroll-line"></span></div></section><section class="intro section-pad"><div class="section-label">01 / Who we are</div><div class="intro-content"><h2>Nature has a way<br />of <em>knowing</em> what works.</h2><div class="intro-body"><p>NATOG is an Indian merchant export company connecting high-quality natural products with global markets. We source from trusted manufacturing partners for consistent quality, competitive pricing and dependable supply.</p><a class="text-link" href="#about">Meet NATOG <span>↗</span></a></div></div></section><section class="products section-pad" id="products"><div class="section-heading"><div class="earth-feature"><div class="section-label">02 / What we bring</div><div class="earth-feature-art"><span>✳</span><strong>Plant<br />to product</strong></div></div><h2>From the earth,<br /><em>with intention.</em></h2><div class="portfolio-callout"><span class="callout-count">08 / 03 / ∞</span><p>Eight natural ingredients.<br />Three product families.<br />One dependable partner.</p><a class="text-link" href="#products">Explore the portfolio <span>↗</span></a></div></div><div class="product-grid">${products.slice(0, 2).map(productCard).join("")}<article class="product-card product-note"><span class="note-mark">✳</span><h3>More good<br />things, growing.</h3><p>See the full catalogue with formats, nutrition and product applications.</p><a class="text-link" href="#products">View all products <span>↗</span></a></article></div></section><section class="standards" id="process"><div class="standards-image"></div><div class="standards-content"><div class="section-label">03 / Our promise</div><h2>Good for the<br /><em>ground.</em> Good for<br />your business.</h2><p>We believe better trade starts with better relationships. That means knowing where every ingredient comes from, treating every partner with care, and delivering a product you can feel confident putting your name on.</p><div class="stat-row"><div><strong>01</strong><span>Traceable<br />sourcing</span></div><div><strong>02</strong><span>Thoughtful<br />handling</span></div><div><strong>03</strong><span>Global<br />delivery</span></div></div></div></section>${contactSection()}</main>${footer()}`;
}
function productsPage() {
  return `${header("products")}<main id="top"><section class="page-hero"><div class="section-label">NATOG / Product portfolio</div><h1>Natural products,<br /><em>ready to travel.</em></h1><p>Export-ready ingredients for food, beverage, supplement and private-label brands. Choose a product to explore its nutrients, applications and available formats.</p></section><section class="catalog section-pad" id="products"><div class="catalog-toolbar"><div class="section-label">08 products / 03 categories</div><div class="filter-group"><button class="filter active" data-filter="All">All</button><button class="filter" data-filter="Plant-based">Plant-based</button><button class="filter" data-filter="Herbal">Herbal</button><button class="filter" data-filter="Dehydrated">Dehydrated</button></div></div><div class="catalog-grid">${products.map(productCard).join("")}</div><p class="medical-note"><strong>A note on wellness:</strong> Our product information is for general nutrition and educational purposes. These ingredients are not medicines and should not be presented as products that diagnose, treat or cure disease. Please consult a qualified healthcare professional for medical advice.</p></section>${contactSection()}</main>${footer()}<div class="product-modal" role="dialog" aria-modal="true" aria-label="Product details" aria-hidden="true" inert><div class="modal-panel"><button class="modal-close" type="button" aria-label="Close product details">×</button><div class="modal-visual"></div><div class="modal-content"><span class="pill modal-type"></span><h2 class="modal-title"></h2><p class="modal-tagline"></p><div class="detail-grid"><div><span class="detail-label">Nutrients & compounds</span><p class="modal-nutrients"></p></div><div><span class="detail-label">Best suited for</span><p class="modal-support"></p></div><div><span class="detail-label">Available formats</span><p class="modal-forms"></p></div><div><span class="detail-label">Product applications</span><p class="modal-uses"></p></div></div><p class="modal-disclaimer">Traditional or nutritional support is not a claim to prevent, treat or cure disease. Always seek professional medical guidance for health concerns.</p><a class="button button-dark modal-enquire" href="#contact">Enquire about this product <span>↗</span></a></div></div></div>`;
}
function aboutPage() {
  return `${header("about")}<main id="top"><section class="page-hero about-hero"><div class="section-label">NATOG / About us</div><h1>Trade with care.<br /><em>Grow with trust.</em></h1><p>NATOG is an Indian merchant export company dedicated to connecting high-quality natural products with global markets.</p></section><section class="about-intro section-pad"><div class="section-label">Who we are</div><div class="about-copy"><h2>Reliable sourcing for<br /><em>better products.</em></h2><p>We specialize in sourcing premium ingredients and agricultural products from trusted manufacturing partners, ensuring consistent quality, competitive pricing and dependable supply. From first enquiry to final delivery, we make international trade clearer and more dependable.</p></div></section><section class="vision-mission"><article><span class="about-number">01</span><h2>Our <em>vision</em></h2><p>To become a globally trusted export partner by delivering quality products and building long-term business relationships.</p></article><article><div class="globe-logo" aria-label="NATOG global nature mark"><span>N</span></div><span class="about-number">02</span><h2>Our <em>mission</em></h2><p>To provide reliable sourcing, competitive pricing and efficient export solutions while maintaining quality, integrity and customer satisfaction.</p></article></section><section class="service-section section-pad"><div class="section-label">Our service</div><div class="service-layout"><h2>From source<br />to <em>shipment.</em></h2><div class="service-list"><div><strong>01</strong><span>Product sourcing</span></div><div><strong>02</strong><span>Merchant export bulk supply</span></div><div><strong>03</strong><span>Private label (OEM)</span></div><div><strong>04</strong><span>Export documentation support</span></div><div><strong>05</strong><span>Logistics coordination</span></div></div></div></section><section class="quality-section"><div class="section-pad"><div class="section-label">Quality commitment</div><div class="quality-layout"><h2>Details matter.<br /><em>Every time.</em></h2><div class="quality-list"><div><span>01</span>Raw material selection</div><div><span>02</span>Lab testing</div><div><span>03</span>Hygienic processing</div><div><span>04</span>Consistent quality</div><div><span>05</span>Quality inspection</div></div></div></div></section>${contactSection()}</main>${footer()}`;
}
function render() {
  const route = window.location.hash.replace("#", "").split("?")[0];
  document.querySelector("#app").innerHTML =
    route === "products"
      ? productsPage()
      : route === "about"
        ? aboutPage()
        : homePage();
  window.scrollTo({ top: 0, behavior: "instant" });
  bindInteractions();
  if (["contact", "process", "story"].includes(route)) {
    document.getElementById(route)?.scrollIntoView({ behavior: "instant" });
  }
}
function bindInteractions() {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".desktop-nav");
  menuToggle?.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("nav-open", !expanded);
  });
  document
    .querySelectorAll(".desktop-nav a, .header-cta")
    .forEach((link) =>
      link.addEventListener("click", () => nav?.classList.remove("nav-open")),
    );
  document.querySelectorAll(".filter").forEach((button) =>
    button.addEventListener("click", () => {
      document
        .querySelectorAll(".filter")
        .forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      document.querySelectorAll(".catalog-card").forEach((card) => {
        card.hidden =
          button.dataset.filter !== "All" &&
          card.querySelector(".pill").textContent !== button.dataset.filter;
      });
    }),
  );
  document
    .querySelectorAll(".product-trigger")
    .forEach((button) =>
      button.addEventListener("click", () =>
        openProduct(button.dataset.product),
      ),
    );
  document
    .querySelector(".modal-close")
    ?.addEventListener("click", closeProduct);
  document
    .querySelector(".product-modal")
    ?.addEventListener("click", (event) => {
      if (event.target.classList.contains("product-modal")) closeProduct();
    });
  document.addEventListener("keydown", escapeHandler, { once: true });
  document
    .querySelector(".contact-form")
    ?.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.currentTarget;
      const email = form.querySelector('input[type="email"]').value.trim();
      const message = form.querySelector("textarea").value.trim();
      const subject = encodeURIComponent("NATOG export enquiry");
      const body = encodeURIComponent(
        `Hello NATOG,\n\n${message || "I would like to know more about your products and export services."}\n\nPlease reply to: ${email}`,
      );
      window.location.href = `mailto:natogexports@gmail.com?subject=${subject}&body=${body}`;
      const button = event.currentTarget.querySelector("button");
      button.innerHTML = "Opening email <span>↗</span>";
      button.disabled = true;
    });
}
function escapeHandler(event) {
  if (event.key === "Escape") closeProduct();
}
let lastFocusedProduct = null;

function openProduct(id) {
  const product = products.find((item) => item.id === id);
  if (!product) return;
  lastFocusedProduct = document.activeElement;
  const modal = document.querySelector(".product-modal");
  modal.querySelector(".modal-visual").className =
    `modal-visual ${product.color}`;
  modal.querySelector(".modal-visual").style.backgroundImage =
    `linear-gradient(180deg, transparent 30%, rgba(30, 61, 44, 0.66)), url('${product.image}')`;
  modal.querySelector(".modal-type").textContent = product.type;
  modal.querySelector(".modal-title").textContent = product.name;
  modal.querySelector(".modal-tagline").textContent = product.tagline;
  modal.querySelector(".modal-nutrients").textContent = product.nutrients;
  modal.querySelector(".modal-support").textContent = product.support;
  modal.querySelector(".modal-forms").textContent = product.forms;
  modal.querySelector(".modal-uses").textContent = product.uses;
  modal.querySelector(".modal-enquire").href =
    `mailto:natogexports@gmail.com?subject=Enquiry about ${product.name}`;
  modal.inert = false;
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  modal.querySelector(".modal-close").focus();
}
function closeProduct() {
  const modal = document.querySelector(".product-modal");
  if (!modal) return;
  modal.inert = true;
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  lastFocusedProduct?.focus();
}
window.addEventListener("hashchange", render);
render();
