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

// NAV SECTION

let nav = document.querySelectorAll("header nav a");
nav[0].textContent = siteContent.nav["nav-item-1"];
nav[1].textContent = siteContent.nav["nav-item-2"];
nav[2].textContent = siteContent.nav["nav-item-3"];
nav[3].textContent = siteContent.nav["nav-item-4"];
nav[4].textContent = siteContent.nav["nav-item-5"];
nav[5].textContent = siteContent.nav["nav-item-6"];

// NAV TEXT GREEN

let navColor = document.querySelectorAll("header nav a");
navColor.forEach(link => {
  link.style.color = "green";
});

// ADD NEW LINKS TO NAV

let existingElement = document.querySelector("header nav");
const link = document.createElement("a");
link.textContent = "Blog";
link.style.color = "green";
existingElement.appendChild(link);
const link2 = document.createElement("a");
link2.textContent = "Directions";
link2.style.color = "green";
existingElement.appendChild(link2);

// CTA SECTION

let headImage = document.getElementById("cta-img");
headImage.setAttribute("src", siteContent.cta["img-src"]);

let ctah1 = document.querySelector("h1");
ctah1.textContent = siteContent.cta.h1;

let ctah1Button = document.querySelector("button");
ctah1Button.textContent = siteContent.cta.button;

// MAIN-CONTENT SECTION

let topContentH4 = document.querySelectorAll(".main-content .top-content h4");
topContentH4[0].textContent = siteContent["main-content"]["features-h4"];
topContentH4[1].textContent = siteContent["main-content"]["about-h4"];

let topContentP = document.querySelectorAll(".main-content .top-content p");
topContentP[0].textContent = siteContent["main-content"]["features-content"];
topContentP[1].textContent = siteContent["main-content"]["about-content"];

let bannerImg = document.querySelector("#middle-img");
bannerImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

let bottomContentH4 = document.querySelectorAll(
  ".bottom-content .text-content h4"
);
bottomContentH4[0].textContent = siteContent["main-content"]["services-h4"];
bottomContentH4[1].textContent = siteContent["main-content"]["product-h4"];
bottomContentH4[2].textContent = siteContent["main-content"]["vision-h4"];

let bottomContentP = document.querySelectorAll(
  ".bottom-content .text-content p"
);
bottomContentP[0].textContent = siteContent["main-content"]["services-content"];
bottomContentP[1].textContent = siteContent["main-content"]["product-content"];
bottomContentP[2].textContent = siteContent["main-content"]["vision-content"];

//CONTACT SECTION

let contactH4 = document.querySelector(".contact h4");
contactH4.textContent = siteContent.contact["contact-h4"];

let contactP = document.querySelectorAll(".contact p");
contactP[0].textContent = siteContent.contact.address;
contactP[1].textContent = siteContent.contact.phone;
contactP[2].textContent = siteContent.contact.email;

// FOOTER SECTION

let footer = document.querySelector("footer p");
footer.textContent = siteContent.footer.copyright;

//STRETCH

const button = document.querySelector("button");
const header = document.querySelector(".cta .cta-text h1");
const navigation = document.querySelectorAll("header nav a");
button.addEventListener("click", function() {
  header.style.color = "crimson";
  navigation.forEach(link => {
    link.style.color = "crimson";
  });
});
