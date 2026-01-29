let productMap = new Map();

productMap.set("figurine", [
  {
    name: "Naruto Nendoroid",
    src: "icons/naruto_nendoroid.jpg",
  },
  { name: "Raiden Ei Nendoroid", src: "images/raiden-ei-nendoroid.webp" },
  { name: "Hatsune Miku Nendoroid", src: "images/hatsune-miko-nendoroid.png" },
  { name: "Nichijou Figurine", src: "icons/nichijou_figurine.jpg" },
  {
    name: "Gachiakuta Rudo Prize Figure",
    src: "images/gachiakuta-rudo-vibration-stars-prize-figure_1.webp",
  },
]);

productMap.set("t-shirt", [
  {
    name: "Kawaii Manga Anime T-Shirt",
    src: "images/cute-kawaii-manga-anime-merch-eat.jpg",
  },
]);

productMap.set("poster", [
  { name: "One Piece Poster", src: "images/one-piece-poster.webp" },
]);

function addTabButtonEvent(tabButton) {
  tabButton.addEventListener("click", tabButtonClick);
}

function tabButtonClick(event) {
  //get the current clicked tab button
  const targetTab = event.currentTarget;

  // generate the element class name for the image to be shown
  const tabImageSelector = ".image-" + targetTab.textContent;
  console.log(tabImageSelector);

  // find the image element
  const tabImage = document.querySelector(tabImageSelector);
  console.log(tabImage);

  // remove active class from tab button
  tabButtons.forEach(updateTabClicked);

  // remove active tab image from view
  const tabImages = document.querySelectorAll(".active-tab-image");
  tabImages.forEach(removeActiveTabImage);

  // add active class to clicked tab button
  targetTab.classList.add("tab-button-active");
  // show the corresponding tab image
  tabImage.classList.add("active-tab-image");
}

function updateTabClicked(tabButton) {
  tabButton.classList.remove("tab-button-active");
}

function removeActiveTabImage(tabImage) {
  tabImage.classList.remove("active-tab-image");
}

// --------------------------------------------------------------
// for the review statistics section
// review tab buttons functionality

function addReviewTabButtonEvent(reviewTabButton) {
  reviewTabButton.addEventListener("click", reviewTabButtonClick);
}

function reviewTabButtonClick(event) {
  //get the current clicked tab button
  const targetReviewTab = event.currentTarget;
  console.log(targetReviewTab);

  // generate the element class name for the review to be shown
  const reviewTabSelector = ".review-" + targetReviewTab.textContent;
  console.log(reviewTabSelector);

  // find the review element
  const reviewTab = document.querySelector(reviewTabSelector);
  console.log(reviewTab);

  // remove active class from review tab button
  reviewTabButtons.forEach(updateReviewTabClicked);

  // remove active review from view
  const reviewTabs = document.querySelectorAll(".active-statistic");
  reviewTabs.forEach(removeActiveReviewTab);

  // add active class to clicked review tab button
  targetReviewTab.classList.add("stats-button-active");

  // show the corresponding review tab
  reviewTab.classList.add("active-statistic");
}

function updateReviewTabClicked(reviewTabButton) {
  reviewTabButton.classList.remove("stats-button-active");
}

function removeActiveReviewTab(reviewTab) {
  reviewTab.classList.remove("active-statistic");
}
const tabButtons = document.querySelectorAll(".tab-button");
tabButtons.forEach(addTabButtonEvent);

// highlight the first button on the carousel by default
tabButtons[0].click();

const reviewTabButtons = document.querySelectorAll(".stats-button");
reviewTabButtons.forEach(addReviewTabButtonEvent);

// highlight same for horizontal review carousel
reviewTabButtons[0].click();

// --------------------------------------------------------------
// for the search functionality

const searchBtn = document.querySelector(".search-btn");
searchBtn.addEventListener("click", addSearchFunctionality);

function addSearchFunctionality(event) {
  const searchInput = document.querySelector(".search-input");
  const query = searchInput.value.trim().toLowerCase();

  if (query === "") {
    alert("Please enter a search term.");
    return;
  }

  const productsRes = document.querySelector(".products-grid");
  // Clear previous results
  productsRes.innerHTML = "";

  // get queried results
  const results = products.filter((product) =>
    product.name.toLowerCase().includes(query),
  );

  if (results.length === 0) {
    productsRes.innerHTML = "<p>No products found.</p>";
    return;
  }

  // Display results
  results.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("placeholder-div");

    const title = document.createElement("h4");
    title.textContent = product.name;

    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.name;

    productDiv.appendChild(image);
    productDiv.appendChild(title);
    productsRes.appendChild(productDiv);
  });
}
