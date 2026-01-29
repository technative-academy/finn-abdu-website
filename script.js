const tabButtons = document.querySelectorAll(".tab-button");
tabButtons.forEach(addTabButtonEvent);

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
