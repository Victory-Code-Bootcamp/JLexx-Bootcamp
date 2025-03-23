document.addEventListener("DOMContentLoaded", function () {
  // Select the checkbox input element
  const checkbox = document.querySelector("input[type=checkbox]");

  // Select the element with the ID "hide"
  const hideElement = document.querySelector("#hide");

  // Add an event listener to the checkbox for the "change" event
  checkbox.addEventListener("change", function () {
    // Check if the checkbox is checked
    if (checkbox.checked) {
      // If checked, display the element by setting its display style to "block"
      hideElement.style.display = "block";
    } else {
      // If not checked, hide the element by setting its display style to "none"
      hideElement.style.display = "none";
    }
  });
});
