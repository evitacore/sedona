var formOpen = document.querySelector(".open-hotels");
var formPopup = document.querySelector(".search-hotels-form");

formOpen.addEventListener("click", function(event) {
        event.preventDefault();
        formPopup.classList.toggle("hotel-show");
      });

