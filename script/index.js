/* ------------------------------ */

/* Handle Search Bar */

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

/* ------------------------------ */

/* ------------------------------ */

/* Header Background */

setTimeout(() => {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      document.getElementsByClassName("header")[0].classList.add("active");
    } else {
      //remove the background property so it comes transparent again (defined in css)
      document.getElementsByClassName("header")[0].classList.remove("active");
    }
  });
}, 500);

/* ------------------------------ */

/* ------------------------------ */

/* Event Listener for Carousel Scrolling */

const carousels = document.querySelectorAll(".carousel");
const carouselsLength = carousels.length;
const rightButtons = document.querySelectorAll(".carousel-button-right");
const leftButtons = document.querySelectorAll(".carousel-button-left");

/* Evaluate this possibility:

const carousels = document.querySelector(".carousel");
const rightButtons = document.querySelector(".carousel-button-right");
const leftButtons = document.querySelector(".carousel-button-left");

rightButtons.addEventListener("click", handleNextContent(carousels));
leftButtons.addEventListener("click", handlePreviousContent(carousels)); */

setTimeout(() => {
  for (let i = 0; i < carouselsLength; i++) {
    rightButtons[i].addEventListener("click", () => {
      carousels[i].scrollLeft += carousels[i].offsetWidth;
    });

    leftButtons[i].addEventListener("click", () => {
      carousels[i].scrollLeft -= carousels[i].offsetWidth;
    });
  }
}, 500);

/* Evaluate this possibility:

function handleNextContent(carousel) {
  console.log("Right");
  carousel.scrollLeft += carousel.offsetWidth;
}

function handlePreviousContent(carousel) {
  console.log("Left");
  carousel.scrollLeft -= carousel.offsetWidth;
} */

/* ------------------------------ */

/* ------------------------------ */

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

setTimeout(() => {
  mainVideo.addEventListener("play", () => {
    mainVolumeButton.innerHTML = "volume_off";
    mainVideo.muted = true;
  });

  portalVideo.addEventListener("play", () => {
    portalVolumeButton.innerHTML = "volume_off";
    portalVideo.muted = true;
  });

  mainVideo.addEventListener("pause", () => {
    mainVolumeButton.innerHTML = "replay";
  });

  portalVideo.addEventListener("pause", () => {
    portalVolumeButton.innerHTML = "replay";
  });
}, 500);

setTimeout(() => {
  mainVideo.play();
}, 3000);

/* ------------------------------ */

/* ------------------------------ */

/* handlePortalDisplay */

const portal = document.getElementById("portal");

const handlePortalDisplayBlock = () => {
  portal.style.display = "flex";
  portalVideo.load();
  mainVideo.pause();
  portalVolumeButton.innerHTML = "volume_off";
  portalVideo.muted = true;
  setTimeout(() => {
    portalVideo.play();
  }, 3000);

  // Hiding Portal pressing ESC
  window.onkeyup = (event) => {
    if (event.keyCode === 27) {
      portal.style.display = "none";
    }
  };
};

const handlePortalDisplayNone = () => {
  portal.style.display = "none";
  mainVideo.play();
  portalVideo.pause();
};

/* ------------------------------ */

/* ------------------------------ */

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

/* ------------------------------ */

/* ------------------------------ */

/* handleChangeOnPortalSelect */

const portalSelectEpisodes = document.getElementById("episodes-portal");
const episodesCards = document.getElementsByClassName("episode-card");
const episodesCardsLength = episodesCards.length;

const temporada1Data = [
  {
    img: "https://asturscore.com/wp-content/uploads/2019/02/Caratula-BSO-The-Umbrella-Academy-Jeff-Russo.jpg",
    title: "The Umbrella Academy",
    duration: "56 min.",
    description:
      "Una familia disfuncional de superh&eacute;roes trabajan juntos para descubrir c&oacute;mo falleci&oacute; su padre. La misi&oacute;n no resulta sencilla debido a que todos tienen personalidades y poderes diferentes.",
  },
  {
    img: "https://i.pinimg.com/originals/ae/e0/26/aee026f47aa9a01116f4b7e613c8d470.png",
    title: "Stranger Things",
    duration: "49 min.",
    description:
      "Despu&eacute;s de la extra&ntildea desaparici&oacute;n de un ni&ntilde;o, un pueblo se encuentra ante un misterio que revela experimentos secretos, fuerzas sobrenaturales y a una ni&ntilde;a muy especial.",
  },
  {
    img: "https://d25bohr794b7hg.cloudfront.net/tlnt-holdings/case-studies/netflix-dark/netflix-dark-selected-01.jpg",
    title: "Dark",
    duration: "48 min.",
    description:
      "Un ni&ntilde;o desaparecido expone los secretos y las conexiones ocultas entre cuatro familias mientras desentra&ntilde;an lentamente una siniestra conspiraci&oacute;n de viaje en el tiempo que abarca tres generaciones.",
  },
  {
    img: "https://i.pinimg.com/originals/43/9a/0d/439a0d0c452ac069332e0c1450e5690a.jpg",
    title: "13 Reasons Why",
    duration: "51 min.",
    description:
      "El adolescente Clay Jensen se halla en medio de una serie de misterios desgarradores accionados por el tr&aacute;gico suicidio de una de sus amigas.",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0969/9128/products/MoneyHeist-NetflixTVShowPosterFanArt_67917fbc-de8e-4228-90a4-217503d7bbd4.jpg",
    title: "La Casa de Papel",
    duration: "56 min.",
    description:
      "Un grupo de asaltantes busca realizar el atraco del siglo al internarse en la F&aacute;brica de Moneda y Timbre de Espa&ntilde;a, guiados por el personaje conocido como El Profesor.",
  },
];

const temporada2Data = [
  {
    img: "https://i.pinimg.com/236x/8a/8f/b0/8a8fb02d966e9cf4e811d1daa6699653--batman-and-catwoman-hd-movies.jpg",
    title: "Batman: el Caballero de la Noche Asciende",
    duration: "2h 44min",
    description:
      "Ocho a&ntilde;os despu&eacute;s de asumir la culpa por la muerte de Harvey Dent y desaparecer en la noche, Batman se ve obligado a salir del exilio autoimpuesto gracias a una ladrona astuta y a un terrorista despiadado.",
  },

  {
    img: "https://upload.wikimedia.org/wikipedia/en/c/c2/Back_to_the_Future_Part_II.jpg",
    title: "Volver al Futuro II",
    duration: "1h 48min",
    description:
      "Un adolescente y un inventor extravagante viajan al pasado y al futuro para alterar una serie de eventos desastrosos.",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg",
    title: "Forrest Gump",
    duration: "2h 22min",
    description:
      "Forrest Gump, un joven sure&ntilde;o, tenaz e inocente, es protagonista de acontecimientos cruciales en la historia de los Estados Unidos.",
  },
  {
    img: "https://www.joblo.com/assets/images/oldsite/posters/images/full/1999-poster-matrix-2_thumb.jpg",
    title: "Matrix",
    duration: "2h 16min",
    description:
      "Un joven hacker es convocado por el movimiento de resistencia liderado por Morfeo, que lucha contra la dominaci&oacute;n de los seres humanos por las m&aacute;quinas.",
  },
  {
    img: "https://i.ebayimg.com/images/g/s8AAAOSwamZdmnsq/s-l300.jpg",
    title: "Historia de un Matrimonio",
    duration: "2h 17min",
    description:
      "Un director de teatro y su mujer, actriz, luchan por superar un divorcio que les lleva al extremo tanto en lo personal como en lo creativo.",
  },
];

const temporada3Data = [
  {
    img: "https://i.pinimg.com/originals/ae/e0/26/aee026f47aa9a01116f4b7e613c8d470.png",
    title: "Stranger Things",
    duration: "49 min.",
    description:
      "Despu&eacute;s de la extra&ntildea desaparici&oacute;n de un ni&ntilde;o, un pueblo se encuentra ante un misterio que revela experimentos secretos, fuerzas sobrenaturales y a una ni&ntilde;a muy especial.",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/en/d/db/Rocky_Balboa_%282006%29_theatrical_poster.jpg",
    title: "Rocky I",
    duration: "2h 2min",
    description:
      "Un humilde boxeador de Filadelfia, en el que nadie cree, tiene la oportunidad de cambiar su vida por completo si lucha por el t&iacute;tulo mundial contra el temible Apollo Creed.",
  },

  {
    img: "https://cdn.shopify.com/s/files/1/0969/9128/products/MoneyHeist-NetflixTVShowPosterFanArt_67917fbc-de8e-4228-90a4-217503d7bbd4.jpg",
    title: "La Casa de Papel",
    duration: "56 min.",
    description:
      "Un grupo de asaltantes busca realizar el atraco del siglo al internarse en la F&aacute;brica de Moneda y Timbre de Espa&ntilde;a, guiados por el personaje conocido como El Profesor.",
  },
  {
    img: "https://i.ebayimg.com/images/g/s8AAAOSwamZdmnsq/s-l300.jpg",
    title: "Historia de un Matrimonio",
    duration: "2h 17min",
    description:
      "Un director de teatro y su mujer, actriz, luchan por superar un divorcio que les lleva al extremo tanto en lo personal como en lo creativo.",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg",
    title: "Forrest Gump",
    duration: "2h 22min",
    description:
      "Forrest Gump, un joven sure&ntilde;o, tenaz e inocente, es protagonista de acontecimientos cruciales en la historia de los Estados Unidos.",
  },
];

const temporada4Data = [
  {
    img: "https://d25bohr794b7hg.cloudfront.net/tlnt-holdings/case-studies/netflix-dark/netflix-dark-selected-01.jpg",
    title: "Dark",
    duration: "48 min.",
    description:
      "Un ni&ntilde;o desaparecido expone los secretos y las conexiones ocultas entre cuatro familias mientras desentra&ntilde;an lentamente una siniestra conspiraci&oacute;n de viaje en el tiempo que abarca tres generaciones.",
  },
  {
    img: "https://i.pinimg.com/originals/43/9a/0d/439a0d0c452ac069332e0c1450e5690a.jpg",
    title: "13 Reasons Why",
    duration: "51 min.",
    description:
      "El adolescente Clay Jensen se halla en medio de una serie de misterios desgarradores accionados por el tr&aacute;gico suicidio de una de sus amigas.",
  },
  {
    img: "https://i.pinimg.com/236x/8a/8f/b0/8a8fb02d966e9cf4e811d1daa6699653--batman-and-catwoman-hd-movies.jpg",
    title: "Batman: el Caballero de la Noche Asciende",
    duration: "2h 44min",
    description:
      "Ocho a&ntilde;os despu&eacute;s de asumir la culpa por la muerte de Harvey Dent y desaparecer en la noche, Batman se ve obligado a salir del exilio autoimpuesto gracias a una ladrona astuta y a un terrorista despiadado.",
  },

  {
    img: "https://upload.wikimedia.org/wikipedia/en/c/c2/Back_to_the_Future_Part_II.jpg",
    title: "Volver al Futuro II",
    duration: "1h 48min",
    description:
      "Un adolescente y un inventor extravagante viajan al pasado y al futuro para alterar una serie de eventos desastrosos.",
  },
  {
    img: "https://asturscore.com/wp-content/uploads/2019/02/Caratula-BSO-The-Umbrella-Academy-Jeff-Russo.jpg",
    title: "The Umbrella Academy",
    duration: "56 min.",
    description:
      "Una familia disfuncional de superh&eacute;roes trabajan juntos para descubrir c&oacute;mo falleci&oacute; su padre. La misi&oacute;n no resulta sencilla debido a que todos tienen personalidades y poderes diferentes.",
  },
];

const handleChangeOnPortalSelect = () => {
  if (portalSelectEpisodes.value === "temporada-1") {
    for (let i = 0; i < episodesCardsLength; i++) {
      let episodeCardImg = episodesCards[i].children[1].children[0];
      episodeCardImg.attributes[0].value = temporada1Data[i].img;
      episodeCardImg.attributes[1].value = temporada1Data[i].title;

      let episodeCardDetails = episodesCards[i].children[2];
      episodeCardDetails.children[0].children[0].innerHTML =
        temporada1Data[i].title;
      episodeCardDetails.children[0].children[1].innerHTML =
        temporada1Data[i].duration;
      episodeCardDetails.children[1].innerHTML = temporada1Data[i].description;
    }
  } else if (portalSelectEpisodes.value === "temporada-2") {
    for (let i = 0; i < episodesCardsLength; i++) {
      let episodeCardImg = episodesCards[i].children[1].children[0];
      episodeCardImg.attributes[0].value = temporada2Data[i].img;
      episodeCardImg.attributes[1].value = temporada2Data[i].title;

      let episodeCardDetails = episodesCards[i].children[2];
      episodeCardDetails.children[0].children[0].innerHTML =
        temporada2Data[i].title;
      episodeCardDetails.children[0].children[1].innerHTML =
        temporada2Data[i].duration;
      episodeCardDetails.children[1].innerHTML = temporada2Data[i].description;
    }
  } else if (portalSelectEpisodes.value === "temporada-3") {
    for (let i = 0; i < episodesCardsLength; i++) {
      let episodeCardImg = episodesCards[i].children[1].children[0];
      episodeCardImg.attributes[0].value = temporada3Data[i].img;
      episodeCardImg.attributes[1].value = temporada3Data[i].title;

      let episodeCardDetails = episodesCards[i].children[2];
      episodeCardDetails.children[0].children[0].innerHTML =
        temporada3Data[i].title;
      episodeCardDetails.children[0].children[1].innerHTML =
        temporada3Data[i].duration;
      episodeCardDetails.children[1].innerHTML = temporada3Data[i].description;
    }
  } else if (portalSelectEpisodes.value === "temporada-4") {
    for (let i = 0; i < episodesCardsLength; i++) {
      let episodeCardImg = episodesCards[i].children[1].children[0];
      episodeCardImg.attributes[0].value = temporada4Data[i].img;
      episodeCardImg.attributes[1].value = temporada4Data[i].title;

      let episodeCardDetails = episodesCards[i].children[2];
      episodeCardDetails.children[0].children[0].innerHTML =
        temporada4Data[i].title;
      episodeCardDetails.children[0].children[1].innerHTML =
        temporada4Data[i].duration;
      episodeCardDetails.children[1].innerHTML = temporada4Data[i].description;
    }
  }
};

/* ------------------------------ */

/* ------------------------------ */

/* handleMyList */

const mainMovieCards = document.querySelectorAll(".movie-card");

setTimeout(() => {
  mainMovieCards.forEach((movieCard) => {
    /* MovieCard - .details - .icons - i(icon-add) */
    let clickedIcon = movieCard.children[1].children[0].children[1];

    clickedIcon.addEventListener("click", () => {
      handleMyList(movieCard);
    });
  });
}, 500);

const myList = document.getElementById("my-list");
let myListMovieCards = document
  .getElementById("my-list")
  .querySelectorAll(".movie-card");

if (myList.children[1].children[1].children.length > 0) {
  myList.style.display = "block";
} else {
  myList.style.display = "none";
}

// myListMovieCards.forEach((myListMovieCard) => {
//   let imageValue =
//     myListMovieCard.children[0].children[0].children[0].attributes[0].value;

//   if (imageValue === "") {
//     myListMovieCard.style.display = "none";
//   } else {
//     myListMovieCard.style.display = "flex";
//   }
// });

// /* MovieCard - .main-image - picture - img */
// movieCard.children[0].children[0].children[0].attributes[0].value;

const handleMyList = (movieCard) => {
  let movieCardImgSrc =
    movieCard.children[0].children[0].children[0].attributes[0].value;
  let movieCardImgAlt =
    movieCard.children[0].children[0].children[0].attributes[1].value;
  let movieCardDuration =
    movieCard.children[1].children[1].children[2].innerHTML;
  let movieCardPercentageString =
    movieCard.children[1].children[1].children[0].innerHTML;
  let movieCardPercentage =
    movieCardPercentageString[0] + movieCardPercentageString[1];
  let clickedIcon = movieCard.children[1].children[0].children[1];

  if (clickedIcon.innerHTML === "add") {
    let newMovieCard = createMovieCard(
      movieCardImgSrc,
      movieCardImgAlt,
      movieCardDuration,
      movieCardPercentage
    );
    myList.children[1].children[1].appendChild(newMovieCard);

    mainMovieCards.forEach((mainMovieCard) => {
      let mainMovieCardImgSrc =
        mainMovieCard.children[0].children[0].children[0].attributes[0].value;

      if (mainMovieCardImgSrc === movieCardImgSrc) {
        let clickedIcon = mainMovieCard.children[1].children[0].children[1];
        clickedIcon.innerHTML = "delete_outline";
        clickedIcon.attributes[1].value = "Remover de favoritos";
      }
    });

    let newMovieCardIconClickeable =
      newMovieCard.children[1].children[0].children[1];

    let newMovieCardImgSrc = movieCardImgSrc;

    newMovieCardIconClickeable.addEventListener("click", () => {
      mainMovieCards.forEach((mainMovieCard) => {
        let mainMovieCardImgSrc =
          mainMovieCard.children[0].children[0].children[0].attributes[0].value;

        if (mainMovieCardImgSrc === newMovieCardImgSrc) {
          let clickedIcon = mainMovieCard.children[1].children[0].children[1];
          clickedIcon.innerHTML = "add";
          clickedIcon.attributes[1].value = "Agregar a favoritos";
        }
      });

      myList.children[1].children[1].removeChild(newMovieCard);

      if (myList.children[1].children[1].children.length > 0) {
        myList.style.display = "block";
      } else {
        myList.style.display = "none";
      }
    });

    clickedIcon.innerHTML = "delete_outline";
    clickedIcon.attributes[1].value = "Remover de favoritos";
  } else if (clickedIcon.innerHTML === "delete_outline") {
    let myListMovieCards = document
      .getElementById("my-list")
      .querySelectorAll(".movie-card");

    myListMovieCards.forEach((myListMovieCard) => {
      let myListMovieCardImgSrc =
        myListMovieCard.children[0].children[0].children[0].attributes[0].value;

      if (myListMovieCardImgSrc === movieCardImgSrc) {
        myList.children[1].children[1].removeChild(myListMovieCard);
      }
    });

    mainMovieCards.forEach((mainMovieCard) => {
      let mainMovieCardImgSrc =
        mainMovieCard.children[0].children[0].children[0].attributes[0].value;

      if (mainMovieCardImgSrc === movieCardImgSrc) {
        let clickedIcon = mainMovieCard.children[1].children[0].children[1];
        clickedIcon.innerHTML = "add";
        clickedIcon.attributes[1].value = "Agregar a favoritos";
      }
    });

    clickedIcon.innerHTML = "add";
    clickedIcon.attributes[1].value = "Agregar a favoritos";
  }

  if (myList.children[1].children[1].children.length > 0) {
    myList.style.display = "block";
  } else {
    myList.style.display = "none";
  }
};

/******* Function to create Movie Cards */

const createMovieCard = (
  url = "",
  altText = "Image",
  duration = "1h 50min",
  percentage = "96"
) => {
  /* ---------- Create MovieCard with class .movie-card ---------- */
  let movieCard = document.createElement("article");
  let movieCardClass = document.createAttribute("class");
  movieCardClass.value = "movie-card";
  movieCard.setAttributeNode(movieCardClass);

  /* ---------- Create MovieCard's Image Container
                and add it to MovieCard ---------- */

  let imageContainer = document.createElement("div");
  let imageContainerClass = document.createAttribute("class");
  imageContainerClass.value = "movie-card--main-image";
  imageContainer.setAttributeNode(imageContainerClass);
  movieCard.appendChild(imageContainer);

  /* ---------- Create picture and img in MovieCard's Image Container
  ImgAlt and ImgSrc go according to those sent in handleMyList(). ---------- */

  let pictureElement = document.createElement("picture");
  let imgElement = document.createElement("img");
  let imgSrc = document.createAttribute("src");
  let imgAlt = document.createAttribute("alt");
  imgSrc.value = url;
  imgAlt.value = altText;
  imgElement.setAttributeNode(imgSrc);
  imgElement.setAttributeNode(imgAlt);
  imageContainer.appendChild(pictureElement);
  pictureElement.appendChild(imgElement);

  /* ---------- Create MovieCard's Details Container ---------- */

  let detailsContainer = document.createElement("div");
  let detailsContainerClass = document.createAttribute("class");
  detailsContainerClass.value = "movie-card--details";
  detailsContainer.setAttributeNode(detailsContainerClass);
  movieCard.appendChild(detailsContainer);

  /* ---------- Creating MovieCard's Details Container children (START) ---------- */

  let iconsContainer = document.createElement("div");
  let textContainer = document.createElement("div");
  let iconsContainerClass = document.createAttribute("class");
  let textContainerClass = document.createAttribute("class");
  iconsContainerClass.value = "movie-card--details--icons-container";
  textContainerClass.value = "movie-card--details--text-container";
  iconsContainer.setAttributeNode(iconsContainerClass);
  textContainer.setAttributeNode(textContainerClass);
  detailsContainer.appendChild(iconsContainer);
  detailsContainer.appendChild(textContainer);

  /* ---------- Creating MovieCard's Details Container children (END) ---------- */

  /* ---------- Creating Icons Container's content (START) ---------- */

  /* Play Icon */

  let playIcon = document.createElement("i");
  let playIconClass = document.createAttribute("class");
  playIconClass.value = "material-icons";
  playIcon.setAttributeNode(playIconClass);
  let playIconTitle = document.createAttribute("title");
  playIconTitle.value = "Reproducir";
  playIcon.setAttributeNode(playIconTitle);
  playIcon.innerHTML = "play_arrow";
  iconsContainer.appendChild(playIcon);

  /* Add Icon */

  let addIcon = document.createElement("i");
  let addIconClass = document.createAttribute("class");
  addIconClass.value = "material-icons";
  addIcon.setAttributeNode(addIconClass);
  let addIconTitle = document.createAttribute("title");
  addIconTitle.value = "Remover de favoritos";
  addIcon.setAttributeNode(addIconTitle);
  addIcon.innerHTML = "delete_outline";
  iconsContainer.appendChild(addIcon);

  /* Like Icon */

  let likeIcon = document.createElement("i");
  let likeIconClass = document.createAttribute("class");
  likeIconClass.value = "material-icons";
  likeIcon.setAttributeNode(likeIconClass);
  let likeIconTitle = document.createAttribute("title");
  likeIconTitle.value = "Me gusta";
  likeIcon.setAttributeNode(likeIconTitle);
  likeIcon.innerHTML = "thumb_up_off_alt";
  iconsContainer.appendChild(likeIcon);

  /* Dislike Icon */

  let dislikeIcon = document.createElement("i");
  let dislikeIconClass = document.createAttribute("class");
  dislikeIconClass.value = "material-icons";
  dislikeIcon.setAttributeNode(dislikeIconClass);
  let dislikeIconTitle = document.createAttribute("title");
  dislikeIconTitle.value = "No me gusta";
  dislikeIcon.setAttributeNode(dislikeIconTitle);
  dislikeIcon.innerHTML = "thumb_down_off_alt";
  iconsContainer.appendChild(dislikeIcon);

  /* Expand Icon */

  let expandIcon = document.createElement("button");
  let expandIconClass = document.createAttribute("class");
  expandIconClass.value = "material-icons";
  expandIcon.setAttributeNode(expandIconClass);
  let expandIconTitle = document.createAttribute("title");
  expandIconTitle.value = "Ver más";
  expandIcon.setAttributeNode(expandIconTitle);
  let expandIconOnClick = document.createAttribute("onclick");
  expandIconOnClick.value = "handlePortalDisplayBlock()";
  expandIcon.setAttributeNode(expandIconOnClick);
  expandIcon.innerHTML = "expand_more";
  iconsContainer.appendChild(expandIcon);

  /* ---------- Creating Icons Container's content (END) ---------- */

  /* ---------- Creating Text Container's content (START) ---------- */

  /* Green Text */

  let greenText = document.createElement("p");
  let greenTextClass = document.createAttribute("class");
  greenTextClass.value = "green-text";
  greenText.setAttributeNode(greenTextClass);
  greenText.innerHTML = `${percentage}% para ti`;
  textContainer.appendChild(greenText);

  /* TV-MA Text */

  let tvmaText = document.createElement("p");
  let tvmaTextClass = document.createAttribute("class");
  tvmaTextClass.value = "tv-ma-text";
  tvmaText.setAttributeNode(tvmaTextClass);
  tvmaText.innerHTML = "TV-MA";
  textContainer.appendChild(tvmaText);

  /* Duration Text */

  let durationText = document.createElement("p");
  durationText.innerHTML = duration;
  textContainer.appendChild(durationText);

  /* ---------- Creating Text Container's content (END) ---------- */

  return movieCard;
};

/*

Al dar clic en una MovieCard, el src debe irse a la MovieCard añadida
a MyList y, al mismo tiempo, cambiar el clickedIcon de todas las
MovieCards que tengan el mismo src.

1. Podrían existir los elementos, y
src="" || null || undefined ? display="none" : display="block||flex"

2. No existen, y se crean y añaden a MyList.

*/

/* ------------------------------ */
