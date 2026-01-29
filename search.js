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

// --------------------------------------------------------------
// for the search functionality

function searchEventListener() {
  const searchBtn = document.querySelector(".button");
  if (searchBtn) {
    searchBtn.addEventListener("click", addSearchFunctionality);
    console.log("Search button event listener added");
  } else {
    console.log("Search button not found on this page");
  }
}

searchEventListener();

async function addSearchFunctionality() {
  const searchInput = document.querySelector(".search-input");
  const query = searchInput.value.trim().toLowerCase();

  if (query === "") {
    alert("Please enter a search term.");
    return;
  }

  const productsRes = document.querySelector(".products-grid");

  if (!productsRes) {
    console.log("Products grid element not found!");
    return;
  }

  // Clear previous results
  productsRes.innerHTML = "";

  // get queried results
  const results = productMap.get(query) || [];
  console.log(results);

  if (results.length === 0) {
    productsRes.innerHTML = "<p>No products found.</p>";
    return;
  }

  // Display results
  results.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("products");

    const title = document.createElement("h4");
    title.textContent = product.name;

    const image = document.createElement("img");
    image.src = product.src;
    image.alt = product.name;

    productDiv.appendChild(image);
    productDiv.appendChild(title);
    productsRes.appendChild(productDiv);
  });
}
