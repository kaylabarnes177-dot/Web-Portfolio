document.addEventListener("DOMContentLoaded", function () {
  fetch("navbar.html")
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Could not load navbar.html");
      }

      return response.text();
    })
    .then(function (navbar) {
      document.getElementById("navbar").innerHTML = navbar;
    })
    .catch(function (error) {
      console.error(error);
    });
});
