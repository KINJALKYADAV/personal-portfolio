document.querySelectorAll(".clickable").forEach(function(div) {
    div.addEventListener("click", function() {
        window.location.href = div.getAttribute("data-url");
    });
});
@media (max-width: 800px) {
    .main-container {
      flex-direction: column;
    }
  }