const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const searchForm = document.getElementById("search-form");

function handleSearchBar() {
  if (searchInput.style.display === "none") {
    searchForm.style.border = "1px solid white";
    searchForm.style.marginRight = "0";

    searchButton.style.display = "block";
    searchInput.style.display = "block";
  } else if (searchButton.style.display === "block") {
    searchForm.style.border = "none";
    searchForm.style.marginRight = "-25px";

    searchButton.style.display = "none";
    searchInput.style.display = "none";
  }
}

/* Header Background */

$(window).on("scroll", function () {
  if ($(window).scrollTop() > 50) {
    $(".header").addClass("active");
  } else {
    //remove the background property so it comes transparent again (defined in your css)
    $(".header").removeClass("active");
  }
});

/* Event Listener for Carousel Scrolling */

const carousels = document.querySelectorAll(".carousel");
const rightButtons = document.querySelectorAll(".carousel-button-right");
const leftButtons = document.querySelectorAll(".carousel-button-left");

/* Evaluate this possibility:

const carousels = document.querySelector(".carousel");
const rightButtons = document.querySelector(".carousel-button-right");
const leftButtons = document.querySelector(".carousel-button-left");

rightButtons.addEventListener("click", handleNextContent(carousels));
leftButtons.addEventListener("click", handlePreviousContent(carousels)); */

rightButtons[0].addEventListener("click", () => {
  carousels[0].scrollLeft += carousels[0].offsetWidth;
});
rightButtons[1].addEventListener("click", () => {
  carousels[1].scrollLeft += carousels[1].offsetWidth;
});
rightButtons[2].addEventListener("click", () => {
  carousels[2].scrollLeft += carousels[2].offsetWidth;
});

leftButtons[0].addEventListener("click", () => {
  carousels[0].scrollLeft -= carousels[0].offsetWidth;
});
leftButtons[1].addEventListener("click", () => {
  carousels[1].scrollLeft -= carousels[1].offsetWidth;
});
leftButtons[2].addEventListener("click", () => {
  carousels[2].scrollLeft -= carousels[2].offsetWidth;
});

/* Evaluate this possibility:

function handleNextContent(carousel) {
  console.log("Right");
  carousel.scrollLeft += carousel.offsetWidth;
}

function handlePreviousContent(carousel) {
  console.log("Left");
  carousel.scrollLeft -= carousel.offsetWidth;
} */

/* Volume Button */

const mainVolumeButton = document.getElementById("main-volume-button");
const mainVideo = document.getElementById("main-video");

const portalVolumeButton = document.getElementById("portal-volume-button");
const portalVideo = document.getElementById("portal-main-video");

const handleVolumeButton = (volumeButton, video) => {
  if (volumeButton.innerHTML === "volume_off") {
    volumeButton.innerHTML = "volume_up";
    video.muted = !video.muted;
  } else if (volumeButton.innerHTML === "volume_up") {
    volumeButton.innerHTML = "volume_off";
    video.muted = !video.muted;
  } else if (volumeButton.innerHTML === "replay") {
    volumeButton.innerHTML = "volume_off";
    video.play();
    video.muted = true;
  }
};

mainVideo.addEventListener("pause", () => {
  mainVolumeButton.innerHTML = "replay";
});

portalVideo.addEventListener("pause", () => {
  portalVolumeButton.innerHTML = "replay";
});

// $(document).on("click",".containerVolume",function(e){
//   if(isMuted){
//       $('video').prop('muted', false);
//   }
//   else{
//       $('video').prop('muted',true);
//   }
// });

/* handlePortalDisplay */

const portal = document.getElementById("portal");
// const backgroundPortal = document.getElementById("background-portal");

const handlePortalDisplayBlock = () => {
  portal.style.display = "flex";
};

const handlePortalDisplayNone = () => {
  portal.style.display = "none";
};

/* handlePortalMovieCards */

const expandMovieCardsButton = document.getElementById(
  "expand-movie-cards-button"
);
const expandMovieDivider = document.getElementById("expand-movie-divider");
const hideablePortalMovieCards = document.getElementsByClassName("hide-pmc");

const handlePortalMovieCards = () => {
  if (expandMovieCardsButton.innerHTML === "expand_more") {
    expandMovieCardsButton.innerHTML = "expand_less";
    expandMovieDivider.style.marginTop = "0px";

    for (let i = 0; i < hideablePortalMovieCards.length; i++) {
      hideablePortalMovieCards[i].style.display = "block";
    }
  } else if (expandMovieCardsButton.innerHTML === "expand_less") {
    expandMovieCardsButton.innerHTML = "expand_more";
    expandMovieDivider.style.marginTop = "-80px";

    for (let i = 0; i < hideablePortalMovieCards.length; i++) {
      hideablePortalMovieCards[i].style.display = "none";
    }
  }
};
