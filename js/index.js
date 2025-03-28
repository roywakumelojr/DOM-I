const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//Navigation Content
let links = document.querySelectorAll("a");
for (let i = 0; i < links.length; i++){
  links[i].textContent = siteContent["nav"]["nav-item-" + (i+1)];
  links[i].style.color = "green";
}

// Main site title 
let mainTitle = document.querySelector("h1");
mainTitle.innerHTML = siteContent["cta"]["h1"].replace(/\s/g,"<br>");

// Call to action button
let button = document.querySelector(".cta .cta-text button");
button.textContent = siteContent["cta"]["button"];

// Call to action image
let header = document.getElementById("cta-img");
header.setAttribute('src', siteContent["cta"]["img-src"])

// Top content headers
let header4 = document.querySelectorAll("h4");
header4[0].textContent = siteContent["main-content"]["features-h4"];
header4[1].textContent = siteContent["main-content"]["about-h4"];

// Bottom content headers
header4[2].textContent = siteContent["main-content"]["services-h4"];
header4[3].textContent = siteContent["main-content"]["product-h4"];
header4[4].textContent = siteContent["main-content"]["vision-h4"];

// Main image
let middleImage = document.getElementById("middle-img");
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// Top content paragraphs
let paragraphs = document.querySelectorAll("P");
paragraphs[0].textContent = siteContent["main-content"]["features-content"];
paragraphs[1].textContent = siteContent["main-content"]["about-content"];

// Bottom content paragraphs 
paragraphs[2].textContent = siteContent["main-content"]["services-content"];
paragraphs[3].textContent = siteContent["main-content"]["product-content"];
paragraphs[4].textContent = siteContent["main-content"]["vision-content"];

// Contact sections
header4[5].textContent = siteContent["contact"]["contact-h4"];
paragraphs[5].textContent = siteContent["contact"]["address"];
paragraphs[6].textContent = siteContent["contact"]["phone"];
paragraphs[7].textContent = siteContent["contact"]["email"];

// Footer content
paragraphs[8].textContent = siteContent["footer"]["copyright"];


// New navigation links
let newNavItems = document.querySelector("nav");

let home = document.createElement("a");
home.textContent = "Home";
home.style.color = "green";
home.href = "#";
newNavItems.prepend(home);

let blog = document.createElement("a");
blog.textContent = "Blog";
blog.style.color = "green";
blog.href = "#";
newNavItems.appendChild(blog);

