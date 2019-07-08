const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// Navigation
const nav = document.querySelectorAll("nav a");

nav.forEach((link, index) => {
  link.textContent = siteContent.nav[`nav-item-${index + 1}`];
});

// h1

const header = document.querySelector(".container .cta-text h1");

header.textContent = siteContent.cta.h1;

// Button

const ctabutton = document.querySelector("button");

ctabutton.textContent = siteContent.cta.button;

// Circular Image

const picture = document.querySelector(".container .cta #cta-img");

picture.setAttribute("src", siteContent.cta["img-src"]);

//TOP CONTENT HEADINGS

const topContentH4 = document.querySelectorAll(
  ".main-content .top-content .text-content h4"
);

topContentH4[0].textContent = siteContent["main-content"]["features-h4"];
topContentH4[1].textContent = siteContent["main-content"]["about-h4"];

// TOP CONTENT - CONTENT

const topContentDescription = document.querySelectorAll(
  ".container .main-content .top-content .text-content p"
);

topContentDescription[0].textContent =
  siteContent["main-content"]["features-content"];
topContentDescription[1].textContent =
  siteContent["main-content"]["about-content"];

//MIDDLE IMAGE

const middleImg = document.querySelector(
  ".container .main-content #middle-img"
);

middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// BOTTOM CONTENT HEADER

bottomContentH4 = document.querySelectorAll(
  ".container .main-content .bottom-content .text-content h4"
);

bottomContentH4[0].textContent = siteContent["main-content"]["services-h4"];
bottomContentH4[1].textContent = siteContent["main-content"]["product-h4"];
bottomContentH4[2].textContent = siteContent["main-content"]["vision-h4"];

//BOTTOM CONTENT - CONTENT

const bottomContentDescription = document.querySelectorAll(
  ".container .main-content .bottom-content .text-content p"
);

bottomContentDescription[0].textContent =
  siteContent["main-content"]["services-content"];
bottomContentDescription[1].textContent =
  siteContent["main-content"]["product-content"];
bottomContentDescription[2].textContent =
  siteContent["main-content"]["vision-content"];

//Contact Information

const contactH4 = document.querySelector(".container .contact h4");

contactH4.textContent = siteContent.contact["contact-h4"];

//Contact address

const address = document.querySelectorAll(".container .contact p");

address[0].textContent = siteContent.contact.address;
address[1].textContent = siteContent.contact.phone;
address[2].textContent = siteContent.contact.email;

//Footer

const footer = document.querySelector(".container footer");

footer.textContent = siteContent.footer.copyright;
